import Card1 from "./Card1";
import Data from "./Data";
import { useState } from "react";

function Tours() {

  function refreshHandler(){
    setTour(Data);
  }

    const[tours,setTour]=useState(Data);

     function removeTour(id){
         let newTour=tours.filter((tour)=>tour.id!==id);
         setTour(newTour);
     }

     if(tours.length==0){

      return(
        <div className="refresh">
        <h2>No Tours Left</h2>
          <button className="btn-white" onClick={refreshHandler}>
            Refresh
          </button>
        </div>
      );
     }


 return (
    <div className="container">
      <h2 className="title">Plan With Prabin</h2>
    <div className="cards">
    {
        tours.map( (tour) =>{
            return (<Card1 {...tour} removeTour={removeTour}></Card1>)
        })
      }
    </div>
   
    </div>
   )
}

export default Tours;