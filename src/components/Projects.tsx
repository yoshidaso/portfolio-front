import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce',
    demo: '#',
    code: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    image: 'https://source.unsplash.com/random/800x600/?task',
    demo: '#',
    code: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualization.',
    image: 'https://source.unsplash.com/random/800x600/?dashboard',
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project) => (
          <Grid item key={project.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.demo}>Demo</Button>
                <Button size="small" href={project.code}>Code</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}