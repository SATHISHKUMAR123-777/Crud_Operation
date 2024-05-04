import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const HomePage = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handledelete = (id) => {
        const confirm = window.confirm("not working");
        if (confirm) {
            axios.delete('https://fakestoreapi.com/products' + id)
                .then(res => {
                    console.log(res);
                    navigate('/');
                })
                .catch(err => console.log(err));

        }

    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
                <h1>List Of Users</h1>
                <div className="w-75 rounded bg-white border shadow p-4">
                    <div className="d-flex justify-content-end ">
                        <Link to='/create' className="btn btn-success">ADD +</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>title</th>
                                <th>category</th>
                                <th>description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.title}</td>
                                        <td>{d.category}</td>
                                        <td>{d.description}</td>
                                        <td>
                                            <Link to={`/read/${d.id}`} className='btn btn-success'>Read</Link>
                                            <Link to={`/update/${d.id}`} className='btn btn-success'>Edit</Link>

                                            <button onClick={e => handledelete(d.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>



        </>

    )



}
