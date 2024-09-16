import {useState} from "react"
function ReactUseState(){
    const [number,setNumber]=useState(0)
    function increament(){
        setNumber(number+1)
    }
    function decreament(){
        if(number<=0){
            setNumber(0)
        }else{
        setNumber(number-1)
        }
    }
    return(
        <>

        <div className="w-[100vw] h-[50vh] border flex justify-center items-center flex-col">
            <h1 className="text-[5rem]">{number}</h1>
            <button onClick={increament} className="border border-red-900 p-2 bg-green-800 text-white m-2 text-[1.5rem] rounded-md">Increament ++ </button>
            <button onClick={decreament} className="border border-green-900 p-2 bg-red-700 m-3 rounded-md text-white text-[1.5rem]">Decreament -- </button>
        </div>
        
        </>
    )
}
export default ReactUseState