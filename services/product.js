import { httpService } from "../utility/httpService";
import { httpConstants } from "../constants";
import axios from "axios";
export default{productList}

function getHeaders() {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
      method:"cors",
      "Access-Control-Allow-Origin": "*",
      skip: true,
    };
  }
async function productList(){
    let url = `http://localhost:8000/setRecords/getProduct`;
    console.log("url is ==>",url)
    let productList="";
    // const response=await httpService(httpConstants.METHOD_TYPE.GET,{}, getHeaders(), url)
    await axios.get(url,getHeaders).then((response) => {
      console.log("<><><><><><><><><><>< coming")
      console.log("product list data is ++++>",response)
      productList=response.data
    }).catch((e)=>console.log(e));
    return productList;

    
    
    
    //   .then((response) => {
        // if (
        //   !response.success ||
        //   response.responseCode !== 200 ||
        //   !response.responseData ||
        //   response.responseData.length === 0
        // )
        //   return Promise.reject(response);
        
        // return Promise.resolve(response);
    //   })
    //   .catch(function (err) {
    //     return Promise.reject(err);
    //   });
  }

  