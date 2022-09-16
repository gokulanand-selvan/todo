import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

    return (
        <div className="parentsign">

            <button onClick={() => navigate(-1)}> Home </button>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
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
                    </label>
                </form>
            </div>
            <br />
            <button type="submit" onClick={onClickSignUp}> Sign Up </button>
            <ul >
                {postId.map((list, key) => <li key={key}>{list.username} {list.password}</li>)}
            </ul>
        </div>
    );
};