import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups'
import About from './About'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Meetups} />
            <Route exact path='/about' component={About} />
            <Route exact path='/product/add' component={AddProduct} />
            <Route exact path='/product/edit/:id' component={EditProduct} />
        </Switch>
    </main>
)

export default Main