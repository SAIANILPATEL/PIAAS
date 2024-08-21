// server.js
import express from 'express';
import multer from 'multer';
import fs from 'fs-extra';
import path from 'path';
import simpleGit from 'simple-git';

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });
const git = simpleGit();

app.post('/upload', upload.fields([{ name: 'jmx' }, { name: 'data' }]), async (req, res) => {
    try {
        const jmxFile = req.files['jmx'][0];
        const dataFiles = req.files['data'] || [];

        const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
        const branchName = `upload-${timestamp}`;

        await git.init();
        await git.checkoutLocalBranch(branchName);

        // Create directories and move files
        const testConfigDir = path.join('repo', 'test-config');
        const testDataDir = path.join('repo', 'test-data');
        await fs.ensureDir(testConfigDir);
        await fs.ensureDir(testDataDir);

        await fs.move(jmxFile.path, path.join(testConfigDir, jmxFile.originalname));

        if (dataFiles.length > 0) {
            for (const file of dataFiles) {
                await fs.move(file.path, path.join(testDataDir, file.originalname));
            }
        } else {
            await fs.writeFile(path.join(testDataDir, '.gitkeep'), '');
        }

        await git.add('./*');
        await git.commit('Add uploaded files');
        await git.push('origin', branchName);

        res.status(200).json({ message: 'Files uploaded and committed to the branch' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
