import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
const TOKEN = 'pk.eyJ1Ijoiam9hcXVpbnNhZ2UiLCJhIjoiY2tvbjJvNG5qMDZkeDJxcGhpZmljdHZvOCJ9.IujxJKzEiItNKuHIKScUuA'
mapboxgl.accessToken = TOKEN;



function Map({lon, lat}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [mapLon, setMapLon] = useState(lon);
    const [mapLat, setMapLat] = useState(lat);  
    const [zoom, setZoom] = useState(10);

    //Initializing map only once.
    useEffect(() => { 
        if (map.current) return; //  We ensure to reference it to an already rendered container in the DOM.
        map.current = new mapboxgl.Map({
            container: mapContainer.current, // container reference
            style: 'mapbox://styles/mapbox/streets-v11',// style URL
            center: [mapLon, mapLat],// starting position [mapLon, mapLat]
            zoom: zoom // starting zoom
        });
    }, []);

    //Cada vez que se mueva, actualizar en el estado las coordeadas.
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setMapLon(map.current.getCenter().lng.toFixed(4));
            setMapLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    //Cuando camibien las props, modificar el centro del mapa
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        console.log("New longitud and latitude: ", lon, ",", lat)
        map.current.flyTo({center:[lon, lat]});     
    }, [lon]);

    return (
        <div className="map-view">
            <div className="sidebar">
                Longitude: {mapLon} | Latitude: {mapLat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container"/>
        </div>
    )
}

export default Map
