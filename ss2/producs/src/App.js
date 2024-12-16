import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import HeaderComponent from "./components/product/HeaderComponent";
import ListComponent from "./components/product/ListComponent";
import {getAll} from "./components/services/productService";

function App() {
    const list = getAll();
    return (
        <>
            <HeaderComponent/>
            <ListComponent/>
        </>
    );
}
export default App;
