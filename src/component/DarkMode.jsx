import {useState} from "react"

function DarkMode(){
    const [colors,setColors]=useState("")
    return(
        <>
        <div style={{ backgroundColor: colors}} className='w-[100vw] h-[100vh] flex justify-center items-center '>
            {
                colors=="black" ? (<button className="text-white bg-red-700 p-2 rounded-md "  onClick={()=>{
                    setColors("white")
                }}>
                    Change Background
                </button>):(<button className="text-white bg-black p-2 rounded-md " onClick={()=>{
                setColors("black")
            }}>
                Change Background
            </button>
            )
            }
        </div>
        </>
    )
}
export default DarkMode