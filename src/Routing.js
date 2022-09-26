import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/login/login';
import Register from './component/login/register';
import Listing from './component/listing/listingApi';
import Details from './component/details/details';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/listing/:Category_Id" component={Listing}/>
                    <Route exact path="/details/:productid" component={Details}/>
                    <Route exact path="/placeOrder/:brandName" component={PlaceOrder}/>
                    <Route exact path="/viewBooking" component={ViewOrder}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing