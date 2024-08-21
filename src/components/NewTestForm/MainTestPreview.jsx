import { useContext } from 'react';
import { context } from '../MainNewTest';
export default function MainTestPreview() {
    const {
        selectedEnv,
        setSelectedEnv,
        selectedCloudProvider,
        setSelectedCloudProvider,
        instanceType,
        setInstanceType,
        users,
        setUsers,
        rampUp,
        setRampUp,
        duration,
        setDuration,
        lgConfigurations,
        setLgConfigurations,
    } = useContext(context);
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-medium text-center mb-6">Test Summary</h2>

      {/* Environment Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2">Environment</h3>
        <p>
          <span className="font-semibold">Environment Type:</span> {selectedEnv}
        </p>
        {selectedEnv === 'Cloud' && (
          <p>
            <span className="font-semibold">Cloud Provider:</span> {selectedCloudProvider}
          </p>
        )}
        {selectedCloudProvider && (
          <p>
            <span className="font-semibold">Instance Type:</span> {instanceType}
          </p>
        )}
      </div>

      {/* Test Configuration Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2">Test Configuration</h3>
        <p>
          <span className="font-semibold">Users:</span> {users}
        </p>
        <p>
          <span className="font-semibold">Ramp-Up Time:</span> {rampUp} minutes
        </p>
        <p>
          <span className="font-semibold">Duration:</span> {duration} minutes
        </p>
      </div>

      {/* Load Generator Configuration Summary */}
      {lgConfigurations && lgConfigurations.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Load Generator Configuration</h3>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Region</th>
                <th className="px-4 py-2 border">Traffic (%)</th>
                <th className="px-4 py-2 border">Users</th>
              </tr>
            </thead>
            <tbody>
              {lgConfigurations.map((lg) => (
                <tr key={lg.id}>
                  <td className="px-4 py-2 border">{lg.region}</td>
                  <td className="px-4 py-2 border">{lg.trafficPercent}</td>
                  <td className="px-4 py-2 border">{lg.users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Start Test Button */}
      <div className="flex justify-center mt-6">
        <button
         
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
