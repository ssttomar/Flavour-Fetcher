import React, { useState } from "react";


export default function App(){
    const [login,setLogin] = useState(false);

    function handleClick(){
        setLogin(true);
    }


    return (
        <div className='first-container'>
            <div className="navbar">
                
                <img id="firstImg" src= {!login ? "../images/first_template.png": "../images/login-page.png"} alt="food" />
                
                <h1 className="logo">FF</h1>
                <p className="logo2">Flavour Fetcher</p>
                
               { !login && <button  onClick={handleClick} className="login-button" >Login</button>}
                
                
                {!login ?<h1 className="firstQuote">Fetch your favorite<br/> flavours in your <br/> neighbourhood.</h1>
                :
                
                <form>
                    <h1 className="login-heading">Login</h1>
                    <input className="email-input" placeholder="Email"/>
                    <input className="password-input" placeholder="Password"/>
                    <button className="login-submit">Submit</button>
                    <button className="new-user">New User</button>
                </form>
                
                }
                
               {!login &&<input className="location" type="text" placeholder="Location"/>}
               {!login && <button className="location-submit">Submit</button>}
            </div>
        </div>
    )
}