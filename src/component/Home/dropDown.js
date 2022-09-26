import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './dropDown.css';


class DropDown extends Component {

    constructor(){
        super()

        this.state ={

        }
    }

    render() {
        return(
            <nav className="nav-area">
                <ul className="font">
                    <li><Link to={`/listing/1`}><span>EYEGLASSES</span></Link>
                        <ul>
                            <li><Link to={`/listing/1`}><span><img src="https://i.ibb.co/JQSWyGP/profile.png" alt="men"/>Men</span></Link>
                                <ul>
                                    <li><Link to={`/listing/1`}><span>CLASSIC EYEGLASSES starting at &#8377;999</span></Link></li>
                                    <li><Link to={`/listing/1`}><span>PREMIUM EYEGLASSES starting at &#8377;3000</span></Link></li>
                                    <li><Link to={`/listing/1`}><span>COMPUTER EYEGLASSES starting at &#8377;1200</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/1`}><span><img src="https://i.ibb.co/P6mBC1B/profile-1.png" alt="women"/>Women</span></Link>
                                <ul>
                                    <li><Link to={`/listing/1`}><span>CLASSIC EYEGLASSES starting at &#8377;1199</span></Link></li>
                                    <li><Link to={`/listing/1`}><span>PREMIUM EYEGLASSES starting at &#8377;2500</span></Link></li>
                                    <li><Link to={`/listing/1`}><span>COMPUTER EYEGLASSES starting at &#8377;1500</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/1`}><span><img src="https://i.ibb.co/VBDqysY/teddy-bear.png" alt="kids"/>Kids</span></Link>
                                <ul>
                                    <li><Link to={`/listing/1`}><span>CLASSIC EYEGLASSES starting at &#8377;999</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to={`/listing/2`}><span>COMPUTER GLASSES</span></Link>
                        <ul>
                            <li><Link to={`/listing/2`}><span><img src="https://i.ibb.co/JQSWyGP/profile.png" alt="men"/>Men</span></Link>
                                <ul>
                                    <li><Link to={`/listing/2`}><span>BLUE 0 COMPUTER EYEGLASSES starting at &#8377;1299</span></Link></li>
                                    <li><Link to={`/listing/2`}><span>PREMIUM EYEGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/2`}><span><img src="https://i.ibb.co/P6mBC1B/profile-1.png" alt="women"/>Women</span></Link>
                                <ul>
                                    <li><Link to={`/listing/2`}><span>BLUE 0 COMPUTER GLASSES starting at &#8377;999</span></Link></li>
                                    <li><Link to={`/listing/2`}><span>PREMIUM EYEGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/2`}><span><img src="https://i.ibb.co/VBDqysY/teddy-bear.png" alt="kids"/>Kids</span></Link>
                                <ul>
                                    <li><Link to={`/listing/2`}><span>BLUE 0 COMPUTER GLASSES starting at &#8377;999</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to={`/listing/4`}><span>KIDS GLASSES</span></Link>
                        <ul>
                            <li><Link to={`/listing/4`}><span><img src="https://i.ibb.co/JQSWyGP/profile.png" alt="men"/>Men</span></Link>
                                <ul>
                                    <li><Link to={`/listing/4`}><span>CLASSIC EYEGLASSES starting at &#8377;999</span></Link></li>
                                    <li><Link to={`/listing/4`}><span>PREMIUM EYEGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/4`}><span><img src="https://i.ibb.co/P6mBC1B/profile-1.png" alt="women"/>Women</span></Link>
                                <ul>
                                <li><Link to={`/listing/4`}><span>CLASSIC EYEGLASSES starting at &#8377;999</span></Link></li>
                                    <li><Link to={`/listing/4`}><span>PREMIUM EYEGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to={`/listing/3`}><span>SUNGLASSES</span></Link>
                        <ul>
                            <li><Link to={`/listing/3`}><span><img src="https://i.ibb.co/JQSWyGP/profile.png" alt="men"/>Men</span></Link>
                                <ul>
                                    <li><Link to={`/listing/3`}><span>CLASSIC SUNGLASSES starting at &#8377;1199</span></Link></li>
                                    <li><Link to={`/listing/3`}><span>PREMIUM SUNGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/3`}><span><img src="https://i.ibb.co/P6mBC1B/profile-1.png" alt="women"/>Women</span></Link>
                                <ul>
                                    <li><Link to={`/listing/3`}><span>CLASSIC SUNGLASSES starting at &#8377;1199</span></Link></li>
                                    <li><Link to={`/listing/3`}><span>PREMIUM SUNGLASSES starting at &#8377;3000</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/listing/3`}><span><img src="https://i.ibb.co/VBDqysY/teddy-bear.png" alt="kids"/>Kids</span></Link>
                                <ul>
                                    <li><Link to={`/listing/3`}><span>CLASSIC EYEGLASSES starting at &#8377;999</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="#"><span>HOME EYE-TEST</span></Link></li>
                    <li><Link to="#"><span>STORE LOCATOR</span></Link></li>
                </ul>
            </nav>
        )
    }
}

export default DropDown