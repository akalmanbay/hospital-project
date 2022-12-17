import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';


AppCityMap.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    position: PropTypes.object.isRequired,
    // chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

export default function AppCityMap({ title, subheader, position }) {
    const chartOptions = useChart({
        plotOptions: { bar: { columnWidth: '20%' } },
        // fill: { type: chartData.map((i) => i.fill) },
        // labels: chartLabels,
        xaxis: { type: 'datetime' },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} visits`;
                    }
                    return y;
                },
            },
        },
    });

    return (
        <Card>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin="" />

            <CardHeader title={title} subheader={subheader} />

            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                {console.log('props', position.lon)}
                <MapContainer center={[position.lon, position.lat]} zoom={12} style={{ height: '60vh', width: '100%' }}>
                    <ChangeView center={[position.lon, position.lat]} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[position.lon, position.lat]}>

                        <Popup>
                            Информация о больнице <br />
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Card>
    );
}
