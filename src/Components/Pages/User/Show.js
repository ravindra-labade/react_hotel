import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
        <>
            <table className='table table-info table-striped'>
                <thead>
                    <tr>
                        <th>SR NO</th>
                        <th>HOTEL NAME</th>
                        <th>ADDRESS</th>
                        <th>TABLE NO</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((obj)=>{
                            return(
                                <tr>
                                    <td>{obj.sr_no}</td>
                                    <td>{obj.hotel}</td>
                                    <td>{obj.address}</td>
                                    <td>{obj.table}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>        
        </>
  )
}

export default Show