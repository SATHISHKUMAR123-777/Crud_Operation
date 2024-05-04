import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ReadPage = () => {
    const [data, setData] = useState([])
    const { id } = useParams();


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>

            <h1>Detail of user</h1>
            <div className="mb-2">
                <strong>title: {data.title}</strong>
            </div>
            <div className="mb-2">
                <strong>category: {data.category}</strong>
            </div>
            <div className="mb-3">
                <strong>description: {data.description}</strong>
            </div>
            <Link to={`/update/${id}`} className='btn btn-success' >Edit</Link>
            <Link to="/" className="btn btn-secondary btn-lg">Back</Link>
        </>
    );
}
