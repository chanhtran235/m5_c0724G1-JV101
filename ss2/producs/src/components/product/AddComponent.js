import React from 'react'
import {addProduct, getAll} from "../services/productService";

class AddComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            product:{
                id: "",
                name:""
            }
        }
    }
    handleOnChange(e){
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState(pre =>({
            ...pre,
            product:{
                ...this.state.product,
                [e.target.name]: e.target.value
            }
        }));
    }
    handleSubmit(){
        console.log("-------submit---------");
        addProduct(this.state.product);
        console.log(getAll());
        this.props.changeIsLoading();

    }

    render() {
        return (
            <>
                <h1>Add new</h1>
                {console.log("add -reder---------------")}
                <input name={'id'} onChange={(e)=>{this.handleOnChange(e)}} placeholder={'enter id'}/>
                <input name={'name'} onChange={(e)=>{this.handleOnChange(e)}} placeholder={'enter name'}/>
                <button onClick={()=>{
                    this.handleSubmit()
                }}>Save</button>
            </>
        )
    }
}

export default AddComponent;