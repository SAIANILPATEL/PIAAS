export default function MainUploadTestSuite() {
    const handleUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error(error);
            alert('Upload failed');
        }
    };

    return (
        <div className="flex flex-col px-6 py-6 items-center text-lg">
            <form className="flex flex-row items-center gap-24" onSubmit={handleUpload}>
                <label className="flex flex-col gap-9 justify-center items-center border-gray-400 p-6 border rounded-2xl bg-white">
                    <span className="w-full text-center text-2xl font-medium">Upload JMeter Script</span>
                    <input type="file" name="jmx" accept=".jmx" required className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100" />
                </label>
                <label className="flex flex-col gap-9 justify-center items-center border-gray-400 p-6 border rounded-2xl bg-white">
                    <span className="w-full text-center text-2xl font-medium">Upload Test Data File(s)</span>
                    <input type="file" name="data" accept=".csv" multiple className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100" />
                </label>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600">
                    Upload
                </button>
            </form>
        </div>
    );
}
