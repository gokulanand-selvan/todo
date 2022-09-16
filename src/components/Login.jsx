import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [name, setName] = useState("");
    const [passcode, setPasscode] = useState("");
    const handleSubmit = event => {
        event.preventDefault()
    };

    const navigate = useNavigate();

    return (
        <div className="parentlogin">
            <>
                <form onSubmit={handleSubmit}>
                    <label>
                        <h1>UserName</h1>
                        <input
                            type={"text"}
                            placeholder={'UserName'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        <h1>Password</h1>
                        <input
                            type={"password"}
                            placeholder={'Password'}
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                        />
                    </label>
                    <br />
                </form>
            </>
            <br />
            <button type="submit" onClick={() => navigate("/todo")}>LogIn</button>
            <>
                <br />
                <br />
                <br />
                <button type="submit" onClick={() => navigate("/signUp")}> SignUp</button>
            </>
        </div>
    );
}
