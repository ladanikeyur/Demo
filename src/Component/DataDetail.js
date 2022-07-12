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
        <>
            {
                contentsData.length < 1 && key.length !== 1 ? null : <CustomTable keyData={key} data={contentsData} navigate='/DataDetail' />
            }
            {/* <div className="container table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th>Id</th>
                            <th>Image_one</th>
                            <th>Image_Tow</th>
                            <th>Content</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contentsData.map((val, i) => {
                                console.log(val)
                                return (
                                    <tr key={i} className='text-center tr'>
                                        <td>{val.id}</td>
                                        <td>
                                            <img src={val.image_one} height={150} width={150} />
                                        </td>
                                        <td>
                                            <img src={val.image_two} height={150} width={150} />
                                        </td>
                                        <td>
                                            <div className='Scroll'>
                                                <p>{val.content}</p>
                                            </div>
                                        </td>
                                        <td>{val.title}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> */}

        </>
    )
}

export default DataDetail
