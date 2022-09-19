import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TextField } from "@mui/material";
import { Table } from "@mui/material";

export const SignUp = () => {
    const [username, setusername] = useState("")
    const [psw, setpsw] = useState('')
    const [ph, setph] = useState(null)

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
        // console.log("signup");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: psw, phonenumber: ph })
        };
        fetch('https://ragu-hotel-api.herokuapp.com/api/signup', requestOptions)
            .then(response => response.json())
            .then(data => fetchData());
    }

    // const changeHandeler = (e) => {
    //     value = { username, psw, ph }
    //     setusername(e.target.value)
    //     setph(e.target.value)
    //     setph(e.target.value)
    // }

    return (
        <Box className="parentsign"
            sx={{
                width: '100%',
                height: "100%",
                backgroundColor: 'lightgrey',
                textAlign: 'center',
                justifyContent: "center",
            }}
        >

            <Button onClick={() => navigate(-1)}> Home </Button>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: "center",
                }}
            >
                <form onSubmit={handleSubmit} >
                    {/* <label>
                        <h1>User Name</h1>
                        <input type={"text"} value={username} onChange={(e) => setusername(e.target.value)} placeholder={"User Name"} />
                    </label>
                    <label>
                        <h1>Password</h1>
                        <input type={"password"} value={psw} onChange={(e) => setpsw(e.target.value)} placeholder={"Password"} />
                    </label>
                    <label>
                        <h1>Phone Number</h1>
                        <input type={'number'} value={ph} onChange={(e) => setph(e.target.value)} />
                    </label> */}

                    <TextField
                        margin="normal"
                        color="secondary"
                        label="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        color="secondary"
                        label="Password"
                        value={psw}
                        onChange={(e) => setpsw(e.target.value)}

                    />

                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        margin="normal"
                        color="secondary"
                        label="PhoneNumber"
                        value={ph}
                        onChange={(e) => setph(e.target.value)}
                    />
                    <br />
                    <Button variant="contained" type="submit" onClick={() => { onClickSignUp(); setusername(""); setpsw(''); setph("") }}> Sign Up </Button>
                </form>
            </Box>

            {/* {postId.map((list, key) => <p key={key}>{list.username} {list.password}</p>)} */}
            <Box>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 10 }} aria-label="simple table">
                        <TableHead
                            sx={{
                                backgroundColor: "green",
                                borderColor: "red",
                            }}>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell >Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableCell>
                                {postId.map((list, key) => <p key={key}>{list.username}</p>)}
                            </TableCell>
                            <TableCell> {postId.map((list, key) => <p key={key}> {list.password}</p>)}</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >
    );
};