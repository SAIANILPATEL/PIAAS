import { useState, useEffect } from "react";
import { useContext } from 'react';
import { context } from '../MainNewTest';
export default function MainConfigLG() {
  const contextValue = useContext(context);
  console.log(contextValue); // Check if totalUsers and setTotalUsers are available here
    const totalUsers=contextValue.users;
  // Destructure the context values
  const {  lgConfigurations, setLgConfigurations } = contextValue || {};
console.log(contextValue.users);

  const awsRegions = [
    { value: "us-east-1", label: "US East (N. Virginia)" },
    { value: "us-east-2", label: "US East (Ohio)" },
    { value: "us-west-1", label: "US West (N. California)" },
    { value: "us-west-2", label: "US West (Oregon)" },
  ];

  const gcpRegions = [
    { value: "us-central1", label: "GCP US Central (Iowa)" },
    { value: "us-west1", label: "GCP US West (Oregon)" },
    { value: "us-east1", label: "GCP US East (S. Carolina)" },
  ];

  const azureRegions = [
    { value: "eastus", label: "Azure East US" },
    { value: "westus", label: "Azure West US" },
    { value: "centralus", label: "Azure Central US" },
  ];

  const allRegions = [...awsRegions, ...gcpRegions, ...azureRegions];

  const handleTrafficChange = (id, trafficPercent) => {
    setLgConfigurations(prevLgConfigurations =>
      prevLgConfigurations.map(lg =>
        lg.id === id ? { ...lg, trafficPercent: Number(trafficPercent) } : lg
      )
    );
  };

  // Effect to update users based on traffic percent
  useEffect(() => {
    const totalTraffic = lgConfigurations.reduce(
      (sum, lg) => sum + lg.trafficPercent,
      0
    );

    if (lgConfigurations.length === 1) {
      setLgConfigurations(prevConfigurations =>
        prevConfigurations.map(lg => ({
          ...lg,
          trafficPercent: 100,
          users: totalUsers,
        }))
      );
    } else if (totalTraffic !== 100) {
      const equalTraffic = Math.floor(100 / lgConfigurations.length);
      setLgConfigurations(prevConfigurations =>
        prevConfigurations.map((lg, index) => ({
          ...lg,
          trafficPercent:
            index === lgConfigurations.length - 1
              ? 100 - equalTraffic * (lgConfigurations.length - 1)
              : equalTraffic,
          users: Math.round((lg.trafficPercent / 100) * totalUsers),
        }))
      );
    } else {
      setLgConfigurations(prevConfigurations =>
        prevConfigurations.map(lg => ({
          ...lg,
          users: Math.round((lg.trafficPercent / 100) * totalUsers),
        }))
      );
    }
  }, [lgConfigurations.length, totalUsers]);

  // Effect to handle when configuration changes
  useEffect(() => {
    const totalTraffic = lgConfigurations.reduce(
      (sum, lg) => sum + lg.trafficPercent,
      0
    );

    if (totalTraffic !== 100) {
      const equalTraffic = Math.floor(100 / lgConfigurations.length);
      setLgConfigurations(prevConfigurations =>
        prevConfigurations.map((lg, index) => ({
          ...lg,
          trafficPercent:
            index === lgConfigurations.length - 1
              ? 100 - equalTraffic * (lgConfigurations.length - 1)
              : equalTraffic,
          users: Math.round((lg.trafficPercent / 100) * totalUsers),
        }))
      );
    }
  }, [lgConfigurations.map(lg => lg.trafficPercent).join('-')]); // Trigger when trafficPercent changes

  const addLGConfiguration = () => {
    const newId = lgConfigurations.length + 1;
    setLgConfigurations(prevLgConfigurations => [
      ...prevLgConfigurations,
      { id: newId, region: "", trafficPercent: 0, users: 0, deletable: true },
    ]);
  };

  const deleteLGConfiguration = (id) => {
    setLgConfigurations(prevLgConfigurations =>
      prevLgConfigurations.filter(lg => lg.id !== id)
    );
  };

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <label className="block text-lg font-medium">
          Max Users per Load Generator
        </label>
        <input
          type="number"
          value={totalUsers}
          onChange={(e) => setTotalUsers(Number(e.target.value))}
          className="w-24 p-2 border rounded-full text-center focus:outline-none focus:ring-blue-500 focus:ring-2"
          min="1"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-4">Load Distribution</h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-2xl text-center">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Region</th>
              <th className="px-4 py-2 border">% of Traffic</th>
              <th className="px-4 py-2 border">Users</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {lgConfigurations.map((lg) => (
              <tr key={lg.id}>
                <td className="px-4 py-2 border">
                  <select
                    value={lg.region}
                    onChange={(e) => {
                      const updatedRegion = e.target.value;
                      setLgConfigurations(prevLgConfigurations =>
                        prevLgConfigurations.map(lgItem =>
                          lgItem.id === lg.id
                            ? { ...lgItem, region: updatedRegion }
                            : lgItem
                        )
                      );
                    }}
                    className="w-full p-2 border rounded-full text-center focus:outline-none"
                  >
                    <option value="">Select Region</option>
                    {allRegions.map((region) => (
                      <option key={region.value} value={region.value}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    value={lg.trafficPercent}
                    onChange={(e) => handleTrafficChange(lg.id, e.target.value)}
                    className="w-full p-2 border rounded-full text-center focus:outline-none"
                    min="0"
                    max="100"
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    value={lg.users}
                    disabled
                    className="w-full p-2 border rounded-full text-center bg-gray-100"
                  />
                </td>
                <td className="px-4 py-2 border text-center">
                  {lg.deletable ? (
                    <button
                      onClick={() => deleteLGConfiguration(lg.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-gray-400 cursor-not-allowed"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex ">
          <button
            onClick={addLGConfiguration}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Add Load Generator
          </button>
        </div>
      </div>
    </div>
  );
}
