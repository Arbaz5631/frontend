import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import Dashboard from './modules/dashboard'
import { connect } from "react-redux";
function Routes() {
    return (
        <Switch>
            <Route exact path={"/dashboard/:menu"} component={Dashboard} />
            <Route exact path={"/dashboard/:menu/:subMenu"} component={Dashboard} />
            <Redirect exact from="*" to="/dashboard/home" />
         </Switch>
    )
}

const mapStateToProps=(state)=>{
    return {
        product:state.products
    }
}
export default connect(mapStateToProps)(Routes);

