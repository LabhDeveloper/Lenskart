import React,{Component} from 'react';
import './details.css';
import axios from 'axios';
import Header from '../../Header';
import {Link} from 'react-router-dom';


const durl = "https://api-lens.herokuapp.com/details";


class Details extends Component {

    constructor(){
        super()

        this.state={
            productData:'',
            Category_Id:sessionStorage.getItem('Category_Id')
        }
    }

    proceed = () => {
        this.props.history.push(`/placeOrder/${this.state.productData.brand_name}`)
    }

    render(){

        let {productData} = this.state
        return(
            <>
                <Header/>
                <img src="https://i.ibb.co/M5B2CSn/PLP-Camapaign-WEB-3.webp" alt="banner" style={{width:'100%', height:'80px',marginTop:"9%"}}/>
                <div className= "maincontent">
                    <div className="imgcar">
                        <img src={productData.lens_image} alt='ad'/>
                        
                    </div>
                    <div className="tex">
                        <center>
                        <div className="til"><ins>{productData.categories}</ins></div>
                        </center>
                        <div className="brand">Brand : {productData.brand_name}</div>

                        <div className="siz">
                            <div className="">Size : {productData.size} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Product ID : 03439217{productData.product_id}</div>
                        </div>
                        <div className="gend">
                            <img src="https://i.ibb.co/jwCCv0L/gender.png" alt="gender" />
                            <span className="">{productData.gender}</span>
                        </div>
                        <div className="priz">
                            <div className="me"><img src="https://i.ibb.co/JyBHkGY/price-tag.gif" alt="tag" /> &#8377; {productData.Price} &nbsp;<span>(+tax)</span></div>
                        </div>
                        <center>
                            <div className="but">
                                <button id="buy" className="btn btn-success" onClick={this.proceed}>Buy Now</button>
                                &nbsp;&nbsp;
                                <Link to={`/listing/${this.state.Category_Id}`} id="beck" className="btn btn-danger">&#8592;</Link>
                                
                            </div>
                        </center>
                        
                    </div>
                </div>
            </>
            
        )
    }

    async componentDidMount() {

        let productid = this.props.match.params.productid;
        sessionStorage.setItem('productid',productid)
        axios.get(`${durl}/${productid}`)
        .then((res) => {this.setState({productData:res.data[0]})})

    }
}

export default Details;