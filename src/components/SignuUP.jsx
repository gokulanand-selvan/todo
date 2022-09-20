import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, CircularProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TextField } from "@mui/material";
import { Table } from "@mui/material";
import { Container } from "@mui/system";
import IconButton from '@mui/material/IconButton';
import { Password, Phone } from "@mui/icons-material";

export const SignUp = () => {
    const [username, setusername] = useState("")
    const [psw, setpsw] = useState('')
    const [ph, setph] = useState("")
    const [showpassword, setShowpassword] = useState(null)
    const [err, setErr] = useState(false)
    const [loading, setLading] = useState(false)
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
        if (username === "" || Password === "" || Phone === "") {
            setErr(true)
        }
        else {
            setErr(false)
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
                        error={err}
                        margin="normal"
                        color="secondary"
                        label="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <br />
                    <TextField
                        error={err}
                        margin="normal"
                        color="secondary"
                        label="Password"
                        type={"password"}
                        value={psw}
                        onChange={(e) => setpsw(e.target.value)}

                    />
                    <br />
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        error={err}
                        margin="normal"
                        color="secondary"
                        label="PhoneNumber"
                        value={ph}
                        onChange={(e) => setph(e.target.value)}
                    />
                </form>
                {/* <CircularProgress /> */}
                <br />
                <Button variant="contained" type="submit" onClick={() => { onClickSignUp(); setusername(""); setpsw(''); setph("") }}> Sign Up </Button>
            </Box>
            <IconButton
                aria-label="toggle password visibility"></IconButton>
            {/* {postId.map((list, key) => <p key={key}>{list.username} {list.password}</p>)} */}
            <br />
            <Box>
                <Container maxWidth="sx">

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 10 }}
                            aria-label="simple table">
                            <TableHead
                                sx={{
                                    backgroundColor: "green",
                                    borderColor: "red",
                                }}>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell >Password</TableCell>
                                    <TableCell>SHOW</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* <TableCell>
                                {postId.map((list, key) => <p key={key}>{list.username}</p>)}
                            </TableCell>
                            <TableCell> {postId.map((list, key) => <p key={key}> {list.password}</p>)}</TableCell> */}

                                {postId.map((list, index) => (
                                    <TableRow
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