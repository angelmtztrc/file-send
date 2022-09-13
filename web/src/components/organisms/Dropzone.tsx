import { useDropzone } from 'react-dropzone';

import { Button } from '@atoms';
import UploadedFiles from '../molecules/UploadedFiles';

const Dropzone = () => {
  const {
    getRootProps,
    getInputProps,
    open: handleOpen,
    isDragActive,
    acceptedFiles
  } = useDropzone({
    maxFiles: 2,
    noClick: true,
    noKeyboard: true
  });

  if (isDragActive) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-medium-state-blue-dark"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p className="text-lg font-bold text-white">Drop the file here.</p>
      </div>
    );
  }

  if (acceptedFiles.length > 0) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-medium-state-blue-dark"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <UploadedFiles files={acceptedFiles} />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-medium-state-blue-dark"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p className="text-lg font-bold text-white">Drag and drop your files here.</p>
      <span className="my-2 text-sm text-cadet-grey">OR</span>
      <Button
        onClick={handleOpen}
        className="border border-medium-state-blue bg-transparent text-medium-state-blue hover:bg-medium-state-blue hover:text-white"
      >
        Upload your files
      </Button>
    </div>
  );
};

export default Dropzone;
