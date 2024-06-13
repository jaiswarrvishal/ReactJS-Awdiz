import { useEffect, useState } from "react";
import "../02-06/Allproducts.css"
import axios from "axios";

function AllProducts(){
    const[allProducts,setAllProducts]=useState([]);
    console.log(allProducts);
    const[loading, setLoading] = useState(false);

    async function GetProduct(){
        setLoading(true);
        try{
            const product=await axios.get("https://fakestoreapi.com/products");
            setLoading(false);
            setAllProducts(product.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        GetProduct()},[]);

    return(
        <div>
            <h1>All Products</h1>
            <div 
             id="allproductsshow" >
                {loading ? (<div><h1>Loading...</h1> </div>) : allProducts.map((product)=>(
                    <div id="productshow">
                        <img src={product.image}/>
                        <p><b>Title</b>: {product.title}</p>
                        <p><b>Price</b>: ₹{product.price}</p>
                        <p><b>Category</b>: {product.category}</p>
                        <p><b>Rating</b>: {product.rating.rate} ({product.rating.count})</p>
                        <p><b>Description</b>: {product.description}</p>
                        <button>Buy</button>
                    </div>
                ))} 
            </div>
        </div>
    );
}
export default AllProducts;