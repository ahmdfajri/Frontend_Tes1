import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

export default class Meetups extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        }
    }

    componentDidMount() {
        this.getData();
    }
    //Delete Function
    delete=(id)=>{
        axios.delete(`https://aqueous-river-95723.herokuapp.com/products/${id}`)   
    }  
    // Get All Data From Backend
    getData() {
        axios.get('https://aqueous-river-95723.herokuapp.com/products')
            .then((respon) => {
                this.setState({
                    meetups: respon.data
                })
                console.log(respon.data)
            })
            .catch((err) => { console.log(err) })
    }
    // Initial data to display at table following the table head 
    displayItems(){
        return this.state.meetups.map((dataItem, i) => {
            var index = ++i;
            return (
        
                <tr>
                <td>{index}</td>
                <td>{dataItem.name}</td>
                <td>{dataItem.description}</td>
                <td>{dataItem.price}</td>
                <td>{dataItem.seller_name}</td>
                <td>{dataItem.sku}</td>
                <td><img src={dataItem.image_url} style={{height:"30%", width:"40%"}}/></td>
                <td>{dataItem.category}</td>
                <td><Link to={`/product/edit/${dataItem._id}`}><button>Edit</button></Link></td>
                <td><button onClick={() => {this.delete(dataItem.id)}}>Delete</button></td>
                </tr>
            )
            })
        
    }

    render() {
        
        return (
            <div className="container-fluid">
                <h2>ShopKitty Tes</h2>
                <table className='highlight responsive-table'>
                    <thead>
                        <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Seller</th>
                                    <th>Sku</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                    <th>Edit</th>
                        </tr>
                    </thead>
        {/* All data wihch will be display at table  */}
                    <tbody>
                        {this.displayItems()}
                    </tbody>

                </table>
            </div >
        )
    }
}