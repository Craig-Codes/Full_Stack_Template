import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const HomePage = () => {
    console.log('test')
    return (
    <>
    <h2>Hi, I am a Home Page!</h2>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
    )
  }


