import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { products } from "../../data/products";
// import { products } from "../../data/products";

const initialState={
    cart:[]
}
export const CartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
           
              if(state.cart.find(item=>item.id==action.payload.id))
              {
                if(!action.payload.hasOwnProperty('size'))
                  state.cart=state.cart.filter(item=>item.id==action.payload.id?[item,item.quantity+=1]:item)
                else
                {
                    if(state.cart.find(item=>(item.id==action.payload.id&&item.size==action.payload.size)))
                    {
                        state.cart=state.cart.filter(item=>(item.id==action.payload.id&&item.size==action.payload.size)?[item,item.quantity+=1]:item)
                    }
                    else
                    {
                    let newitem= {
                        id:action.payload.id,
                        secId:nanoid(),
                        name:action.payload.name,
                        desc:action.payload.desc,
                        metal:action.payload.metal,
                        Gem:action.payload.Gem,
                         type_of:action.payload.type_of,
                         images:action.payload.images,
                         quantity:1,
                         instock:action.payload.instock,
                         size:action.payload.size
                    }
                     state.cart.push(newitem);
                    }
                }
               
            }
            else
            {
                if(action.payload.hasOwnProperty('size'))
                {
                    let newitem= {
                        id:action.payload.id,
                        secId:nanoid(),
                        name:action.payload.name,
                        desc:action.payload.desc,
                        metal:action.payload.metal,
                        Gem:action.payload.Gem,
                         type_of:action.payload.type_of,
                         images:action.payload.images,
                         quantity:1,
                         instock:action.payload.instock,
                         size:action.payload.size
                    }
                     state.cart.push(newitem);
                }
                else
                {
                    let newitem= {
                        id:action.payload.id,
                        name:action.payload.name,
                        desc:action.payload.desc,
                        metal:action.payload.metal,
                        Gem:action.payload.Gem,
                         type_of:action.payload.type_of,
                         images:action.payload.images,
                         quantity:1,
                         instock:action.payload.instock,
                    }
                     state.cart.push(newitem);
                }
              }
            
          },
        addQuantity : (state,action)=>{
            if(!action.payload.hasOwnProperty('size'))
            state.cart=state.cart.filter(item=>item.id==action.payload.id?[item,item.quantity+=1]:item)
            else
            state.cart=state.cart.filter(item=>item.id==action.payload.id&&item.secId==action.payload.secId?[item,item.quantity+=1]:item)
        },
        reduceQuantity : (state,action)=>{
            if(!action.payload.hasOwnProperty('size'))
            state.cart=state.cart.filter(item=>item.id==action.payload.id?[item,item.quantity-=1]:item)
            else
            state.cart=state.cart.filter(item=>item.id==action.payload.id&&item.secId==action.payload.secId?[item,item.quantity-=1]:item)
            state.cart=state.cart.filter(item=>item.quantity>0)
        },
        removeItem : (state,action)=>{
            if(!action.payload.hasOwnProperty('size'))
            state.cart=state.cart.filter(item=>item.id!=action.payload.id)
            else
            state.cart=state.cart.filter(item=>item.secId!=action.payload.secId||item.id!=action.payload.id)
        },
        changeSizeCart:(state,action)=>{
            state.cart=state.cart.filter(item=>item.secId===action.payload.secId?[item,item.size=action.payload.size]:item)
        }
    }
})

export const {addToCart,addQuantity,reduceQuantity,removeItem,changeSizeCart} = CartSlice.actions
export default CartSlice.reducer