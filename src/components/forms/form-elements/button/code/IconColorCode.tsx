import CodeDialog from 'src/components/shared/CodeDialog';
const IconColorCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";

import { IconButton, Tooltip, Stack } from '@mui/material';
import { IconBell } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Bell">
      <IconButton color="primary" aria-label="primary-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="secondary" aria-label="secondary-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="error" aria-label="error-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="warning" aria-label="warning-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="success" aria-label="success-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
</Stack>`}
      </CodeDialog>
    </>
  );
};

export default IconColorCode;
