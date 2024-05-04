import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const CreatePage = () => {

    const [values, setvalues] = useState({
        title: '',
        category: '',
        description: ''
    })

    const navigate = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();
        axios.post('https://fakestoreapi.com/products/', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title"
                        onChange={e => setvalues({ ...values, title: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="category"  >category</label>
                    <input type="text" id="category" className="form-control" placeholder="Enter Category"
                        onChange={e => setvalues({ ...values, category: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description">description</label>
                    <input type="text" id="description" className="form-control" placeholder="Enter Descriptiion"
                        onChange={e => setvalues({ ...values, description: e.target.value })} />
                </div>

                <button type="button" className="btn btn-primary btn-lg">Submit</button>
                <Link to="/" className="btn btn-secondary btn-lg">Back</Link>


            </form>


        </>
    );
}
