import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import {ToastContainer} from "react-toastify";

function App() {

    // const product = [
    //     {id: 1, name: "sam sung"},
    //     {id: 2, name: "Nokia"}
    //     ];
    //
    // const thead = React.createElement("tr", null,
    //     React.createElement("th", null, "ID"),
    //     React.createElement("th", null, "Name"))
    //
    // const tbody = product.map(e => {
    //     const id = React.createElement("td", null, e.id)
    //     const name = React.createElement("td", null, e.name)
    //     return React.createElement("tr", {style: {color: 'red'}, key: e.id}, id, name)
    // })
    //
    // const table = React.createElement("table", null, thead, tbody)

    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/home'} element={<HomeComponent/>}/>
                <Route path={'/login'} element={<LoginComponent/>}/>
            </Routes>
        </>

    );

}

export default App;
