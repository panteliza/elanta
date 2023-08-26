import React, { useState } from 'react';

function Predictor() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [occurrenceDuration, setOccurrenceDuration] = useState('28'); // Default to 28 days
  const [predictedDate, setPredictedDate] = useState('');

  const handleCalculate = () => {
    if (lastPeriodDate && cycleLength && occurrenceDuration) {
      const cycleDuration = parseInt(cycleLength);
      const occurrenceDurationValue = parseInt(occurrenceDuration);
      const lastDate = new Date(lastPeriodDate);
      const nextPeriodDate = new Date(
        lastDate.getTime() + (occurrenceDurationValue + cycleDuration) * 24 * 60 * 60 * 1000
      );
      setPredictedDate(nextPeriodDate.toDateString());
    }
  };

  const handleReset = () => {
    setLastPeriodDate('');
    setCycleLength('');
    setOccurrenceDuration('28');
    setPredictedDate('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f1b7d4]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-500">Period Predictor </h1>
        <label className="block mb-2 mt-8">Last Period Date:</label>
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
        <label className="block mb-2">Occurrence Duration (in days):</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded mb-4"
          value={occurrenceDuration}
          onChange={(e) => setOccurrenceDuration(e.target.value)}
        />
        <button
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {predictedDate && (
          <div className="mt-4 text-center">
            <p>
              Predicted Next Period Date:{' '}
              <span className="text-pink-500">{predictedDate}</span>
            </p>
            <button
              className="mt-2 w-36 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
              onClick={handleReset}
            >
              Check Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predictor;
