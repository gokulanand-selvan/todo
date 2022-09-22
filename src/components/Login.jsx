import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import './login.css'
import { Box } from "@mui/system";
// import raindrops from "./components/raindrops.jpg"
// import bgImage from "./images/task.jpg";



export const Login = () => {
    const [name, setName] = useState("");
    const [passcode, setPasscode] = useState("");

    const handleSubmit = event => {
        event.preventDefault()
    };

    const navigate = useNavigate();

    return (
        <Box className="parentlogin"
        // style={{
        //     backgroundImage: `url(${bgImage})`,
        // }}
        >


            <h1 >Welcome</h1>
            <>
                {/* <form onSubmit={handleSubmit}>
                    <label>
                        <h1>UserName</h1>
                        <input
                            id="username"
                            type={"text"}
                            placeholder={'UserName'}
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        <h1>Password</h1>
                        <input
                            type={"password"}
                            placeholder={'Password'}
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)} />
                    </label>
                    <br />
                </form> */}


                <TextField
                    margin="normal"
                    label="username"
                    color="secondary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    focused />
                <br />
                <TextField
                    type={"password"}
                    label='Password'
                    color="secondary"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    focused />

            </>
            <br />
            <Button onSubmit={handleSubmit} variant="contained" type="submit" onClick={() => navigate("/todo")}>LogIn</Button>
            <>
                <br />
                <br />
                <br />
                <Button onSubmit={handleSubmit} variant="contained" type="submit" color="success" onClick={() => navigate("/signUp")}>SignUp</Button>
            </>
        </Box>
    );
}
