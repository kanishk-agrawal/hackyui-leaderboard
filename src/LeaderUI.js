import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LeaderTable from './LeaderTable'
import RewardsTable from './RewardsTable'
import Skeleton from '@mui/material/Skeleton';
import prizes from './prizes.png'
import qrcode from './qrcode-homepage.png';
import heart from './heart.jpeg';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function App(props) {
 
    const {data} = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
      <RewardsTable data={data} /> 
      {data && data.length > 0 ? <LeaderTable data={data} /> : <Skeleton animation="wave" />}
      <div style={{display: 'flex', alignItems: 'center'}}>

 <img src={'https://play-lh.googleusercontent.com/vLRYqQT8ZRgxMZ4z5UQlk7ultWym0zXVoPY8XM36I6cKHbo6prH0JPaPo4Reir7YnY8'} width={40} height={40} />
 <h2 style={{marginLeft: '4px'}}>Join the revolution now!</h2>
      </div>
      <img src={qrcode} height={200} width={200} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}