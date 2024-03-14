import { useState } from "react";
import Tour from "./Tour";
const Tours = ({data , removeItem}) => {
    const [tours,setTour]=useState(data)

  return (
    <>
    <h1 className="text-center mt-4 underline underline-offset-8 ">Our Tours</h1>
    <div className="grid gap-8 md:grid-cols-2 items-start">

      {data.map((data) => {
          return (
              <>

            <Tour key={data.id} {...data} removeItem={removeItem}/>
    
          </>
        );
    })}
    </div>
    </>
  );
};
export default Tours;
