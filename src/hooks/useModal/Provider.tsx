import { useState } from 'react';
import UseModalContext from './context';
import type { ShowModalProps, UseModalProviderProps } from './types';
import { ModalAlert } from '../../components/common/ModalAlert';


export function UseModalProvider({ children }: UseModalProviderProps) {
  const [modal, setModal] = useState<ShowModalProps & { open: boolean }>({
    open: false,
    message: '',
    title: undefined,
    options: {
      variant: 'success',
      onOk: () => setModal({ ...modal, open: false }),
      onClose: () => setModal({ ...modal, open: false }),
    },
  });

  const handleOnOk = () => {
    modal.options?.onOk?.();
    setModal({ ...modal, open: false });
  }

  const handleOnCancel = () => {
    modal.options?.onCancel?.();
    setModal({ ...modal, open: false });
  }

  const handleOnClose = () => {
    modal.options?.onClose?.();
    setModal({ ...modal, open: false });
  }

  const contextValue = {
    showModal: ({ message, title, options }: ShowModalProps) =>
      setModal({
        open: true,
        message,
        title,
        options,
      }),
  };

  return (
    <UseModalContext.Provider value={contextValue}>
      {children}
      <ModalAlert
        open={modal.open}
        title={modal.title}
        variant={modal.options?.variant}
        message={modal.message}
        btnCancelText={modal.options?.btnCancelText}
        btnOkText={modal.options?.btnOkText}
        onCancel={modal.options?.onClose && handleOnCancel}
        onOk={handleOnOk}
        onClose={handleOnClose}
      />
    </UseModalContext.Provider>
  );
}
