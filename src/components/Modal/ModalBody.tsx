import React, { FC } from 'react';
import { modalInputType } from '../../types/userType';

const ModalBody: FC<{ modalInputConfig: modalInputType }> = ({
  modalInputConfig,
}) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col">
        <label className="text-black font-bold pb-2">Full Name</label>
        <input
          value={modalInputConfig.fullName}
          onChange={(e) => modalInputConfig.setFullName(e.target.value)}
          type="text"
          className="indent-2 h-10 border rounded border-1 border-gray-300"
          placeholder="Enter full name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold pb-2">User Name</label>
        <input
          value={modalInputConfig.userName}
          onChange={(e) => modalInputConfig.setUserName(e.target.value)}
          type="text"
          className="indent-2 h-10 border rounded border-1 border-gray-300"
          placeholder="Enter user name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold pb-2">Email Address</label>
        <input
          value={modalInputConfig.email}
          onChange={(e) => modalInputConfig.setEmail(e.target.value)}
          type="text"
          className="indent-2 h-10 border rounded border-1 border-gray-300"
          placeholder="Enter user email address"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold pb-2">User Group</label>
        <select
          className="indent-2 h-10 border rounded border-1 border-gray-300"
          value={modalInputConfig.group}
          onChange={(e) => modalInputConfig.setGroup(e.target.value)}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="Office">Office</option>
          <option value="Head Office">Head Office</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold pb-2">Assign Profile</label>
        <select className="indent-2 h-10 border rounded border-1 border-gray-300">
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
};

export default ModalBody;
