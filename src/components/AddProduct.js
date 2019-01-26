import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class AddUser extends Component {
    addUser(addUser) {
        axios.request({
            method: 'post',
            url: ' https://aqueous-river-95723.herokuapp.com/products/',
            data: addUser
        }).then((respon) => {
            this.props.history.push('/')
        }).catch((err) => { console.log(err) })
    }
    onSubmit(e) {
        const newUser = {
            product_name: this.refs.name.value,
            product_deskrip: this.refs.description.value,
            product_price: this.refs.price.value,
            product_gambar: this.refs.image_url.value,
            product_category: this.refs.category.value,
        product_sellerName: this.refs.seller_name.value,
        product_id: this.refs._id.value,
        product_sku: this.refs.sku.value,
        product_created: this.refs.Created_date.value,
        product_v: this.refs._v.value
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
                    <div className="input-field">
                        <input type="text" name="product_id" ref="product_id" />
                        <label htmlFor="name">id</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_sku" ref="product_sku" />
                        <label htmlFor="name">product_sku</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_createdDate" ref="createdDate" />
                        <label htmlFor="name">Created Date</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="-v" ref="-v" />
                        <label htmlFor="name">v</label>
                    </div>
                    
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

