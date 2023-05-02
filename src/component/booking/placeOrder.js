import React,{Component} from 'react';
import Header from '../../Header';
import './placeOrder.css';

const oUrl = "https://nodeapp-production.up.railway.app/placeOrder";
const url = "https://nodeapp-production.up.railway.app/select";

let current = new Date();
class PlaceOrder extends Component {

    

    constructor(props){
        super(props)
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        this.state={
            order_id:Math.floor(Math.random()*10000),
            brand_name:this.props.match.params.brandName,
            name:sessionData?sessionData[0]:'',
            email:sessionData?sessionData[1]:'',
            cost:0,
            date:`${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`,
            phone:sessionData?sessionData[2]:'',
            address:'',
            pno:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.pno = sessionStorage.getItem('productid');
        fetch(oUrl,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
        .then(console.log('order added'))

    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="itr" key={item._id}>
                        <div className="imgcard" >
                            <img src={item.lens_image} alt="frame"/>
                        </div>
                        <div className="txt">
                            <h3>{item.categories}</h3>
                            <h4>Brand : {item.brand_name}</h4>
                            
                            <h4>Rating : {item.rating}</h4>
                            <h4>Size : {item.size}</h4>
                            <h4>Gender : {item.gender}</h4>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut' || !('loginStatus' in sessionStorage)){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2 style={{marginTop:"9%"}}>Login First To Continue</h2>
                        <img src="https://i.ibb.co/Bs2Rsh7/login.gif" alt="login" width="350px" height="350px"/>
                    </center>
                </div>
            )
        }
        
        return(
            <>
                <Header/>
                <div className="container" style={{marginTop:"9%",width:"80%"}}>
                    <div className="panel panel-primary" >
                        <div className="panel-heading" id="fat">
                            Your Order
                        </div>
                        <div className="panel-body">
                            <form action="" method="" >
                                <div className="row">
                                    <input type="hidden" name="cost" value={this.state.cost}/>
                                    <input type="hidden" name="order_id" value={this.state.order_id}/>
                                    <input type="hidden" name="brand_name" value={this.state.brand_name}/>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname" className="control-label">Name</label>
                                        <input className="form-control" style={{fontSize:"15px"}} id="fname" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email" className="control-label">Email</label>
                                        <input className="form-control" style={{fontSize:"15px"}} name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="phone" className="control-label">Phone</label>
                                        <input className="form-control" style={{fontSize:"15px"}} name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="address" className="control-label">Address</label>
                                        <input className="form-control" style={{fontSize:"15px"}} name="address" value={this.state.address} placeholder="address"
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                {this.renderItem(this.state.pno)}
                                <center>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Order Total : &#8377;{this.state.cost} <span>(+GST)</span></h2>
                                    </div>
                                </div>
                                <button className="btn btn-success" id="hat" type="submit"
                                onClick={this.checkout}>Confirm Order</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

    //call api 
    componentDidMount(){
        let pno = sessionStorage.getItem('productid');
        let orderId = [];
        orderId.push(parseInt(pno));
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice =0;
            data.map((item) => {
                totalPrice = parseFloat(item.Price);
                return 'ok'
            })
            this.setState({pno:data,cost:totalPrice})
        })
    }
}

export default PlaceOrder;