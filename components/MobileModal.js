import ReactDOM from 'react-dom';

const ModalWrapper = ({ children }) => {
  return (
    <div className="absolute top-0 flex h-screen w-screen flex-col justify-center bg-gray-200 dark:bg-gray-800">
      {children}
    </div>
  );
};

export const MobileModal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('modal-root')
  );
};
