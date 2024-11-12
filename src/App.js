import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardMedia, CardContent, Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />


      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          That feeling when knee surgery is tomorrow 
        </Typography>

    
        <Card sx={{ mt: 4 }}>
          <CardMedia
            component="img"
            image="https://storage.googleapis.com/proyekdeployaplikasiprofile/kneesurgery.png"
            alt="Sample Image"
            sx={{ objectFit: 'contain' }} 
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              BangkitBangkitBangkitBangkitBangkitBangkitBangkitBangkit.
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          © 2024 My Simple React Site
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
