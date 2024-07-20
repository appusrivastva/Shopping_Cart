
import './App.css';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import Shop from './component/Shop';
import { useState } from 'react';


function App() {
  
  const [cart,setCart]=useState([]);
  const [warning,setWarning]=useState(false)

  const [show,setShow]=useState(true)
  function handleClick(item){
    let isPresent=false;


    cart.forEach((Product)=>{
      if(item.id===Product.id)
        isPresent=true;
    })


    if(isPresent){
      setWarning(true)
        setTimeout(()=>{
          setWarning(false)
        },2000)
      

    }
    setCart([...cart,item])
  }


  const handleChange=(item,d)=>{
    let ind=-1
    cart.forEach((data,index)=>{
      if(data.id===item.id)
        ind=index
    })
    const tempArr=cart;
    tempArr[ind].amount+=d;
    console.log(tempArr)

    if(tempArr[ind].amount===0){
      tempArr[ind].amount=-1
    }
    setCart([...tempArr])
  }
  return (
    <>
    
    
    <Navbar size={cart.length} setShow={setShow}/>


    {
      show?     <Shop handleClick={handleClick}/>:<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
    }
    

    {
      warning && <div className='warning'>Item is already Present in your Cart

      </div>
    }
    </>
  );
}

export default App;
