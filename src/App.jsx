import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, CardMedia, Grid, Toolbar, Container, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import './App.css'


function App() {

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            &nbsp; Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse exercitationem modi est eos doloribus repellat minus eligendi vitae? Doloremque!
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent={'center'}>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div style={{ marginTop: '50px' }}>
              <Grid container spacing={4}>
                <Grid item>
                  <Card>
                    <CardMedia
                      image='https://source.unsplash.com/random'
                      title='Image Title' 
                      style={{height: '100px'}}
                    />
                    <CardContent>
                      <Typography variant='h5' align='center' gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary' >
                        view
                      </Button>
                      <Button size='small' color='primary' >
                        edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card>
                    <CardMedia
                      image='https://source.unsplash.com/random'
                      title='Image Title' 
                      style={{height: '100px'}}
                    />
                    <CardContent>
                      <Typography variant='h5' align='center' gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary' >
                        view
                      </Button>
                      <Button size='small' color='primary' >
                        edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App
