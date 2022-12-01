import { FC, useState } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import axios from 'axios';

const Modal: FC<{ modalSettings: { modal: boolean; setModal: Function } }> = ({
  modalSettings,
}) => {
  const [fullName, setFullName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [group, setGroup] = useState<string>('');

  const onHandleSubmit = () => {
    if (fullName && userName && email && group) {
      axios.post('http://localhost:4000/users', {
        name: fullName,
        userName: userName,
        email,
        group,
        status: 'Active',
        createdAt: Date.now(),
      }).then(() => window.location.reload());
    }
  };

  const onHandleClearFields = () => {
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
  };

  return (
    <>
      {modalSettings.modal && (
        <div className="h-screen w-screen bg-gray-900/50 fixed inset-0 z-10"></div>
      )}
      {modalSettings.modal && (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
          <div className="relative w-full h-full max-w-lg md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              {/* Header */}
              <ModalHeader modalSettings={modalSettings} />
              {/* Body */}
              <ModalBody
                modalInputConfig={{
                  fullName,
                  setFullName,
                  userName,
                  setUserName,
                  email,
                  setEmail,
                  group,
                  setGroup,
                }}
              />
              {/* Footer */}
              <ModalFooter
                modalSettings={modalSettings}
                onHandleSubmit={onHandleSubmit}
                onHandleClearFields={onHandleClearFields}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
