import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function HomeProductPage() {

    const [datam, setDatam] = useState([])
    const [search, setSearch] = useState("")

    function getreqdata() {
        axios.get("http://localhost:3000/categories").then(({ data }) => {
            setDatam(data)
        });
    }

    useEffect(() => {
        getreqdata()
    }, []);

    const deletefunction = (id) => {
        axios.delete("http://localhost:3000/categories/" + id)
        getreqdata()
    }

    function handleSortName() {
        setDatam([...datam.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))])
    }
    function handleSortId() {
        setDatam([...datam.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))])
    }

    return (
        <>
            <Helmet>

                <title> This is  HomePage </title>

            </Helmet>

            <Link to={"/login"}> <button> Add Page </button> </Link>

            <div className='inps'>
                <input onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder='Enter Name...' />
                <button onClick={() => handleSortId()} id='btn'>Filter by ID</button>
                <button onClick={() => handleSortName()} id='btn'>Filter by Name</button>
            </div>

            <div className='generaldiv'>
                {datam.filter(data => data.name.toLowerCase().includes(search)).map((element) => {

                    return <div className='elementdiv'>

                        <h1> {element.name} </h1>
                        <h1> {element.id} </h1>
                        <p> {element.description} </p>
                        <Link to={`/detail/${element.id}`}> <button> More Info </button> </Link>
                        <button onClick={() => (deletefunction(element.id))}> Delete </button>
                    </div>
                })

                }
            </div>
        </>
    )
}

export default HomeProductPage