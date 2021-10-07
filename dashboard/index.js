import React,{useEffect} from "react";
import { connect } from "react-redux";
import { history } from "../../manager/history";
import DashboardComponent from "./dashboardComponent";
import Utility from "../../utility";
import { pathConstants } from '../../constants';

const Dashboard=(props)=>{
    const onMenuClick=(activeMenu)=>{
        history.push({pathname:activeMenu})
        window.location.reload()    
    }
    
return (
    <DashboardComponent onMenuClick={onMenuClick}/>
)
}
const mapStateToProps=(state)=>{
    return {
        product:state.products
    }
}
export default connect(mapStateToProps)(Dashboard);