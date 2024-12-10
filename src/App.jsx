import React, { useState, useRef } from 'react';
import VideoRecorder from './components/VideoRecorder.js';
import Transcription from './components/Transcription.jsx';
import Controls from './components/Controls.jsx';


function App() {
  const [videoURL, setVideoURL] = useState(null);

  // Refs to control child components
  const videoRecorderRef = useRef(null);
  const transcriptionRef = useRef(null);

  const handleStart = () => {
    videoRecorderRef.current.startRecording();
    transcriptionRef.current.startTranscription();
  };

  const handleStop = () => {
    videoRecorderRef.current.stopRecording();
    transcriptionRef.current.stopTranscription();
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Live Video Recorder with Transcription</h1>
      <VideoRecorder ref={videoRecorderRef} onVideoData={(url) => setVideoURL(url)} />
      <Transcription ref={transcriptionRef} />
      <Controls onStart={handleStart} onStop={handleStop} />
      {videoURL && (
        <div className="mt-6 w-full max-w-lg">
          <h3 className="text-lg font-semibold">Recorded Video:</h3>
          <video src={videoURL} controls className="w-full mt-2 rounded shadow" />
        </div>
      )}
    </div>
  );
};

export default App
