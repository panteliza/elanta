import React, { useState } from 'react';

function Predictor() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [predictedDate, setPredictedDate] = useState('');

  const handleCalculate = () => {
    if (lastPeriodDate && cycleLength) {
      const cycleDuration = parseInt(cycleLength);
      const lastDate = new Date(lastPeriodDate);
      const nextPeriodDate = new Date(lastDate.getTime() + cycleDuration * 24 * 60 * 60 * 1000);
      setPredictedDate(nextPeriodDate.toDateString());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Period Predictor App</h1>
        <label className="block mb-2">Last Period Date:</label>
        <input
          type="date"
          className="w-full px-3 py-2 border rounded mb-4"
          value={lastPeriodDate}
          onChange={(e) => setLastPeriodDate(e.target.value)}
        />
        <label className="block mb-2">Average Cycle Length (in days):</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded mb-4"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {predictedDate && <p className="mt-4">Predicted Next Period Date: {predictedDate}</p>}
      </div>
    </div>
  );
}

export default Predictor;
