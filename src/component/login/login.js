import React,{Component} from 'react';
import Header from '../../Header';
import './login.css'

const url = "https://lensjwt-production.up.railway.app/api/auth/login";

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                //this.props.history.push(`/details/16`)
                if('productid' in sessionStorage){
                    this.props.history.push(`/details/${sessionStorage.getItem('productid')}`)
                }else{
                    this.props.history.push(`/`)
                }
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <hr style={{marginTop:"9%"}}/>
                
                <div className="container">
                    <div className="panel panel-success" id="has">
                        <div className="panel-heading" id="back">
                            Login
                        </div>
                        <div  className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <div className="form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" style={{fontSize:"15px"}} id="email" name="email" placeholder="email" required value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="control-label">Password</label>
                                <input className="form-control" style={{fontSize:"15px"}} id="password" name="password" placeholder="password" required value={this.state.password}
                                onChange={this.handleChange}/>
                            </div>
                            <button id="but" className="btn btn-info" style={{marginTop:"6%"}} onClick={this.handleSubmit}>Proceed</button>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Login

