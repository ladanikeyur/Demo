import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

const CustomTable = (props) => {
    const navigate = useNavigate();

    const Navigate = (contents) => {
        console.log(contents)
        navigate(props.navigate, { state: { contents: contents } })
    }

    return (
        <div className="container table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr className='text-center'>
                        {
                            props.keyData.map((val, i) => {
                                return (
                                    val === 'contents' ? "" : <th key={i}>{val}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((val, i) => {
                            return (
                                <tr key={i} className='text-center tr' onClick={() => { Navigate(val.contents) }}>
                                    {
                                        props.keyData.map((key, i) => {
                                            return (
                                                key === 'contents' ? "" : key === 'main_image' || key === 'image_one' || key === 'image_two' ? <td key={i}>
                                                    <img src={val[key]} height={150} width={150} />
                                                </td> : <td key={i}><div className='Scroll'>
                                                    <p>{val[key]}</p>
                                                </div></td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default CustomTable
