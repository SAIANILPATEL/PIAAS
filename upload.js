import express from 'express';
import multer from 'multer';
import simpleGit from 'simple-git';
import path from 'path';
import fs from 'fs';
import os from 'os';
import fsExtra from 'fs-extra';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const upload = multer({ dest: 'uploads/' });
const GIT_REMOTE_URL = 'https://github.com/SAIANILPATEL/PIAAS';

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.fields([{ name: 'jmx_file', maxCount: 1 }, { name: 'test_data_files', maxCount: 10 }]), async (req, res) => {
    const testId = req.body.test_id;
    const instanceType = req.body.instance_type;
    const region = "us-east-2";
    const ami = req.body.ami;
    const users = req.body.users;
    const rampUp = req.body.ramp_up;
    const duration = req.body.duration;
    const jmxFile = req.files.jmx_file[0];
    const testDataFiles = req.files.test_data_files || [];

    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'git-'));
    const git = simpleGit();

    try {
        // Clone the repo to a temporary directory
        await git.clone(GIT_REMOTE_URL, tempDir);
        await git.cwd(tempDir);

        // Create a new branch
        await git.checkoutLocalBranch(testId);

        // Create directories
        const testScriptDir = path.join(tempDir, 'test-config');
        const testDataDir = path.join(tempDir, 'test-data');
        fs.mkdirSync(testScriptDir, { recursive: true });
        fs.mkdirSync(testDataDir, { recursive: true });

        // Clear existing files in the directories
        fs.readdirSync(testScriptDir).forEach(file => fs.unlinkSync(path.join(testScriptDir, file)));
        fs.readdirSync(testDataDir).forEach(file => fs.unlinkSync(path.join(testDataDir, file)));

        // Move uploaded files to the respective directories
        const jmxFilePath = path.join(testScriptDir, jmxFile.originalname);
        fs.renameSync(jmxFile.path, jmxFilePath);

        if (testDataFiles.length > 0) {
            testDataFiles.forEach(file => {
                const testDataFilePath = path.join(testDataDir, file.originalname);
                fs.renameSync(file.path, testDataFilePath);
            });
        } else {
            // Create an empty .gitkeep file in the test-data directory to ensure it gets pushed to the repo
            const gitKeepFilePath = path.join(testDataDir, '.gitkeep');
            fs.writeFileSync(gitKeepFilePath, ''); // Create the .gitkeep file

            // Verify the file was created
            if (!fs.existsSync(gitKeepFilePath)) {
                throw new Error(`Failed to create .gitkeep file at ${gitKeepFilePath}`);
            }
        }

        // Remove any deleted files from the repo
        await git.add('.');
        const status = await git.status();
        console.log('Git status:', status);

        // Commit and push the changes
        if (status.files.length > 0) {
            await git.commit(`Uploaded files for test ID ${testId}`);
            await git.push(['-u', 'origin', testId]);
        }

        // Prepare the payload for the POST request
        const payload = {
            test_id: testId,
            cluster_size: 2, // Replace with actual cluster size if needed
            instance_type: instanceType,
            ami_id: ami,
            region: region,
            github_url: GIT_REMOTE_URL,
            github_branch: testId,
            users: parseInt(users, 10),
            ramp_up: parseInt(rampUp, 10),
            test_duration: parseInt(duration, 10)
        };

        // Make the POST request
        await axios.post('http://3.144.209.64:8000/infrastructure/create', payload, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        res.status(200).send('Files uploaded and infrastructure creation initiated');
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).send('Error processing the request');
    } finally {
        fsExtra.removeSync(tempDir);
    }
});
