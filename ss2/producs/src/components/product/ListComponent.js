import React from 'react'
import {getAll} from "../services/productService";
import AddComponent from "./AddComponent";

class ListComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            listProduct :[],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState(pre=>({
            ...pre,
            listProduct: getAll()
        }))
    }
    changeIsLoading(){
        this.setState(pre=>({
            ...pre,
            isLoading : !pre.isLoading
        }))
    }

    render() {
        return (
            <>
                <h3>Danh sách</h3>
                <AddComponent changeIsLoading ={()=>{this.changeIsLoading()}}/>
                {console.log("-----------list-render -------------------------")}
                <table className={'table table-dark'}>
                    <thead>
                     <tr>
                         <th>STT</th>
                         <th>Id</th>
                         <th>Name</th>
                     </tr>
                    </thead>
                    <tbody>
                    {this.state.listProduct.map((p,i)=>(
                        <tr key={p.id}>
                            <td>{i+1}</td>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default ListComponent ;