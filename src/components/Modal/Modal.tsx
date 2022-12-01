import { FC, useState } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

const Modal: FC<{
  modal: boolean;
  setModal: Function;
  onHandleSubmitUser: Function;
}> = ({ modal, setModal, onHandleSubmitUser }) => {
  const [fullName, setFullName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [group, setGroup] = useState<string>('');

  const onHandleClearFields = () => {
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
  };

  return (
    <>
      {modal && (
        <div className="h-screen w-screen bg-gray-900/50 fixed inset-0 z-50">
          <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
            <div className="relative w-full h-full max-w-lg md:h-auto">
              <div className="relative bg-white rounded-lg shadow">
                {/* Header */}
                <ModalHeader modal={modal} setModal={setModal} />
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
                  modal={modal}
                  setModal={setModal}
                  onHandleSubmit={() => {
                    onHandleSubmitUser(fullName, userName, email, group);
                    onHandleClearFields();
                    setModal(!modal);
                  }}
                  onHandleClearFields={onHandleClearFields}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
