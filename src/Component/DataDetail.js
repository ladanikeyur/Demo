import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CustomTable from './Table';

const DataDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [contentsData, setcontentsData] = useState([])
    const [key, setKey] = useState([])

    useEffect(() => {
        setcontentsData(location.state.contents)
        setKey(Object.keys(location.state.contents[0]))
    }, [])

    return (
        contentsData.length < 1 && key.length !== 1 ? <div className='Spinner-main'><div class="spinner-border"></div></div> : <CustomTable keyData={key} data={contentsData} navigate={false} />
    )
}

export default DataDetail
