import { useState } from "react"
import {Link } from 'react-router-dom'
import logo from "../img/logo.svg"

function Navbar(){
        const [isMenuOpen,setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    return(
        <section className="main-bg p-3">
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
                        <li><Link to="/Blog-Platform/" className="text-white">หน้าแรก</Link></li>
                        <li><Link to="/blog" className="text-white">บทความ</Link></li>
                        <li><Link to="/author/narongchai" className="text-white">ผู้เขียนบทความ</Link></li>
                        <li><Link to="/write" className="text-white">เขียนบทความ</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex ">
                    <button className="btn btn-sm btn-ghost  bg-gradient-to-r from-gray-800 to-slate-900 mx-2">เข้าสู่ระบบ</button>
                    <button className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white">สมัครสมาชิก</button>
                </div>
            </div>
            {isMenuOpen ? (
                <ul className="flex-col md:hidden transition-all">
                    <li className="py-2"><Link to="/Blog-Platform" className="text-white">หน้าแรก</Link></li>
                    <li  className="py-2"><Link to="blog" className="text-white">บทความ</Link></li>
                    <li  className="py-2"><Link to="/author/narongchai" className="text-white">ผู้เขียนบทความ</Link></li>
                    <li  className="py-2"><Link to="/write" className="text-white">เขียนบทความ</Link></li>
                    <div className="mt-2">
                    <button className="btn btn-sm btn-ghost  bg-gradient-to-r from-gray-800 to-slate-900 ">เข้าสู่ระบบ</button>
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