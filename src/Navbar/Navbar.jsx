import { useState } from "react"

function Navbar(){
        const [isMenuOpen,setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    return(
        <section className="bg-blue-500 shadow-sm">
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
                <div className="text-white text-2xl font-bold">GameGrid</div>
                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Services</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="hidden md:flex ">
                    <button className="btn btn-sm mx-2">เข้าสู่ระบบ</button>
                    <button className="btn btn-sm">สมัครสมาชิก</button>
                </div>
            </div>
            {isMenuOpen ? (
                <ul className="flex-col md:hidden transition-all">
                    <li className="py-2"><a href="#" className="text-white">Home</a></li>
                    <li  className="py-2"><a href="#" className="text-white">About</a></li>
                    <li  className="py-2"><a href="#" className="text-white">Services</a></li>
                    <li  className="py-2"><a href="#" className="text-white">Contact</a></li>
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