import React, { useState } from 'react';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer outline-0 border-0"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:bg-main transition-colors"></div>
      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
    </label>
  );
};

export default ToggleSwitch;
