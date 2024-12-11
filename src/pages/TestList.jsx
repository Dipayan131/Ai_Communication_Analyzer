import React from 'react';
import Card from '../components/card';

const testDurations = [10, 20, 30, 50, 50, 59, 60, 60];

const TestList = () => {
  const handleDetailsClick = (time) => {
    console.log(`Details clicked for test of ${time} minutes.`);
  };

  return (
    <>
    <div className='h-[100vh] w-full bg-gray-100'>
        <h1 className='text-blue-300 text-3xl pt-5 pl-5 font-bold'>Choose Test</h1>
    <div className="grid grid-cols-4 gap-6 p-8">
      {testDurations.map((time, index) => (
        <Card key={index} time={time} onDetailsClick={() => handleDetailsClick(time)} />
      ))}
    </div>
    </div>
    </>
  );
};

export default TestList;
