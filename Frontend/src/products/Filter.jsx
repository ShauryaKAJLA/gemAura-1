import React, { useEffect, useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGender, changePrice ,changeMetal, changeGem } from "./filterSlice";
import { products } from "../data/products";
import { useMemo } from "react";
import { changeProducts } from "./FilteredProductsSlice";
const Filter=()=>{
 
    
    const filter=useSelector(state=>state.filter.filter)
    
    const dispatch=useDispatch();
    let findmetallist=["All"];
    let findgemlist=["All"]
    let mx=useMemo(() =>{
        let l=0
        products.forEach(item=>{
            if(l<item.metal.pricePerGram*item.metal.weightInGram+item.Gem.totalPrice)
            {
                l=item.metal.pricePerGram*item.metal.weightInGram+item.Gem.totalPrice;
            }
            if(!findmetallist.find(i=>i.toLowerCase()==item.metal.type.toLowerCase()))
            {
                findmetallist.push(item.metal.type)
            }
            if(!findgemlist.find(i=>i==item.Gem.type))
            {
                findgemlist.push(item.Gem.type)
            }
        })
        return l
    }, [products])
    let mn=useMemo(() =>{
        let l=mx
        products.forEach(item=>{
            if(l>item.metal.pricePerGram*item.metal.weightInGram+item.Gem.totalPrice)
            {
                l=item.metal.pricePerGram*item.metal.weightInGram+item.Gem.totalPrice;
            }
        })
        return l
    }, [products])
    const [value,setValue]=useState(mx)
    const [gender,setGender]=useState(filter.gender)
    console.log(gender)
    const [metal,setMetal]=useState(filter.Metal);
    const [metalList,setMetalList]=useState(findmetallist)
    const [Gem,setGem]=useState(filter.Gem);
    const [Gemlist,setGemList]=useState(findgemlist);
    const  handelPricechange=(e)=>{
        setValue(e.target.value)
    }
    const handelGenderChange=(e)=>{
        setGender(e.target.value)
    }
    const handelMetalChange=(e)=>{
        setMetal(e.target.value)
    }
    const handelGemChange=(e)=>{
        setGem(e.target.value)
    }
    useEffect(()=>{
        dispatch(changePrice(value))
    },[value])
    useEffect(()=>{
        dispatch(changeGender(gender))
    },[gender])
    useEffect(()=>{
        dispatch(changeMetal(metal))
    },[metal])
    useEffect(()=>{
        dispatch(changeGem(Gem));
    },[Gem])
    useEffect(()=>{
        dispatch(changeProducts(filter))
        console.log(filter)
    },[filter])
    return(
        <div className="flex flex-col w-[100vw]">
     <div className="Filter w-[100vw] text-2xl font-medium justify-center flex my-3">Filters</div>
     <div className="flex justify-around">
     <div className="text-custom flex gap-[1vw]  sm:text-lg text-sm">Price: <div className="flex flex-col sm:text-base text-xs">  <input type="range" max={mx} min={mn} value={value} onChange={(e)=>handelPricechange(e)} className="sm:w-[10vw] w-[70px]  h-1 my-1 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-600"/> <div className="flex justify-center range sm:text-base text-xs"> &#x20B9; {value}</div></div></div>
    <div className="text-custom  sm:text-lg text-sm gap-[1vw] flex" >Gender: <div><select     value={gender} onChange={(e)=>handelGenderChange(e)} className="text-black md:w-[80px]  sm:w-[50px] w-[37px] sm:text-base text-sm">
        <option value="All" >All</option>
        <option value="m">Men</option>
        <option value="w">Women</option>
        <option value="k">Kids</option>
    </select></div></div>
    <div className="text-custom  sm:text-lg text-sm gap-[1vw] flex">Metal: <div> <select value={metal} onChange={(e)=>handelMetalChange(e)} className="text-black md:w-[80px]  sm:w-[50px] w-[37px] sm:text-base text-sm">
        {metalList.map(i=> <option value={i} key={i}>{i}</option>)}
    </select> 
    </div>
    </div>  
    <div className="text-custom  sm:text-lg text-sm flex gap-[1vw] ">

    Gem:
    <div><select value={Gem} onChange={(e)=>handelGemChange(e)} className="text-black md:w-[80px]  sm:w-[50px] w-[37px] sm:text-base text-sm">
        {Gemlist.map(i=> <option value={i} key={i}>{i}</option>)}
    </select>
    </div>
    </div>
    </div>
    </div>
)
}
export default Filter;