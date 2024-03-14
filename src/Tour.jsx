import { useState } from "react";

const Tour = ({id,image,info,name ,removeItem}) => {
  const [readMore,setReadMore]=useState(false)

  return (
    <>
      <article className="my-5 p-4 bg-slate-300 shadow-xl rounded-lg relative ">
        <img
          src={image}
          alt={name}
          className="h-80 object-cover w-full rounded-t-xl hover:scale-110 duration-300 hover:rounded-b-xl"
        />
        
        <div className="p-4 font-semibold text-center mb-4 leading-loose space-x-2 ">
          <h5 className="text-2xl pb-4">{name}</h5>
          <p>
            {readMore ? info : ` ${info.substring(0, 200)}... `}
            <button
              className="text-green-600 font-bold "
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'show less' : ' read more'}
            </button>
          </p>
        </div>
        <button
          onClick={() => removeItem(id)}
          className="w-full  bg-green-400 py-2 hover:shadow-xl hover:text-white rounded-md font-semibold hover:bg-green-600"
        >
          Remove Item
        </button>
      </article>
    </>
  );
}
export default Tour