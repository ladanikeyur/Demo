import React, { Component, useEffect, useState } from 'react'
import CustomTable from './Table';


const DataTable = () => {
    const [data, setData] = useState([])
    const [key, setKey] = useState([])
    useEffect(() => {
        fetch(`https://conciergeapi.moveeasy.com/api/realtors/neighborhood-list/`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData); setKey(Object.keys(actualData[0])) });
    }, []);

    return (
        data.length < 1 && key.length !== 1 ? <div className='Spinner-main'><div class="spinner-border"></div></div> : <CustomTable keyData={key} data={data} navigate={true} />
    )
}

export default DataTable
