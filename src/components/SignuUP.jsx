import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TextField } from "@mui/material";
import { Table } from "@mui/material";
import { Container } from "@mui/system";
import crow from "./windmill.jpg"


export const SignUp = () => {
    const [username, setusername] = useState("")
    const [psw, setpsw] = useState('')
    const [ph, setph] = useState("")
    const [showpassword, setShowpassword] = useState(null)
    const [err, setErr] = useState(false)
    // useState({
    // username: false,
    // psw: false,
    // ph: false
    // })
    const [errPsw, setErrPsw] = useState(false)
    const [errPh, setErrPh] = useState(false)
    // const [loading, setLoading] = useState(false)
    const [postId, setPostId] = useState([])

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
    };

    const fetchData = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://ragu-hotel-api.herokuapp.com/api/alluser', requestOptions)
            .then(response => response.json())
            .then(data => setPostId((data)));

    }

    useEffect(() => {
        fetchData();
    }, []);


    const onClickSignUp = () => {
        if (username === "") {
            setErr(true)
            return
        }
        if (psw === "") {
            setErrPsw(true)
            return
        }

        if (ph === "") {
            setErrPh(true)
            return
        }
        else {
            setErr(false)
            setErrPsw(false)
            setErrPh(false)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: psw, phonenumber: ph })
            };
            fetch('https://ragu-hotel-api.herokuapp.com/api/signup', requestOptions)
                .then(response => response.json())
                .then(data => fetchData());
        }
    }
    return (
        <Box
            sx={{
                width: '100%',
                height: "100%",
                backgroundColor: 'lightgrey',
                textAlign: 'center',
            }
            }
            style={{
                
                backgroundImage: `url(${crow})`,
                // background: "rgb(2,0,36) linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(236,235,233,1) 0%, rgba(130,209,195,1) 100%, rgba(130,209,195,1) 100%)"
            }}
        >
            <Button sx={{background:"floralwhite"}} variant="outlined" onClick={() => navigate(-1)}>Home</Button>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: "center",
                }}
            >
                <form onSubmit={handleSubmit} >

                    <TextField
                        error={err}
                        id="username"
                        margin="normal"
                        color="secondary"
                        label="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <br />
                    <TextField
                        error={errPsw}
                        id="password"
                        margin="normal"
                        color="secondary"
                        label="Password"
                        type={"password"}
                        value={psw}
                        onChange={(e) => setpsw(e.target.value)}
                    />
                    <br />
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        error={errPh}
                        id="phone"
                        margin="normal"
                        color="secondary"
                        label="Phone"
                        value={ph}
                        onChange={(e) => setph(e.target.value)}
                    />
                </form>
                <br />
                <Button variant="contained" type="submit" onClick={() => { onClickSignUp(); setusername(""); setpsw(''); setph("") }}> Sign Up </Button>
            </Box>
            <br />
            <Box>
                <Container maxWidth="sx">
                    <TableContainer
                        component={Paper}
                        style={{
                            background: `url(${crow})`
                        }} >
                        <Table sx={{ minWidth: 10 }}
                            aria-label="simple table">
                            <TableHead
                                sx={{
                                    backgroundColor: "lightblue",
                                }}>
                                <TableRow>
                                    <TableCell><b>Username</b></TableCell>
                                    <TableCell ><b>Password</b></TableCell>
                                    <TableCell><b>SHOW</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {postId.map((list, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" >
                                            {list.username}</TableCell>
                                        {index === showpassword ? <TableCell>{list.password}</TableCell> : <TableCell>{[...Array(list.password.length)].map(x => "*")}</TableCell>}
                                        <TableCell onClick={() => setShowpassword(index)}>
                                            <button>SHOW</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </Box >
    );
};