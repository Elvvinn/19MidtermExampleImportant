import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DetailPage() {
    const { id } = useParams();
    const [datam, setDatam] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3000/categories/${id}`).then(({ data }) => {
            setDatam(data);
        });

    }, [])

    return (
        <>

            <Helmet>

                <title> This is  DetailPage </title>

            </Helmet>

            <div>
                <h1> {datam.name} </h1>
                <p> {datam.description} </p>

            </div>

        </>
    )
}

export default DetailPage