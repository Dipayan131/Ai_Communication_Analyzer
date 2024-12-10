import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Transcription = forwardRef((props, ref) => {
  const [transcript, setTranscript] = useState('');
  const [recognitionInstance, setRecognitionInstance] = useState(null);

  const startTranscription = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setTranscript(currentTranscript);
    };

    recognition.start();
    setRecognitionInstance(recognition);
  };

  const stopTranscription = () => {
    recognitionInstance?.stop();
  };

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    startTranscription,
    stopTranscription,
  }));

  return (
    <div className="mt-8">
      <div className="mt-4 p-4 border rounded shadow">
        <h3 className="text-lg font-semibold">Live Transcript:</h3>
        <p className="mt-2 text-gray-700">{transcript || 'No transcription yet...'}</p>
      </div>
    </div>
  );
});

export default Transcription;
