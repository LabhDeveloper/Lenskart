import React from 'react';
import Header from '../../Header';
//import Footer from '../../Footer';
import DropDown from './dropDown';
import Rest from './rest';
import './home.css'


const Home = (props) => {
    console.log(">>>>>>>inside home",props)
    return(
        <React.Fragment>
            <Header/>
            <DropDown/>
            <Rest/>
        </React.Fragment>
    )
}

export default Home