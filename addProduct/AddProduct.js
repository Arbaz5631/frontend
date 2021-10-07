import React from 'react'
import styled from "styled-components"
const AddProductMainDiv = styled.div`
padding:17px 100px 100px 100px;
text-align:center;
margin:50px 0px 0px 450px;
border:solid 2px #e9f0ee;
`
const ImageDiv = styled.div`
width:200px;
height:200px;
border:dotted;
margin:30px 10px 30px 30px;
`;
const AddProductFormDiv = styled.div`
display:flex;
flex-direction:column;
margin-left:36px;
`
const ProductName = styled.div`
display:flex;
flex-direction:column;
`

const ProductPrice = styled.div`
display:flex;
flex-direction:column;
`
const ProductType = styled.div`
display:flex;
flex-direction:column
`
const Title = styled.div`
font-size:14px;
color:black;
margin:20px 0px 5px 0px;
`;
const Input = styled.input`
padding:20px
`;
const SubmitButton=styled.button `
background-color:#8fb8aa;
border:none;
padding:20px;
margin-top:10px;
border-radius:7px;
`
const FormName=styled.h1 `
color:#8fb8aa;
`



function AddProduct() {
    return (
        <AddProductMainDiv>
        <FormName>Add Product</FormName>
            <ImageDiv/>
            <AddProductFormDiv>
                <ProductName>
                    <Title>Product Name</Title>
                    <Input></Input>
                </ProductName>
                <ProductType>
                    <Title>Product Type</Title>
                    <Input></Input>
                </ProductType>
                <ProductPrice>
                    <Title>Product Price</Title>
                    <Input></Input>
                </ProductPrice>
                <SubmitButton>Save Product</SubmitButton>
            </AddProductFormDiv>


        </AddProductMainDiv>
    )
}

export default AddProduct
