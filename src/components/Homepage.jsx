import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
    const [ username, setUsername ] = useState("");

    const onEnter = (event) => {
        setUsername(event.target.value);
    }
    return (
        <div className="App-header">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" className="App-logo" alt="logo" />
            <div className='input'>
                <input type="text" placeholder='Enter Username' onChange={(event) => onEnter(event)}></input>
                <Link className="link-tag" to="/repos" state={{ username: username }}>Search</Link>
            </div>
        </div>
    )
}
