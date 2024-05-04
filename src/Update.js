import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UpdatePage = () => {

    // const [data, setData] = useState([])
    const { id } = useParams();

    const [values, setvalues] = useState({
        title: '',
        category: '',
        description: ''
    })


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then(res => {
                setvalues(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handlesubmit = (event) => {
        event.preventDefault();

        axios.put('https://fakestoreapi.com/products/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));

    }

    return (
        <>
            <h1>Update of user</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title"
                        value={values.title} onChange={e => setvalues({ ...values, title: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="category"  >category</label>
                    <input type="text" id="category" className="form-control" placeholder="Enter Category"
                        value={values.category} onChange={e => setvalues({ ...values, category: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description">description</label>
                    <input type="text" id="description" className="form-control" placeholder="Enter Descriptiion"
                        value={values.description} onChange={e => setvalues({ ...values, description: e.target.value })} />
                </div>

                <button type="button" onSubmit={handlesubmit} className="btn btn-primary btn-lg">Update</button>
                <Link to="/" className="btn btn-secondary btn-lg">Back</Link>


            </form>
        </>
    );
}
