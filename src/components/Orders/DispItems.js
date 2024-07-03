import items from "./fooditems"
import Card from "./Item";

export default function Display(){
    const disp=items.map((item)=>{
        return(
           <div>
              <Card {...item} />
           </div>
        );
  
    } );
}