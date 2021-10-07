import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Body from "../body/Body";
import styled from "styled-components";
import Utility from "../../utility";
import AddProduct from "../addProduct/AddProduct";
import Products from "../products/products";
import AboutUs from "../about/About"
const DashbordContainer=styled.div`
 display:flex;
 flex-direction:row;
`;
const HomeContainer=styled.div`
 display:flex;
 flex-direction:column;
`;

const BodyContainer=(props)=>{
  console.log("is  menu active is ====>",Utility.isMenuActive("/home"))
  return(
    <>
    {Utility.isMenuActive("/home")&&<Body/>}
    {Utility.isMenuActive("/addProduct")&&<AddProduct/>}
    {Utility.isMenuActive("/products")&&<Products/>}
    {Utility.isMenuActive("/aboutUs")&&<AboutUs/>}
    </>

  )
}


const DashboardComponent=(props)=>{
return(
    <DashbordContainer>
      <SideBar {...props}/>
      <HomeContainer>
           <Header {...props}/>
           <BodyContainer {...props}/>
      </HomeContainer>
    </DashbordContainer>
)
}
export default DashboardComponent;