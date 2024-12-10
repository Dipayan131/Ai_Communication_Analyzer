import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';

const VideoRecorder = forwardRef(({ onVideoData }, ref) => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    const chunks = [];
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      onVideoData(videoURL);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    setRecording(false);
  };

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    startRecording,
    stopRecording,
  }));

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} muted autoPlay className="w-full max-w-lg rounded shadow-md" />
      <p className="text-gray-600">{recording ? 'Recording...' : 'Ready to record'}</p>
    </div>
  );
});

export default VideoRecorder;
