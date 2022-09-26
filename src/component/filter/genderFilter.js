import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const url = "https://api-lens.herokuapp.com/filter";

class GenderFilter extends Component {

    filterGender = (event) => {
        let Category_Id = this.props.Category_Id;
        let Gid = event.target.value;
        let gUrl;
        if(Gid === ""){
            gUrl = `${url}/${Category_Id}`
        }else{
            gUrl = `${url}/${Category_Id}?Gid=${Gid}`
        }
        axios.get(gUrl)
            .then((res) => {this.props.filterPerGender(res.data)})
    }

    render(){
        return(
            <>
                <div className="toy"style={{marginLeft:'15%'}} onChange={this.filterGender}>
                    <div className="si">Gender</div>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>Unisex
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>Male
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Female
                    </label>
                </div>
            
            </>
        )
    }
}

export default GenderFilter;