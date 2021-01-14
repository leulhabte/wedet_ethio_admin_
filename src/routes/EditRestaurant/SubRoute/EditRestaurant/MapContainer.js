import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Card, } from '@material-ui/core';
import { Icon } from 'leaflet';

const MapContainer = () => {
    const [zoomlvl, setZoom] = React.useState(15);
    const [pinged, setPinged] = React.useState(false);
    const [latlong, setPos] = React.useState({ lat: 8.9806, lng: 38.7578 });

    const handleZoom = (e) => {
        setZoom(e.target._zoom);
    }

    const handleMap = (e) => {
        setPos({
            lat: e.latlng.lat,
            lng: e.latlng.lng
        });
        setPinged(true);
    }

    const customIcon = new Icon({
        iconUrl: '../ping.svg',
        iconSize: [25, 25]
    })

    const marker = pinged ? (
        <Marker position={[latlong.lat, latlong.lng]}>
            <Popup>You Clicked Here</Popup>
        </Marker>
    ) : null;
    return (
        <Box style={{ width: '100%', height: '15rem', borderRadius: '30rem' }} display="flex" justifyContent="flex-end">
            <Card style={{ width: '100%', borderRadius: '1rem' }}>
                <Map center={[latlong.lat, latlong.lng]} zoom={zoomlvl} onzoomend={handleZoom} onclick={handleMap} icon={customIcon}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {marker}
                </Map>
            </Card>
        </Box>
    )
}
export default MapContainer;