import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
const TOKEN = 'pk.eyJ1Ijoiam9hcXVpbnNhZ2UiLCJhIjoiY2tvbjJvNG5qMDZkeDJxcGhpZmljdHZvOCJ9.IujxJKzEiItNKuHIKScUuA'
mapboxgl.accessToken = TOKEN;




function Map({lon, lat, handleMove}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [mapLon, setMapLon] = useState(lon);
    const [mapLat, setMapLat] = useState(lat);  
    const [zoom, setZoom] = useState(4);
    
    //Cuando se renderiza el componente, volar a esa ubicacion
    useEffect(() => {
        if (!map.current) return; // only if map is initialized
        console.log("FLY")
        map.current.flyTo({center:[lon, lat], zoom: 10});    
    }, [lon, lat]);

    //Initializing map only once.
    useEffect(() => { 
        if (map.current) return; //  We ensure to reference it to an already rendered container in the DOM.
        map.current = new mapboxgl.Map({
            container: mapContainer.current, // container reference
            style: 'mapbox://styles/mapbox/streets-v11',// style URL
            center: [mapLon, mapLat],// starting position [mapLon, mapLat]
            zoom: zoom // starting zoom
        }); 
        

        map.current.on('move', () => {
            console.log("moving", Number(map.current.getCenter().lng.toFixed(4)));
            let lon = Number(map.current.getCenter().lng.toFixed(4));
            let lat = Number(map.current.getCenter().lat.toFixed(4));
            setMapLon(lon)    
            setMapLat(lat)
        })

    }, []); 



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


 // useEffect(() => {
    //     map.current.on('move', () => {
    //         console.log("Executing move");
    //         console.log("Center: ", map.current.getCenter());
    //         console.log(mapLon);
    //         console.log(mapLat);
            
            // setMapLon(map.current.getCenter().lng.toFixed(4));
            // setMapLat(map.current.getCenter().lat.toFixed(4));
    //     })
    // })

