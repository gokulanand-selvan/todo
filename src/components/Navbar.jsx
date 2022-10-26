import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ backgroundColor: "#33A0D9", height: "8vh" }} >
                <ul style={{
                    display: "flex",
                    listStyleType: "none", justifyContent: "space-between",
                }}>
                    <li onClick={() => { navigate("/") }}>  Login </li>
                    <li>  Home </li>
                    <li> <Button sx={{ backgroundColor: "black", color: "white", borderRadius: "7px" }} onClick={() => { navigate("/signUp") }}> SignUp </Button> </li>
                </ul>
            </Box>
        </>
    )
}
