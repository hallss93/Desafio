import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function SnackbarComponent() {
  const { showMessage, message, type } = useSelector((state: any) => state.messages);

  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={showMessage}>
      <Alert severity={type} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
