import React, { FC } from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';

const ModalHeader: FC<{
  modalSettings: { modal: boolean; setModal: Function };
}> = ({ modalSettings }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b rounded-t bg-[#0e0f22eb]">
      <h3 className="text-xl font-semibold text-white p-1.5">Add new User</h3>
      <button
        className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        onClick={() => modalSettings.setModal(!modalSettings.modal)}
      >
        <MdOutlineExitToApp size={24} />
      </button>
    </div>
  );
};

export default ModalHeader;
