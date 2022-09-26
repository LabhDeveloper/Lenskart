import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="it" key={item._id}>  
                            <Link to={`/details/${item.product_id}`}>                       
                                <div className="imgcard">
                                    <img src={item.lens_image} className="image" alt={item.brand_name}/>
                                </div>
                                <div className="text">
                                    <div className="rating">
                                        <span className="">{item.rating}</span>
                                        <img src="https://i.ibb.co/3z6C0SY/star-1.png" alt="star" />
                                    </div>
                                    <div className="title">
                                        <div className="ip">{item.brand_name}</div>
                                    </div>
                                    <div className="size">
                                        <div className="">Size: {item.size}</div>
                                    </div>
                                    <div className="gender">
                                        <img src="https://i.ibb.co/jwCCv0L/gender.png" alt="gender" />
                                        <span className="">{item.gender}</span>
                                    </div>
                                    <div className="prize">
                                        <div className="md">&#8377; {item.Price} &nbsp;<span>(+tax)</span></div>
                                    </div>

                                </div>
                            </Link>
     
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <center>
                            <h2 style={{marginTop:"3%"}}>NO DATA AS PER FILTER</h2>
                            <img src="https://i.ibb.co/HGPsnhF/empty-box.png" width="350px" height="350px"alt="empty"/>
                        </center>
                    </div>
                )
            }
        }else{
            return(
                <div className="load">
                    <center>
                        <img src="https://i.ibb.co/V3dvk8n/clock.gif" alt="loading"/>
                    </center>
                </div>
            )
        }

    }

    return(
        <div id="dis">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay
