import React,{Component} from "react";
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';
import './placeOrder.css';



// const url = "https://api-lens.herokuapp.com/update";
const oUrl = "https://nodeapp-production.up.railway.app/orders";


class ViewOrder extends Component {

    constructor(props){
        super(props)
        
        

        this.state={
            orders:'',
            congo:'visible'
        }
    }

    // //api call
    // componentDidMount(){
    //     if(this.props.location){
    //         let query = this.props.location.search.split('&');
    //         if(query){
    //             let data={
    //                 "status":query[0].split('=')[1],
    //                 "date":query[2].split('=')[1],
    //                 "bank_name":query[3].split('=')[1],
    //             }
    //             let id = query[1].split('=')[1].split('_')[1];
    //             fetch(`${url}/${id}`,{
    //                 method:'PATCH',
    //                 headers:{
    //                     'Accept':'application/json',
    //                     'Content-Type':'application/json'
    //                 },
    //                 body:JSON.stringify(data)
    //             })
    //         }
    //     }
    //     let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
    //     axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    //     axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    // }

    // closeCoupon = () =>{
        
    //     this.setState({congo:'hidden'})
        

    // }



    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut' || !('loginStatus' in sessionStorage)){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2 style={{marginTop: "9%", marginBottom: "10%"}}>Login First To View Orders</h2>
                    </center>
                </div>
            )
        }
        return(
           <>
                <Header/>
                {/* <div id="coupon" className="coupon" style={{ visibility:`${this.state.congo}`}}>
                    <div id="thnk" style={{color:"black"}}>Thank You for Shopping Here</div>
                    <img src="https://i.ibb.co/YBBXkng/shopping.gif" alt="coupon" />
                    <span onClick={this.closeCoupon} style={{color:"black"}} className="close-coupon">&times;</span>
                
                </div> */}
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }
    
    //api calling
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }

}

export default ViewOrder;