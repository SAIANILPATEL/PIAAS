import { useContext } from 'react';
import { context } from '../MainNewTest';

export default function MainConfigEnv() {
    const {
        selectedEnv,
        setSelectedEnv,
        selectedCloudProvider,
        setSelectedCloudProvider,
        instanceType,
        setInstanceType,
    } = useContext(context);

    const handleSelection = (value) => {
        setSelectedEnv(value);
        setSelectedCloudProvider('');  // Reset the cloud provider selection when environment changes
    };

    const handleCloudProviderSelection = (provider) => {
        setSelectedCloudProvider(provider);
    };

    const handleInstanceTypeChange = (event) => {
        const selectedValue = event.target.value;
        setInstanceType(selectedValue); // Update state with selected value
        console.log('Selected Instance Type:', selectedValue); // Log selected value
    };

    return (
        <div className="flex flex-col mx-6 my-6 transition duration-500 ease-in-out">
            <div className="flex flex-col items-center">
                <span className="mb-4 text-lg font-medium">How would you like to run your test today?</span>
                <form className="max-w-60">
                    <fieldset className="space-y-4">
                        <label 
                            className={`items-center mr-7 px-4 py-2 border rounded-full cursor-pointer justify-center ${
                                selectedEnv === 'Cloud' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700'
                            }`}
                            onClick={() => handleSelection('Cloud')}
                        >
                            <input 
                                type="radio" 
                                className="appearance-none" 
                                name="env" 
                                value="Cloud" 
                                checked={selectedEnv === 'Cloud'} 
                                onChange={() => handleSelection('Cloud')} 
                            />
                            <span>Cloud</span>
                        </label>
                        <label 
                            className={` items-center px-4 py-2 border rounded-full cursor-pointer justify-center ${
                                selectedEnv === 'On-Prem' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700'
                            }`}
                            onClick={() => handleSelection('On-Prem')}
                        >
                            <input 
                                type="radio" 
                                className="appearance-none" 
                                name="env" 
                                value="On-Prem" 
                                checked={selectedEnv === 'On-Prem'} 
                                onChange={() => handleSelection('On-Prem')} 
                            />
                            <span>On-Prem</span>
                        </label>
                    </fieldset>
                </form>

                {selectedEnv === 'Cloud' && (
                    <>
                        <span className="mt-6 mb-4 text-lg font-medium">Great, which cloud provider do you want to use?</span>
                        <div className="flex space-x-4">
                            <label
                                className={`flex items-center space-x-2 px-4 py-2 border rounded-full cursor-pointer ${
                                    selectedCloudProvider === 'AWS' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700'
                                }`}
                                onClick={() => handleCloudProviderSelection('AWS')}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png" alt="AWS Logo" className="mt-1 w-6 h-4" />
                                <span>AWS</span>
                            </label>
                            <label
                                className={`flex items-center space-x-2 px-4 py-2 border rounded-full cursor-pointer ${
                                    selectedCloudProvider === 'GCP' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700'
                                }`}
                                onClick={() => handleCloudProviderSelection('GCP')}
                            >
                                <img src="https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png" alt="GCP Logo" className="w-7 h-6" />
                                <span>GCP</span>
                            </label>
                            <label
                                className={`flex items-center space-x-2 px-4 py-2 border rounded-full cursor-pointer ${
                                    selectedCloudProvider === 'Azure' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700'
                                }`}
                                onClick={() => handleCloudProviderSelection('Azure')}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" alt="Azure Logo" className="w-6 h-6" />
                                <span>Azure</span>
                            </label>
                        </div>
                    </>
                )}

                {selectedCloudProvider && (
                    <>
                        <span className="mt-6 mb-4 text-lg font-medium">Please select the instance type</span>
                        <select
                            value={instanceType}
                            onChange={handleInstanceTypeChange} // Ensure this handler is attached
                            className="px-4 py-2 border-none focus:outline-none rounded-full bg-gray-100 text-gray-700"
                        >
                            <option value="">Select Instance Type</option>
                            <option value="t2.micro">t2.micro</option>
                            <option value="t2.medium">t2.medium</option>
                            <option value="t2.large">t2.large</option>
                            <option value="t3.medium">t3.medium</option>
                            <option value="t3.large">t3.large</option>
                            {/* Add more instance types as needed */}
                        </select>
                    </>
                )}
            </div>
        </div>
    );
}
