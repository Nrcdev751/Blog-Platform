import { useState,useEffect } from "react"
import {NavLink } from 'react-router-dom'
import logo from "../img/logo.svg"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar(){
        const [isActive, setIsActive] = useState(false);
        // daisyui
        const [theme,setTheme] = useState("dark");

        useEffect(() =>{
            if(theme === "dark"){
                document.documentElement.classList.add("dark");
            }else{
                document.documentElement.classList.remove("dark");
            }
        },[theme]
        );
        useEffect(() => {
            document.querySelector('html').setAttribute('data-theme', theme);
        }, [theme]);
        // tailwind
        const handleThemeSwitch = () =>{
            setTheme(theme === "dark" ? "light" : "dark");
        };

        const [isMenuOpen,setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    return(
        <section className=" p-3">
            <nav className=" p-4 max-w-screen-xl  mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="md:hidden">
                    <button onClick={toggleMenu} id="menu-toggle" className="text-white">
                        <svg 
                         fill='none' stroke='currentColor' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div>
                <div className="flex items-center">
                    <div className="text-white text-2xl font-bold">GamerGrid</div>
                    <img src={logo} className="h-5 w-5 mx-2" alt="" />
                </div>
                <ul className="hidden md:flex space-x-4">
                        <li><NavLink to="/Blog-Platform/" className="text-white">หน้าแรก</NavLink></li>
                        <li><NavLink to="/blog" className="text-white">บทความ</NavLink></li>
                        <li><NavLink to="/author/narongchai" className="text-white">ผู้เขียนบทความ</NavLink></li>
                        <li><NavLink to="/write" className="text-white">เขียนบทความ</NavLink></li>
                    </ul>
                </div>
                <div className="hidden md:flex ">
                    <button className="btn btn-sm btn-ghost text-white  bg-gradient-to-r from-gray-800 to-slate-900 mx-2">เข้าสู่ระบบ</button>
                    <button className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white mx-2">สมัครสมาชิก</button>
                    <div className=" flex items-center " >
                        {isActive? <MdOutlineLightMode className="fill-white mx-2 size-5 cursor-pointer" onClick={()=>{
                            handleThemeSwitch()
                            setIsActive(!isActive)}}/>:
                        <MdOutlineDarkMode  className="fill-white mx-2 size-5 cursor-pointer" onClick={()=>{
                            handleThemeSwitch()
                            setIsActive(!isActive)}} />
                            }
                    </div>

     
                </div>
            </div>
            {isMenuOpen ? (
                <ul className="flex-col md:hidden transition-all">
                    <li className="py-2"><NavLink to="/Blog-Platform" className="text-white">หน้าแรก</NavLink></li>
                    <li  className="py-2"><NavLink to="blog" className="text-white">บทความ</NavLink></li>
                    <li  className="py-2"><NavLink to="/author/narongchai" className="text-white">ผู้เขียนบทความ</NavLink></li>
                    <li  className="py-2"><NavLink to="/write" className="text-white">เขียนบทความ</NavLink></li>
                    <div className="mt-2">
                    <button className="btn btn-sm btn-ghost text-white bg-gradient-to-r from-gray-800 to-slate-900 ">เข้าสู่ระบบ</button>
                    <br />
                    <button className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white mt-2">สมัครสมาชิก</button>
                    </div>
            </ul>
            ) : null
            
            }
            
        </nav>
        </section>
    )
}
export default Navbar