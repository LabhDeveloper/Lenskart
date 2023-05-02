import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import Header from '../../Header';
import ListingDisplay from './listingDisplay';
import SizeFilter from '../filter/sizeFilter';
import GenderFilter from '../filter/genderFilter';
import CostFilter from '../filter/costFilter';
import SortFilter from '../filter/sortFilter';

const url = "https://nodeapp-production.up.railway.app/products?Category_Id=";


class Listing extends Component {
    constructor(props) {
        super(props)
        this.state={
            productList:''
        }
    }
    
    setDataPerFilter = (data) => {
        this.setState({productList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <div id="fhead">
                                    Filter Here
                                </div>
                            </center>
                            <SizeFilter Category_Id={this.props.match.params.Category_Id}
                            filterPerSize={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <GenderFilter Category_Id={this.props.match.params.Category_Id}
                            filterPerGender={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter Category_Id={this.props.match.params.Category_Id}
                            filterPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <SortFilter Category_Id={this.props.match.params.Category_Id}
                            filterPerSort={(data) => {this.setDataPerFilter(data)}}/>
                            
                            
                        </div>
                        <div id="content">
                            <div id="firstcontent">
                                <div style={{float:"left",fontSize:"15px",marginLeft:"10px"}}>SALE</div>
                                <div style={{float:"right",color: "#2d4644",fontSize:"14px"}}>
                                    <form action="">
                                        <label >SORT BY</label>
                                        <select name="sorting" style={{marginLeft:"5px",marginRight:"20px",borderRadius:"5px"}}>
                                        <option value="bestsellers">Bestsellers</option>
                                        <option value="lth">Price : Low to High</option>
                                        <option value="htl">Price : High to Low</option>
                                        <option value="new">New</option>
                                        </select>
                                    </form>
                                </div>
                                <center>
                                    <div style={{color:"#11b085", fontSize:"14px",marginBottom:"5px"}}><strong>VIEW FRAMES</strong>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label>
                                        <b style={{letterSpacing:"1px", color:"black"}}>VIEW 3D TRY ON</b>
                                    </div>
                                </center>
                            </div>
                            <ListingDisplay listData={this.state.productList}/>
                        </div>    
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        let Category_Id = this.props.match.params.Category_Id;
        sessionStorage.setItem('Category_Id',Category_Id)
        axios.get(`${url}${Category_Id}`)
        .then((res) => {this.setState({productList:res.data})})
    }
}

export default Listing