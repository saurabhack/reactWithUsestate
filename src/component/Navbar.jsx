import { NavLink } from "react-router-dom"
function Navbar(){
    return(
        <>
        <div className="w-[100vw] h-[15vh] border border-black flex justify-center items-center bg-gray-600 text-white ">
            <div className="w-[10%] h-[100%] flex items-center"><p><NavLink to="/">Counter App</NavLink></p></div>
            <div className="w-[20%] h-[100%] flex items-center"><p><NavLink to="/BackGroundChanger">Background Color changingApp</NavLink></p>
            </div>
            <div className="w-[20%] h-[100%] flex items-center"><p><NavLink to="/useStateWithArray">useState with Array</NavLink></p></div>
            <div className="w-[20%] h-[100%] flex items-center"><p><NavLink to="/apiFetching">api fetching with useState</NavLink></p>
            </div>
        </div>
        </>
    )
}
export default Navbar