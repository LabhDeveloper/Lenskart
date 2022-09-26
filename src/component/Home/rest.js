import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './rest.css';

class Rest extends Component {

    render() {
        return(
            <>
                <div className="row-1">

                    <div className="td-11">
                        <Link to={`/listing/1`}>
                            <img className="miniicon" src="https://i.ibb.co/j6zLqmN/k1.jpg" alt="eyeglasses"/>
                            <div className="widget-title">Eyeglasses</div>
                        </Link>
                    </div>
                    <div className="td-11">
                        <Link to={`/listing/3`}>
                            <img className="miniicon" src="https://i.ibb.co/H4rQ6gK/k2.jpg" alt="sunglasses"/>
                            <div className="widget-title">Sunglasses</div>
                        </Link>
                    </div>
                    <div className="td-11">
                        <Link to={`/listing/2`}>
                            <img className="miniicon" src="https://i.ibb.co/jL8jBCb/k3.jpg" alt="computerglasses"/>
                            <div className="widget-title">Computer Glasses</div>
                        </Link>
                    </div>
                    <div className="td-11">
                        <Link to="#">
                            <img className="miniicon" src="https://i.ibb.co/fF21GDh/k4.jpg" alt="contactlenses"/>
                            <div className="widget-title">Contact Lenses</div>
                        </Link>
                    </div>
                    <div className="td-11">
                        <Link to="#">
                            <img className="miniicon" src="https://i.ibb.co/7ypLBGB/k5.jpg" alt="powersunglasses"/>
                            <div className="widget-title">Power Sunglasses</div>
                        </Link>
                    </div>
                    <div className="td-11">
                        <Link to="#">
                            <img className="miniicon" src="https://i.ibb.co/DD2zG6Y/k6.jpg" alt="readingglasses"/>
                            <div className="widget-title">Power Sunglasses</div>
                        </Link>
                    </div>

                </div>

                <div className="main-banner-bar">

                <div className="main-banner">
                    <Link to="#">
                    <div className="carousel slide" id="devSlider" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#devSlider" data-slide-to="0" className="active"></li>
                            <li data-target="#devSlider" data-slide-to="1"></li>
                            <li data-target="#devSlider" data-slide-to="2"></li>
                            <li data-target="#devSlider" data-slide-to="3"></li>
                            <li data-target="#devSlider" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="https://i.ibb.co/LxXfnGp/ert.png" alt="food"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/L5htRmZ/jn.png" alt="food"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/C25ch3G/rfd.jpg" alt="food"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/dgDP3JS/rtf.jpg" alt="food"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/ZVWWRKr/fed.png" alt="food"/>
                            </div>
                        </div>
                        <Link className="left carousel-control" to="#devSlider" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </Link>
                        <Link className="right carousel-control" to="#devSlider" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </Link>
                    </div>
                    </Link>
                </div>
                
                </div>
                <div className="do">

                <Link to="#">
                    <img src="https://i.ibb.co/7kgKj9r/w4.jpg" alt="purpose"/>
                </Link>

                </div>
                <div className="row-2">
                    <center>
                    <div className="wear">
                        
                        <h2>WEAR THE TREND</h2>
                        <span>Our hottest collections</span>
                        
                    </div>
                    </center>
                    <div className="trend">

                        <div className="row-3">

                            <div className="td-31">
                                <img className="trend-icon" src="https://i.ibb.co/ZNWPGKG/q1.jpg" alt="round"/>
                                <div className="trend-title">Round</div>
                                <Link to="#">
                                    <div className="explore">Explore</div>
                                </Link>
                            </div>
                            <div className="td-32">
                                <img className="trend-icon" src="https://i.ibb.co/5rL5m7N/q2.jpg" alt="cateeye"/>
                                <div className="trend-title">Cat-Eye</div>
                                <Link to="#">
                                    <div className="explore">Explore</div>
                                </Link>
                            </div>
                            <div className="td-33">
                                <img className="trend-icon" src="https://i.ibb.co/RBjkw60/q3.jpg" alt="clubmaster"/>
                                <div className="trend-title">Clubmaster</div>
                                <Link to="#">
                                    <div className="explore">Explore</div>
                                </Link>
                            </div>
                            <div className="td-34">
                                <img className="trend-icon" src="https://i.ibb.co/x28c0d4/q4.jpg" alt="transparent"/>
                                <div className="trend-title">Transparent</div>
                                <Link to="#">
                                    <div className="explore">Explore</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="off-70">
                    <Link to="#">
                        <img src="https://i.ibb.co/HptJrPq/w5.jpg" alt="desk70%off"/>
                    </Link>
                </div>
                <div className="row-5">

                    <div className="row-6">
                        <hr style={{all:"revert"}}/>
                        <h4 style={{fontSize:"30px"}} >
                            FIND THE PERFECT FIT
                        </h4>
                        <hr style={{all:"revert"}}/>
                    </div>

                    <div className="perfect-fit">
                        <div className="eye-power">

                            <Link to="#">
                                <img className="fit" src="https://i.ibb.co/PCSwQSC/s1.webp" alt="eye-square"/>
                            </Link>

                            <Link to="#">
                                <img className="fit" src="https://i.ibb.co/ZcwKFKz/s2.webp" alt="power-sun-square"/>
                            </Link>

                        </div>
                        <div className="blu-sun-digi">

                            <Link to="#">
                                <img className="fit" src="https://i.ibb.co/KzVnGnG/s3.webp" alt="blucg-square"/>
                            </Link>

                            <Link to="#">
                                <img className="fit" src="https://i.ibb.co/M7htpb2/s4.webp" alt="sun-square"/>
                            </Link>

                            <Link to="#">
                                <img className="fit" src="https://i.ibb.co/yNzw4Wz/s5.webp" alt="digi-square"/>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="OUR-BLOG">
                    <div className="row-48">
                        <hr style={{all:"revert"}}/>
                        <h4 style={{fontSize:"30px"}}>
                            OUR BLOG
                        </h4>
                        <hr style={{all:"revert"}}/>
                    </div>
                    <div className="row-49">
                        <Link to="#">
                            <img className="row-49-icon" src="https://i.ibb.co/t2tG1kd/b5.webp" alt="ourblog"/>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Rest