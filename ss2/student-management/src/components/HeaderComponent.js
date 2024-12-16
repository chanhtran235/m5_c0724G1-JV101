import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function HeaderComponent() {
    const account = useSelector(state => state.user.account)
    return (
        <div>
            <ul style={{display: 'flex'}}>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    {!account && <Link to={'/login'}>Login</Link>}
                </li>
                <li>
                    {account && <Link to={'/logout'}>Logout</Link>}
                </li>
                <li>
                    {account&&((account.role=="ADMIN")?<Link to={'/list'}>List</Link>:"")}
                </li>
                <li>username: {account && account.username}</li>
            </ul>
        </div>
    )
}

export default HeaderComponent;