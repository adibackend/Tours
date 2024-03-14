import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const removeItem = (id) => {
    const temp = data.filter((data) => {
      return data.id !== id;
    });
    setData(temp);
    // console.log(tours);
  };
  const fetchh=async()=>{
    setLoading(true)
    try{
      const res=await fetch(url)
      console.log(res)      
      const temp=await res.json()
      setData(temp)
      console.log(res)
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchh()
  },[])
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <div className="w-[90vh] max-w-lg md:max-w-7xl mx-auto ">
        <Tours data={data} removeItem={removeItem}></Tours>
      </div>
      <div className="flex justify-center mt-10">
      <button onClick={fetchh} className="font-semibold bg-green-400 py-4 text-2xl hover:text-white rounded-xl px-8 hover:bg-green-600">
        Refresh
      </button>

      </div>
    </>
  );
};
export default App;
