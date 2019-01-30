import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class AddUser extends Component {
    addUser(addUser) {
        let dataId = this.props.match.params.id
        axios.request({
            method: 'post',
            url: `http://localhost:3006/product/${dataId}`,
            data: addUser
        }).then((respon) => {
            this.props.history.push('/')
        }).catch((err) => { console.log(err)})
    }
    onSubmit(e) {
        const newUser = {
            product_name: this.refs.name.value,
            product_deskrip: this.refs.description.value,
            product_price: this.refs.price.value,
            product_gambar: this.refs.image_url.value,
            product_category: this.refs.category.value,
            product_sellerName: this.refs.seller_name.value,
        }
        this.addUser(newUser);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className='btn grey' to='/'>Back</Link>
                <h1>Add Barang</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="product_name" ref="product_name" />
                        <label htmlFor="name">Product Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_deskrip" ref="product_deskrip" />
                        <label htmlFor="name">Description of Product</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_price" ref="product_price" />
                        <label htmlFor="name">Price</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_gambar" ref="product_gambar" />
                        <label htmlFor="name">Image</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_category" ref="product_category" />
                        <label htmlFor="name">category</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_sellerName" ref="product_sellerName" />
                        <label htmlFor="name">Seller Name</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

