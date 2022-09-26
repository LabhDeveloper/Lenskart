import React,{Component} from 'react';
import './header.css';
import {Link,withRouter} from 'react-router-dom';
const url = "https://lens-jwt.herokuapp.com/api/auth/userInfo"



class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name, data.email, data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <>
                    <span className="menu-link" to="/login">
                        <span></span> 
                        &#128075; Hi {data.name}
                     </span> &nbsp;
                    <Link className="menu-link" to="/register" onClick={this.handleLogout}>
                        <span className="glyphicon glyphicon-log-out" ></span>Logout 
                    </Link>  
                </>
            )

        }else{
            return(
                <>
                    <Link className="menu-link" to="/login">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link> &nbsp;
                    <Link className="menu-link" to="/register">
                        <span className="glyphicon glyphicon-user"></span> SignUp
                    </Link>  
                </>

            )
        }
    }
    
    render(){
        return(
            <header>  
                <div className="topnavbar">
                    <ul>
                        <li>
                            <Link to="#">Do More, Be More |</Link>
                        </li>
                        <li>
                            <Link to="#"> Try In 3D | </Link>
                        </li>
                        <li>
                            <Link to="#">Store Locator |</Link>
                        </li>
                        <li>
                            <Link to="#">Quality |</Link>
                        </li>
                        <li>
                            <Link
                                to="#">USA |</Link>
                        </li>
                        <li>
                            <Link
                                to="#">Singapore |</Link>
                        </li>
                        <li>
                            <Link to="#">UAE |</Link>
                        </li>
                        <li>
                            <Link to="#">John Jacobs |</Link>
                        </li>
                        <li>
                            <Link to="#">Aqualens |</Link>
                        </li>
                        <li>
                            <Link to="#">Cobrowsing |</Link>
                        </li>
                        <li>
                            <Link to="#">Engineering Blog </Link>
                        </li>
                        <li className="topright">
                            <Link to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="mainheader">
                    <div className="lenskartlogo">
                        <Link to="/">
                            <img src="https://i.ibb.co/NYwJn0c/d3.jpg" alt="Lenskart Logo"/>
                        </Link>
                    </div>
                    <div className="phonenumber">
                        <img src="https://i.ibb.co/GMgXpG3/d4.jpg" alt="phone_number"/>
                    </div>
                    <div className="searchbox">
                        <input className="search" type="search" name="search" id="search"
                            placeholder= "What  Are  You  Looking  For">
                        </input>
                    </div>
                    <div className="menu">
                        {/* <span className="menu-li">
                            <img height="18px" src="https://i.ibb.co/WPhbJyJ/cart.png" alt="cart"/>
                            <Link to="#">Cart</Link>
                        </span> */}
                        {this.conditionalHeader()}
                            
                            {/* <span className="menu-li">
                                <Link href="https://www.lenskart.com/">Sign In Sign Up</Link>
                            </span> */}
                    </div>
                </div>

            </header>
        )
    }
    //api calling
    componentDidMount() {
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);