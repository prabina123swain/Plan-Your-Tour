import { useState } from "react";

function Card1( props){

    const[Readmore,setReadmore]=useState(true);
    let description=Readmore?`${props.info.substring(0,20)}...`:props.info ;

    function textHandler(){
        setReadmore(!Readmore);
    }

    function notIntrested(){
  
        try{
            props.removeTour(props.id);
            console.log("Heyy I am running");
        }
        catch(e){
            console.log("Error aa raha hee");
        }
    }

    return(
 <div className="card">
       <img src={props.image} className="image" alt="myimage"></img>
    <div className="tour-info">
         <div className="tour-details">
         <h4 className="tour-price">₹ {props.price}</h4>
         <h4 className="tour-name">{props.name}</h4>
         </div>
         <div className="description">
         {description}
             <span onClick={textHandler} className="read-more">
            { Readmore?'Read more':'Read less'}
            </span>
         </div>
         <button className="btn-red" onClick={notIntrested}>Not Intrested</button>
    </div> 
 </div>
    )
}

export default Card1;