import React, { FC } from 'react';

const ModalFooter: FC<{
  modal: boolean;
  setModal: Function;
  onHandleSubmit: Function;
  onHandleClearFields: Function;
}> = ({ modal, setModal, onHandleClearFields, onHandleSubmit }) => {
  return (
    <div className="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      <h1
        className="underline underline-offset-2 text-black font-semibold cursor-pointer"
        onClick={() => onHandleClearFields()}
      >
        Reset fields
      </h1>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setModal(!modal)}
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onHandleSubmit()}
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalFooter;
