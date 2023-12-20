import React from 'react';
import { useState } from 'react';
import { DataWare } from '../Pages/DataWares'
import {Card, Button} from "@mui/material"
// import Layout from '../Layout/Layout';
import "../Layout/Layout.css"


const AllProductType = ["Home", ...new Set(DataWare.map((product)=> product.productType))];
function Produc() {
    const [data, setData] = useState(DataWare);
    const [ProductType, setProductType]= useState(AllProductType);
    const filterProduct = (products)=>{
        if (products === "Home") {
            setData(DataWare);
            return;
        }
        const newProducts = DataWare.filter((data)=>{
            return data.productType === products
        });
        setData(newProducts)
    }
  return (
    <main>
        <ProductsTypesCategories filterProduct={filterProduct} ProductType={ProductType}/>
        
        <div className="home-content">
            {
            data.map((item)=>{
                return(
                    <AllItems key={item.id} {...item}/>
                )
            })
        }
        </div>
    </main>
  )
}
const ProductsTypesCategories = (props)=>{
    const {filterProduct, ProductType} = props;
    return(
        <div className="btn_container">
            {ProductType.map((category, index)=>{
                return(
                    <Button key={index} onClick={()=>{filterProduct(category)}} sx={{margin:"0 8px "}}>{category}</Button>
                    
                )
            })}
        </div>
    )
}
const AllItems = (props)=>{
    const {title, image,price}= props
    return(
        <div className="home--">
            <Card className="cards">
                <img src={image} alt="" />
                <h5><b>{title}</b></h5>
                <p>#{price}</p>
            </Card>
        </div>
    )
}
export default Produc