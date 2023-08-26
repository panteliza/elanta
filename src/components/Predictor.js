import React, { useState } from 'react';
import pads from '../assets/IMG-6926.jpg';

function Predictor() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [occurrenceDuration, setOccurrenceDuration] = useState('28'); // Default to 28 days
  const [predictedDate, setPredictedDate] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (lastPeriodDate && cycleLength && occurrenceDuration) {
      const cycleDuration = parseInt(cycleLength);
      const occurrenceDurationValue = parseInt(occurrenceDuration);
      const lastDate = new Date(lastPeriodDate);
      const nextPeriodDate = new Date(
        lastDate.getTime() + (occurrenceDurationValue + cycleDuration) * 24 * 60 * 60 * 1000
      );
      setPredictedDate(nextPeriodDate.toDateString());
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setLastPeriodDate('');
    setCycleLength('');
    setOccurrenceDuration('28');
    setPredictedDate('');
    setIsCalculated(false);
  };
  const blogs = [
    {
      id: 1,
      title:  "Stay Fresh: The Importance of Changing Pads Every 3-4 Hours",
      image: 'pads',
      content: 'When it comes to menstrual hygiene, one of the most crucial practices is changing your sanitary pad regularly.'
    },
      
    {
      id: 2,
      title: 'Feel Good: Empower Your Cycle',
      image: {pads},
      content: "Every woman's journey with menstruation is unique, but one thing holds true for all: the importance of cultivating healthy menstrual habits."
     
    },
    {
      id: 3,
      title: 'Breaking Barriers: Embracing Open Conversations About Menstruation',
      image: 'pads',
      content: "In a world where open conversations about menstruation have often been shrouded in silence and secrecy, it's time to break free from the confines of discomfort and shyness. "
      
    },
  ];
  
  

  return (
    <div className="flex h-screen  bg-[#f1b7d4]  px-5 py-24 gap-5 ">
     <div className='w-[800px] flex flex-col '>
     <div className=' flex justify-center'>
  <div className='w-[250px] h-[250px] bg-white '>hi</div>
  </div>
      <div className='flex justify-between bg-red-300 '> 
  <div className='w-[250px] h-[250px] bg-white'>hi</div>
  <div className='w-[250px] h-[250px] bg-white '>hi</div>
  </div>
  
</div>


      
      <div className={`bg-white p-8 rounded shadow-md w-96  ${isCalculated ? 'h-[555px]' : 'h-[450px]'}`}>
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
              className="mt-2 w-36 bg-pink-500 hover:bg-pink-600 text-white p-2 rounded"
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
