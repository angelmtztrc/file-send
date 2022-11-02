import { Modal } from '@atoms';
import { useRootSelector } from '@hooks';

const CreateLink = () => {
  const isOpen = useRootSelector(state => state.modal === 'link');

  return (
    <Modal isOpen={isOpen} title="Create shareable link">
      <div className="flex flex-col">
        <label className="text-sm font-bold text-white">Delete after</label>
        <select className="mt-2 rounded-lg border-2 border-raisin-black bg-transparent px-4 py-2 text-white outline-none focus:border-medium-state-blue-dark">
          <option>3 days</option>
          <option>3 days</option>
          <option>3 days</option>
        </select>
      </div>
    </Modal>
  );
};

export default CreateLink;
