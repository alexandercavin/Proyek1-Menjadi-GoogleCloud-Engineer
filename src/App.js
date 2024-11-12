import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  CssBaseline,
  Button,
  Grid2,
} from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Profile
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Hello, I'm [Your Name]
        </Typography>

        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            component="img"
            image="https://storage.googleapis.com/proyekdeployaplikasiprofile/pfp.jpg"
            alt="Profile Picture"
            sx={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              objectFit: "cover",
              mb: 2,
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              [Your Name]
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              I am a passionate developer focused on creating innovative solutions. I specialize in
              web development, cloud technologies, and AI. Always eager to learn new things and collaborate
              with others.
            </Typography>

            <Button variant="contained" color="primary" href="mailto:youremail@example.com">
              Contact Me
            </Button>
          </CardContent>
        </Card>

        {/* Something to Share Section */}
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mt: 4 }}>
          Something to Share
        </Typography>

        <Grid2 container spacing={4} sx={{ mt: 2 }}>
          <Grid2 item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="https://storage.googleapis.com/proyekdeployaplikasiprofile/kneesurgery.png"
                alt="Knee Surgery"
                sx={{ objectFit: "contain", height: 300 }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  This is a topic I recently explored. It highlights the importance of recovery and care after knee surgery.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="https://storage.googleapis.com/proyekdeployaplikasiprofile/images.jpg"
                alt="Image"
                sx={{ objectFit: "contain", height: 300 }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Another interesting concept I've been researching. This image represents some key ideas.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="https://storage.googleapis.com/proyekdeployaplikasiprofile/ksi.jpg"
                alt="KSI"
                sx={{ objectFit: "contain", height: 300 }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  A project I worked on related to KSI, which discusses key elements in the digital space.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="https://storage.googleapis.com/proyekdeployaplikasiprofile/those_who_know%20(1).png"
                alt="Those Who Know"
                sx={{ objectFit: "contain", height: 300 }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  An image that encapsulates the concept of knowledge and learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          backgroundColor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">© 2024 Alex - All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default App;
