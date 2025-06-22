import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  return (
    <>
    <div className='font-semibold text-main'>{value}%</div>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="bg-main h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
        ></div>
    </div>
        </>
  );
};

export default ProgressBar;
