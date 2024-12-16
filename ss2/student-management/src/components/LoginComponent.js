import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../my-redux-toolkit/userSlice";  // Import login action từ userSlice
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComponent() {
    const accountLogin = useSelector((state) => state.user.account);
    const status = useSelector((state) => state.user.status);  // Lấy trạng thái từ store
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const loginInfo = { username, password };

        // Gọi action login
        const result = await dispatch(login(loginInfo));
        console.log("-----result-----------" + (JSON.stringify(result)));
        console.log(result.payload);
        if (result.payload) {
            toast.success("Đăng nhập thành công");
            navigate("/home");
        } else {
            toast.error("Đăng nhập thất bại");
        }
    };

    return (
        <>
            <form>
                <h3>Login {(accountLogin ? accountLogin.username : '')}</h3>
                <div>
                    <label>Username</label>
                    <input ref={usernameRef} name={'username'} />
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordRef} name={'password'} />
                </div>
                <button type={'button'} onClick={handleLogin} disabled={status === 'loading'}>
                    Login
                </button>
            </form>
        </>
    );
}

export default LoginComponent;
