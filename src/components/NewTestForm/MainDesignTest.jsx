import { useState } from 'react';
import { useContext } from 'react';
import { context } from '../MainNewTest';
export default function MainDesignTest() {
    const contextValue = useContext(context);
  console.log(contextValue);
    const {users, setUsers,rampUp, setRampUp, duration, setDuration}= contextValue || {};

    return (
        <div className="p-6 space-y-8 mt-10 mb-10 ml-32">
            <form className="space-y-6 flex flex-col">
                {/* Users Input */}
                <div className="flex items-center space-x-4">
                    <label className="text-lg font-medium">How many users do you want to simulate?</label>
                    <input 
                        type="text" 
                        value={users} 
                        onChange={(e) => setUsers(Number(e.target.value))} 
                        className="w-16 p-2 border rounded-full text-center focus:outline-none focus:ring-blue-500 focus:ring-2"
                    />
                    <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        step="50" 
                        value={users} 
                        onChange={(e) => setUsers(Number(e.target.value))} 
                        className="slider"
                    />
                </div>

                {/* Ramp Up Input */}
                <div className="flex ml-3 items-center space-x-4">
                    <label className="text-lg font-medium items-end">How quickly should users ramp up(min)?</label>
                    <input 
                        type="text" 
                        value={rampUp} 
                        onChange={(e) => setRampUp(Number(e.target.value))} 
                        className="w-16 p-2 border rounded-full text-center focus:outline-none focus:ring-blue-500 focus:ring-2"
                    />
                    <input 
                        type="range" 
                        min="0" 
                        max={duration}   
                        step="1" 
                        value={rampUp} 
                        onChange={(e) => setRampUp(Number(e.target.value))} 
                        className="slider"
                    />
                </div>

                {/* Duration Input */}
                <div className="flex items-center space-x-4  ">
                    <label className="text-lg font-medium items-end ml-7">For how long should the test run(min)?</label>
                    <input 
                        type="text" 
                        value={duration} 
                        onChange={(e) => setDuration(Number(e.target.value))} 
                        className="w-16 p-2 border rounded-full text-center focus:outline-none focus:ring-blue-500 focus:ring-2"
                    />
                    <input 
                        type="range" 
                        min="0" 
                        max="600" 
                        step="30" 
                        value={duration} 
                        onChange={(e) => setDuration(Number(e.target.value))} 
                        className="slider"
                    />
                </div>
            </form>

          
        </div>
    );
}
