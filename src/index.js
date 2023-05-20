import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {add,sub,mul,div} from './Calc';
import App from './App';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

/*
function ncard(val){
     return(
      <Card imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
     />
     );
}
*/

ReactDOM.render(
   
 <>
  <h1 className='heading_style'>List of Five Cartoons and Animations </h1>
  
    {Sdata.map((val,index)=>{

      return(
      <Card imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
     />
     );
    }
              
    )}
  

 </>,
 document.getElementById("root")

);
