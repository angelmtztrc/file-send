import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import { Button } from '@atoms';
import { useRootDispatch } from '@hooks';

import { IFile } from '@interfaces/file.interface';

import { setActiveModal } from '@slices/root.slice';

type UploadedFilesProps = {
  files: IFile[];
};

const UploadedFiles = ({ files }: UploadedFilesProps) => {
  const dispatch = useRootDispatch();

  const handleOpen = (shouldOpen: boolean) => {
    if (shouldOpen) dispatch(setActiveModal('link'));
    else dispatch(setActiveModal('none'));
  };

  return (
    <>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center space-x-2">
              <span className="select-none text-sm font-bold uppercase text-white">
                Attached Files
              </span>
              {open ? (
                <ChevronDownIcon className="h-4 w-4 text-medium-state-blue-light" />
              ) : (
                <ChevronUpIcon className="h-4 w-4 text-medium-state-blue-light" />
              )}
            </Disclosure.Button>
            <Transition
              className="w-full"
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as="ul" className="mt-2 flex w-full flex-col space-y-4">
                {files.map(file => (
                  <li
                    key={file.name}
                    className="mx-4 inline-block truncate rounded-lg bg-raisin-black px-4 py-2 text-center text-sm text-white"
                  >
                    {file.name}
                  </li>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Button
        onClick={() => handleOpen(true)}
        className="mt-6 bg-medium-state-blue text-white hover:bg-medium-state-blue-dark"
      >
        Generate link
      </Button>
    </>
  );
};

export default UploadedFiles;
