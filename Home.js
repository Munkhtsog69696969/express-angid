import { HiHome } from "react-icons/hi"
import { BsSearch } from "react-icons/bs"
import { BiLibrary } from "react-icons/bi"
import { AiFillPlusSquare } from "react-icons/ai"
import { BiHeartSquare } from "react-icons/bi"
import axios from "axios"
import React from "react";
import { useState, useEffect,useRef } from "react"

import { Outlet, Link } from "react-router-dom";
import "./css/Home.css"

// const api=axios.create({
//     baseURL:"https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/1/playlists"

// })
const baseURL = "http://localhost:8000/user";


export const Home = () => {

    const nameInput=useRef(null);
    
    const emailInput=useRef(null);

    function Enter (Name,Email){
        axios.post(baseURL,{name:Name , email:Email})
        .then((response) => {
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

    return (
        <>
            <div className='container'>
                <div className='section1'>
                    <div style={{ marginBottom: "30px", margin: "25px" }}>
                        <Link to="/">
                            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" className="logo"></img>
                        </Link>
                    </div>

                    <div style={{ marginBottom: "30px", margin: "25px" }}>
                        <div className="centerDivAlign">
                            <HiHome className="icons"></HiHome>
                            <p className="texts">Home</p>
                        </div>

                        <div className="centerDivAlign">
                            <Link to="search" className="centerDivAlign">
                                <BsSearch className="icons"></BsSearch>
                                <p className="texts">Search</p>
                            </Link>
                        </div>

                        <div className="centerDivAlign">
                            <BiLibrary className="icons"></BiLibrary>
                            <p className="texts">Your Library</p>
                        </div>
                    </div>

                    <div style={{ marginLeft: "25px" }}>
                        <Link to="playlists" className="centerDivAlign">
                            <AiFillPlusSquare className="icons"></AiFillPlusSquare>
                            <p className="texts">Create Playlist</p>
                        </Link>
                    </div>

                    <div style={{ marginLeft: '25px' }}>
                        <div className="centerDivAlign">
                            <BiHeartSquare className="icons"></BiHeartSquare>
                            <p className="texts">Liked Songs</p>
                        </div>
                    </div>

                </div>

                <div className="section2">
                    <div className="section2-1">
                        
                    </div>

                    <div className="section2-2">
                        <input placeholder="name" ref={nameInput}></input>
                        <input placeholder="email" ref={emailInput}></input>
                        <button onClick={()=>Enter(nameInput.current.value,emailInput.current.value)}>Enter</button>
                    </div>
                </div>
            </div>
        </>
    )
}