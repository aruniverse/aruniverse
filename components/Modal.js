import ReactDOM from 'react-dom';

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

export const FullScreenMobileModal = ({ children }) => {
  return (
    <Modal>
      <div className="absolute top-0 flex h-screen w-screen flex-col justify-center bg-gray-200 dark:bg-gray-800">
        {children}
      </div>
    </Modal>
  );
};
