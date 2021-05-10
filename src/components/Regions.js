import React from 'react';
import { useState, useEffect } from 'react';
import Map from './Map';
import Loader from './Loader';
import { features } from '../data/regions.json';

function Regions() {
    const [regions, setRegions] = useState([]);


    useEffect(() => {
        setRegions(features);
        console.log(regions);
        if (regions.length > 1) console.log(regions[0].properties.nom)
    }, [regions])

    if (regions.length === 0) return <Loader />


    return (
        <div>
            <Map regions={regions}/>
        </div>
    )
}

export default Regions
