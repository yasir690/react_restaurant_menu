

import React, { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Menu from './component/menu';
import Menucard from './component/menucard';
const App = () => {
  const [menu,setMenu]=useState(Menu);
  const [originalMenu]=useState(Menu);

  const filterdata=(category)=>{

    if(category==="all"){
      setMenu(originalMenu)
    }
    else{
      const updatedData=originalMenu.filter((item)=>{
        return item.category===category;
      });
      setMenu(updatedData);
    }

  }
  return (
    <div className='main'>
      <h1 className='text-center text-capitalize text-danger'>restaurant menu app</h1>
      <hr className='hr'/>

      <ButtonGroup aria-label="Basic example" style={{margin:"5px"}}>
      <Button variant="primary" onClick={()=>filterdata("breakfast")}>breakfast</Button>
      <Button variant="secondary" onClick={()=>filterdata("lunch")}>lunch</Button>
      <Button variant="danger" onClick={()=>filterdata("dinner")}>dinner</Button>
      <Button variant="info" onClick={()=>filterdata("evening")}>evening</Button>
      <Button variant="warning" onClick={()=>filterdata("all")}>all</Button>

    </ButtonGroup>
    <Menucard menu={menu}/>
    </div>
  )
}

export default App