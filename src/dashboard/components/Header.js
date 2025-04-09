import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'start', sm: 'center' },
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
      }}
    >
      <Stack spacing={1}>
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back, John Doe
        </Typography>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddRoundedIcon />}
        sx={{ alignSelf: { xs: 'stretch', sm: 'center' } }}
      >
        New project
      </Button>
    </Box>
  );
}
