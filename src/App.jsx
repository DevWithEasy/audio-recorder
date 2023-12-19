import { useEffect, useRef, useState } from 'react';
import { MdOutlineSettingsVoice, MdOutlinePause } from "react-icons/md";
import { IoStopOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

const App = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!mediaRecorder) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          const chunks = [];

          recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              chunks.push(e.data);
            }
          };

          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            setAudioBlob(blob);
          };

          setMediaRecorder(recorder);
        })
        .catch((err) => console.error('Error accessing microphone:', err));
    }
  }, [mediaRecorder]);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const downloadAudio = () => {
    const url = URL.createObjectURL(audioBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recorded_audio.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const playAudio = () => {
    audioRef.current.src = URL.createObjectURL(audioBlob);
    audioRef.current.play();
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div
      className='h-screen flex justify-center items-center bg-teal-50'
    >
      <div
        className='w-2/4 pt-4 pb-10 space-y-12 bg-white shadow-md rounded-md'
      >
        <div
          className='flex justify-center items-center space-x-4'
        >
          {recording ?
            <button
              className=''
            >
              <MdOutlinePause
                onClick={stopRecording}
                size={65}
                className='p-2 text-white bg-red-500  rounded-full shadow-md'
              />
            </button>
            :
            <button
              className=''
            >
              <MdOutlineSettingsVoice
                onClick={startRecording}
                size={65}
                className='p-2 text-gray-500 border border-teal-500 hover:text-teal-500 rounded-full shadow-md'
              />

            </button>

          }
        </div>
        <div
          className='space-y-4'
        >
          <div
            className='flex justify-center'
          >
            <audio ref={audioRef} controls />
          </div>
          <div
            className='flex justify-center items-center space-x-3'
          >
            <button
              onClick={playAudio}
            >
              <CiPlay1 size={40}
                className='p-2 border border-teal-500 hover:text-teal-500 rounded-full shadow-md'
              />
            </button>

            <button
              onClick={stopAudio}
            >
              <IoStopOutline size={40}
                className='p-2 hover:text-red-500 border border-teal-500 hover:border-red-500 rounded-full shadow-md'
              />
            </button>
            <button>
              <GrPowerReset size={40}
                className='p-2 text-red-500 border border-red-500 rounded-full shadow-md'
              />
            </button>
          </div>
          <div
            className='text-center space-x-2'
          >
            <button
              className='px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-md'
            >
              Convert Now
            </button>
            <button
              onClick={downloadAudio}
              className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md'
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
