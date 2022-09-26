import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const url = "https://api-lens.herokuapp.com/filter";

class SizeFilter extends Component {

    filterSize = (event) => {
        let Category_Id = this.props.Category_Id;
        let sizeId = event.target.value;
        let sizeUrl;
        if(sizeId === ""){
            sizeUrl = `${url}/${Category_Id}`
        }else{
            sizeUrl = `${url}/${Category_Id}?Size_Id=${sizeId}`
        }
        axios.get(sizeUrl)
            .then((res) => {this.props.filterPerSize(res.data)})
    }

    render(){
        return(
            <>
                <div className="toy"style={{marginLeft:'15%'}} onChange={this.filterSize}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <hr style={{marginLeft:'0px'}}/>
                    <div className="si">Size</div>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>Extra Narrow
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>Narrow
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Medium
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Wide
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Extra Eide
                    </label>
                </div>
            
            </>
        )
    }
}

export default SizeFilter;