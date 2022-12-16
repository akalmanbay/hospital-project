import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

// @mui
// для дропдаун
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppCityMap
} from '../sections/@dashboard/app';

export default function CityPage() {
  const theme = useTheme();
  const [position, setPosition] = React.useState({ 'lon': 43.2220, 'lat': 76.8512 });
  const [city, setCity] = React.useState('Алматы');

  const data = {
    'Астана': { 'lon': 51.1605, 'lat': 71.4704 },
    'Алматы': { 'lon': 43.2220, 'lat': 76.8512 },
    'Шымкент': { 'lon': 42.3417, 'lat': 69.5901 }
  }
  const handleChange = (event) => {
    setPosition(data[event.target.value])
    setCity(event.target.value)
    console.log(position)
  }

  return (
    <>
      <Helmet>
        <title> Города Больницы </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Это карта, отображающая информацию по регионам
        </Typography>

        <Grid container spacing={0}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Город</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label='Город'
              onChange={handleChange}
            >
              <MenuItem value={'Алматы'}>Алматы</MenuItem>
              <MenuItem value={'Астана'}>Астана</MenuItem>
              <MenuItem value={'Шымкент'}>Шымкент</MenuItem>
            </Select>
          </FormControl>

          <Grid item xs={12} md={12} lg={12}>
            <AppCityMap
              title="Карта"
              subheader="Подназвание"
              position={position}

            />
          </Grid>



        </Grid>
      </Container>
    </>
  );
}
