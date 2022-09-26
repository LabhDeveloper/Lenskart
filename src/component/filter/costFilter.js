import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const url = "https://api-lens.herokuapp.com/filter";

class CostFilter extends Component{

    filterCost = (event) => {
        let Category_Id = this.props.Category_Id;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${Category_Id}`
        }else{
            costUrl = `${url}/${Category_Id}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((res) => {this.props.filterPerCost(res.data)})
    }
    
    render(){
        return(
            <>
                <div className="toy"style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <div className="si">Price</div>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-699"/>&#8377;100 - &#8377;699
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="700-1599"/>&#8377;700 - &#8377;1599
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1600-2499"/>&#8377;1600 - &#8377;2499
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2500-4000"/>&#8377;2500 - &#8377;4000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter