import { useState } from "react"
import {Link } from 'react-router-dom'

function Navbar(){
        const [isMenuOpen,setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    return(
        <section className="bg-gradient-to-r from-blue-500 to-blue-800">
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
                <div className="text-white text-2xl ">GamerGrid</div>
                    <ul className="hidden md:flex space-x-4">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="blog" className="text-white">Blog</Link></li>
                        <li><Link to="treste" className="text-white">Home</Link></li>
                        <li><Link to="/" className="text-white">Home</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex ">
                    <button className="btn btn-sm mx-2">เข้าสู่ระบบ</button>
                    <button className="btn btn-sm btn-primary  bg-gradient-to-r from-blue-500 to-blue-800 text-white">สมัครสมาชิก</button>
                </div>
            </div>
            {isMenuOpen ? (
                <ul className="flex-col md:hidden transition-all">
                    <li className="py-2"><Link to="/" className="text-white">Home</Link></li>
                    <li  className="py-2"><Link to="blog" className="text-white">Blog</Link></li>
                    <li  className="py-2"><Link to="/" className="text-white">Home</Link></li>
                    <li  className="py-2"><Link to="/" className="text-white">Home</Link></li>
                    <div className="mt-2">
                    <button className="btn btn-sm">เข้าสู่ระบบ</button>
                    <br />
                    <button className="btn btn-sm mt-2">สมัครสมาชิก</button>
                    </div>
            </ul>
            ) : null
            
            }
            
        </nav>
        </section>
    )
}
export default Navbar