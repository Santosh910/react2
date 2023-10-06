import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = ()=> {
    const [productData,setProductData] = useState({name:"",price:"",image:""});

    const handleChange = async(event) => {

        setProductData({...productData,[event.target.name]:event.target.value })
    }

    const handleSubmit = async (event) =>{

        event.preventDefault();
        if(productData.name && productData.price && productData.image && productData.price > 0) {
             try{
                 const { data } = await axios.get("https://fakestoreapi.com/products",{title:productData.name,price: productData.price,image: productData.image})
            console.log(data, "responce from post request")
            toast.success("product added successfully,now you can add another product...")
            setProductData({name:"",price:"",image:""})
             } catch(error){
                console.log(error)
             }
           
        }else{
            toast.error("all field are mandtory and price must be greater than 0....")
        }
    } 
    return(
        <div>
           <form onSubmit={handleSubmit}>
             <label>product Name</label><br />
             <input type="text" name="name" value={productData.name} onChange={handleChange} /><br />
             <label>product Price</label><br />
             <input type="number" name="price" value={productData.price} onChange={handleChange} /><br />
             <label>product Image</label><br />
             <input type="url" name="image" value={productData.image} onChange={handleChange} /><br />
             <input type="submit" />
           </form>
        </div>
    )
}

export default AddProduct