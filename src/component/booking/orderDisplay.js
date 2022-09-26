import React from 'react';
import './placeOrder.css';
const OrderDisplay = (props) => {


    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item.order_id}</td>
                        <td>{item.brand_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>&#8377; {item.cost}</td>
                        <td>{item.date}</td>
                    </tr>
                )
            })
        }
    }

    

    return(
        <div className="container" style={{marginTop:"9%",marginBottom:"10%"}}>
            
            <center><h2><ins>Orders</ins></h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Brand Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default OrderDisplay