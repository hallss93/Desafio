import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';

import { VisuallyHiddenInput } from './styles';

interface IProps {
  handleChange: any;
  description: string;
}

export default function InputFileUpload(props: IProps) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {props.description}
      <VisuallyHiddenInput type="file" onChange={props.handleChange} />
    </Button>
  );
}
