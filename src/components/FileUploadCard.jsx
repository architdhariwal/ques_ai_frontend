import React from 'react';
import cloud from './../assets/cloude.svg'

function FileUploadCard({...props}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center" {...props}>
      <div className="flex flex-col items-center">
        <img src={cloud}/>
      <p className="text-xs text-gray-400 mt-2">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
        <p className="text-gray-600 ml-2">Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
      </div>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
        Select File
      </button>
    </div>
  );
}

export default FileUploadCard;