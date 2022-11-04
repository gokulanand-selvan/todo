import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import './login.css'
import { Box } from "@mui/system";
// import backgroundImage from "./background.png";
import { TextField } from "@mui/material";
import kboard from "./todo6.jpg"

export const Login = () => {
    const [name, setName] = useState("");
    const [passcode, setPasscode] = useState("");

    const handleSubmit = event => {
        event.preventDefault()
    };

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{}}> </Box>
            <Box className="parentlogin"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    // alignContent: 'flex-start',
                }}
                style={{
                    backgroundImage: `url(${kboard})`, backgroundSize: "100% 107%", backgroundRepeat: "no-repeat", height: "100vh"
                }}
            >
                {/* <h1 style={{ fontFamily: "Josefin Sans", letterSpacing: "3px", paddingBottom: "50px" }} >T o D o</h1> */}
                <>
                    <form onSubmit={handleSubmit}
                        style={{
                            paddingTop: "11vh"
                        }}>
                        <label>
                            <h1 style={{ fontFamily: "Josefin Sans", color: "lightgray" }}>Username:</h1>
                            <TextField
                                sx={{ background: "white" }}
                                color="secondary"
                                variant="filled"
                                fullWidth
                                id="username"
                                type={"text"}
                                placeholder={'UserName'}
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <h1 style={{ fontFamily: "Josefin Sans", color: "lightgray" }}>Password:</h1>
                            <TextField
                                sx={{ background: "white" }}
                                fullWidth
                                variant="filled"
                                color="secondary"
                                type={"password"}
                                placeholder={'Password'}
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)} />
                            <br />
                            <br />
                            <br />
                            <Button sx={{ width: "441px", background: "##00ffff" }} onSubmit={handleSubmit} variant="contained" type="submit" onClick={() => navigate("/todo")}>LogIn</Button>
                        </label>
                    </form>

                    {/* <p>USERNAME</p>
                    <input
                    margin="normal"
                    label="username"
                        color="secondary"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        focused />
                    <br />
                    <p>PASSWORD</p>
                    <input
                        type={"password"}
                        label='Password'
                        color="secondary"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                    sx={{ border: " 3px solid #000000", }} /> */}

                    <>
                        <p style={{ color: "lightgray" }}>
                            <b> (OR) </b>
                        </p>

                        <Button sx={{ width: "441px", background: "#009000" }} onSubmit={handleSubmit} variant="contained" type="submit" color="success" onClick={() => navigate("/signUp")}>SignUp</Button>

                    </>
                </>
            </Box>
        </>
    );
}
