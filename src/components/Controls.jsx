import React from 'react';

const Controls = ({ onStart, onStop }) => {
  return (
    <div className="mt-6 flex gap-4">
      <button
        onClick={onStart}
        className="px-4 py-2 bg-green-600 text-white rounded shadow"
      >
        Start Recording & Transcription
      </button>
      <button
        onClick={onStop}
        className="px-4 py-2 bg-red-600 text-white rounded shadow"
      >
        Stop Recording & Transcription
      </button>
    </div>
  );
};

export default Controls;
