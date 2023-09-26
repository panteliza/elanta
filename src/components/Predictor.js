import React, { useState } from 'react';
import pads from '../assets/awareness (2).jpg';
import pads1 from '../assets/awareness (1).jpg';

function Predictor() {
  const [firstDayOfLastPeriod, setFirstDayOfLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [occurrenceDuration, setOccurrenceDuration] = useState('');
  const [predictedDate, setPredictedDate] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (firstDayOfLastPeriod && cycleLength && occurrenceDuration) {
      const cycleDuration = parseInt(cycleLength);
      const occurrenceDurationValue = parseInt(occurrenceDuration);
      const firstDate = new Date(firstDayOfLastPeriod);
      const nextPeriodDate = new Date(
        firstDate.getTime() +
          cycleDuration * 24 * 60 * 60 * 1000 +
          occurrenceDurationValue * 24 * 60 * 60 * 1000
      );
      const predictedDateAfterSubtraction = new Date(nextPeriodDate);
      predictedDateAfterSubtraction.setDate(
        predictedDateAfterSubtraction.getDate() - cycleDuration
      ); // Subtract cycle length
      setPredictedDate(predictedDateAfterSubtraction.toDateString());
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setFirstDayOfLastPeriod('');
    setCycleLength('');
    setOccurrenceDuration('');
    setPredictedDate('');
    setIsCalculated(false);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#f1b7d4] px-10 py-24 gap-12 items-center justify-center">
      <div className="w-[800px] flex px-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center lg:items-start">
            {/* Image and Content 1 */}
            <div className="w-[300px] h-[300px] bg-white shadow-2xl flex flex-col items-center">
              <img src={pads} className="w-[300px] h-[280px]" />
              <div className="font-semibold text-gray-600 px-1 text-sm text-center">
                Breaking Barriers: Embracing Open Conversations About Menstruation
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            {/* Image and Content 2 */}
            <div className="w-[300px] h-[300px] bg-white flex flex-col items-center">
              <img src={pads1} className="w-[300px] h-[280px]" />
              <div className="font-semibold text-gray-600 px-1 text-sm text-center">
                Feel Good: Empower Your Cycle
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Layout for Screens < lg */}
      <div className="lg:hidden">
        <div className="w-[300px] flex flex-col items-center">
          {/* Image and Content 1 */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <div className="text-gray-500 text-justify">
              In a world where open conversations about menstruation have often
              been shrouded in silence and secrecy, it's time to break free from
              the confines of discomfort and shyness. Menstruation is a natural
              and essential aspect of human life, and discussing it openly is
              not just necessary, but liberating. In this blog post, we'll dive
              into why it's important to overcome shyness and embrace candid
              conversations about menstruation.
            </div>
            <button className="rounded-md px-3 py-1 bg-pink-500">Learn More</button>
          </div>
        </div>

        <div className="w-[300px] flex flex-col items-center">
          {/* Image and Content 2 */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <div className="text-gray-500 text-justify">
              Every woman's journey with menstruation is unique, but one thing
              holds true for all: the importance of cultivating healthy menstrual
              habits. These habits not only contribute to physical well-being but
              also empower you to embrace your body's natural rhythms. In this
              blog post, we'll explore a range of menstrual habits that can help
              you feel good, confident, and connected to your body throughout your
              cycle.
            </div>
            <button className="rounded-md px-3 py-1 bg-pink-500">Learn More</button>
          </div>
        </div>
      </div>

      {/* Calculator Div */}
      <div
        className={`bg-white p-8 rounded shadow-md w-96 ${
          isCalculated ? 'h-[555px]' : 'h-[450px]'
        }`}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-500">
          Period Predictor
        </h1>
        <label className="block mb-2 mt-8">Last Period Date:</label>
        <input
          type="date"
          className="w-full px-3 py-2 border rounded mb-4"
          value={firstDayOfLastPeriod}
          onChange={(e) => setFirstDayOfLastPeriod(e.target.value)}
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
          className="w-full bg-pink-500 text-white py-2 rounded hover-bg-pink-600"
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
              className="mt-2 w-36 bg-pink-500 hover-bg-pink-600 text-white p-2 rounded"
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
