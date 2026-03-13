import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { modalAlertStyle } from '../../styles/common/modal-alert';

export function ModalAlert({
  variant = 'success',
  open,
  message,
  title,
  btnOkText,
  btnCancelText,
  onOk,
  onCancel,
  onClose,
}: {
  variant?: 'success' | 'failed' | 'info';
  open: boolean;
  message?: string | React.ReactNode;
  title?: React.ReactNode;
  btnOkText?: string;
  btnCancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}) {

  const content = {
    success: { title: 'Success', icon: '/assets/alert/ilustrasi-cody-success.png' },
    failed: { title: 'Failed', icon: '/assets/alert/ilustrasi-cody-failed.png' },
    info: { title: 'Info', icon: '/assets/alert/ilustrasi-cody-alert.png' },
  };

  const handleClose = (_: {}, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason === 'backdropClick') return;
    onClose?.();
  };

  const handleOk = () => {
    onOk?.();
    onClose?.();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  return (
    <Modal open={open} onClose={handleClose} sx={modalAlertStyle.modalAlert} disableEnforceFocus>
      <Stack sx={modalAlertStyle.modalAlertContainer}>
        <Box component="img" src={content[variant].icon} sx={modalAlertStyle.modalAlertLogo} />
        <Stack sx={modalAlertStyle.modalAlertContent}>
          <Typography sx={modalAlertStyle.modalAlertTitle}>
            {title || content[variant].title}
          </Typography>
          <Typography sx={modalAlertStyle.modalAlertDesc}>{message}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={1}>
          {onCancel && (
            <Button
              variant="contained"
              color="secondary"
              sx={modalAlertStyle.modalAlertButton}
              onClick={handleCancel}
            >
              {btnCancelText || 'Cancel'}
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={modalAlertStyle.modalAlertButton}
            onClick={handleOk}
          >
            {btnOkText || 'Ok'}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
