import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const url = "https://api-lens.herokuapp.com/filter";

class SortFilter extends Component {

    filterSort = (event) => {
        let Category_Id = this.props.Category_Id;
        let sid = event.target.value;
        let sUrl;
        if(sid === ""){
            sUrl = `${url}/${Category_Id}`
        }else{
            sUrl = `${url}/${Category_Id}?sort=${sid}`
        }
        axios.get(sUrl)
            .then((res) => {this.props.filterPerSort(res.data)})
    }

    render(){
        return(
            <>
                <div className="toy"style={{marginLeft:'15%'}} onChange={this.filterSort}>
                    <div className="si">Sort By</div>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>Low to High
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="-1"/>High to Low
                    </label>
                </div>
            
            </>
        )
    }
}

export default SortFilter;