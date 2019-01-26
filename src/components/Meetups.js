import React, { Component } from 'react'
import axios from 'axios'
import UserItems from './Product'
export default class Meetups extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        }
    }

    componentWillMount() {
        this.getData();
    }
    getData() {
        axios.get('https://aqueous-river-95723.herokuapp.com/products')
            .then((respon) => {
                this.setState({
                    meetups: respon.data
                })
            })
            .catch((err) => { console.log(err) })
    }
    render() {
        const userItems = this.state.meetups.map((dataItem, i) => {
            return (
                <UserItems key={dataItem.id} item={dataItem} index={i} />
            )
        })
        return (
            <div className="container-fluid">
                <h2>ShopKitty Tes</h2>
                <table className='highlight responsive-table'>
                    <thead>
                        <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Sku</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItems}
                    </tbody>

                </table>
            </div >
        )
    }
}