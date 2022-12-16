import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppRegionMap
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function RegionPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Проект Больницы </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Это карта, отображающая информацию по регионам
        </Typography>

        <Grid container spacing={0}>

          <Grid item xs={12} md={12} lg={12}>
            <AppRegionMap
              title="Карта"
              subheader="Подназвание"
            />

          </Grid>



        </Grid>
      </Container>
    </>
  );
}
