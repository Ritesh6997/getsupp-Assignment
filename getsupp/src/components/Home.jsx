import {Stack } from '@mui/material'
import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import { SearchContext } from './Context/Searchcontext';
import "./home.css"
export default function Home() {
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const { searchitem } = useContext(SearchContext);
    useEffect(() => {
        axios.get(
          `https://rickandmortyapi.com/api/character/?name=rick&page=${page}`
        ).then(res => {
            setData([...Data,...res.data.results]);
        });
    }, [page])
    function Scrolling(e) {
        console.log(1);
        const bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
        if (bottom) {
            setTimeout(() => {
                if (page<6)
                setPage((p) => p + 1);
            }, 2000);
        }
    };
  return (
    <div style={{ height: "400px", marginBottom:"100px"}}>
      <Stack
        spacing={1}
              onScroll={Scrolling}
              className="main"
        sx={{
            width: "600px",
            height: "100%"      
              }}
      >
        {Data &&
          Data.filter((e) => e.name.includes(searchitem)).map((ele) => (
            <UserCard key={ele.id} value={ele}></UserCard>
          ))}{
               page<6?<h3>Loading...</h3>:<h3>End</h3>   
          }
      </Stack>
    </div>
  );
}
