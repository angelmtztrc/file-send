import { Button } from '@atoms';

import { IFile } from '@interfaces/file.interface';

type UploadedFilesProps = {
  files: IFile[];
};

const UploadedFiles = ({ files }: UploadedFilesProps) => {
  return (
    <>
      <p className="text-sm font-bold uppercase text-white">Attached Files</p>
      <ul className="mt-2 flex flex-col space-y-4">
        {files.map(file => (
          <li
            key={file.name}
            className="inline-block rounded-lg bg-raisin-black px-4 py-2 text-white"
          >
            {file.name}
          </li>
        ))}
      </ul>
      <Button className="mt-6 bg-medium-state-blue text-white hover:bg-medium-state-blue-dark">
        Generate link
      </Button>
    </>
  );
};

export default UploadedFiles;
