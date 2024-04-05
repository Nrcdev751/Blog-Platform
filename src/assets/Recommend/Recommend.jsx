import {Link } from 'react-router-dom'
import { useState } from "react"
import sololeveling from '../img/Solo-Leveling-ARISE.png'
import honkai from '../img/honkai.jpeg'
import valorant from '../img/valorant.png'
import logo from "../img/logo.svg"
function Recommend(){
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        
        <>
    <section className="main-bg bg-[url('./assets/img/main-bg.png')] bg-contain   p-3">
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
                        <li><Link to="/" className="text-white">หน้าแรก</Link></li>
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
                    <li className="py-2"><Link to="/" className="text-white">หน้าแรก</Link></li>
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
        <div className="p-4 max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center">
                <div className="titile flex items-center">
                    <ion-icon name="flash"></ion-icon>
                    <p className="text-2xl py-3 text-white px-1">บทความล่าสุด</p>
                </div>
                <Link to="/blog" className="text-white"> 
                    <div className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white">ชมทั้งหมด</div>
                </Link>
               
            </div>
            <div className="flex flex-wrap md:-mx-2">
                <div className="w-full md:w-2/3 md:px-2">
                        <Link className="" to="/blog/blog01"> 
                            <div className="blog relative">
                                <div className="flex">
                                    <img className="object-cover w-full h-48 md:h-full rounded-xl" loading="lazy" src={sololeveling} alt="" />
                                    <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "100%" }}></span>
                                    <div className="infomation absolute bottom-0 p-3">
                                        <div className="tag-group flex">
                                            <div className="bg-red-400 text-white inline-flex items-center  px-4 rounded-md">
                                                <ion-icon name="flame"></ion-icon> <p>ข่าวมาแรง</p>
                                            </div>
                                        </div>
                                        <p className="text-white md:text-3xl">Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</p>
                                        <div className="status flex justify-between">
                                            <div className="icon status flex items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>100</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>10</p>
                                            </div>
                                            <div className="date status">
                                                <p>21 มีนาคม 67 19.21 น.</p>
                                            </div>
                                        </div>
                                        <Link to="/blog/blog01" className="text-white hidden md:flex group"><div className="btn btn-md text-xl btn-ghost my-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white">อ่านเพิ่มเติม <div className="icon flex items-center group-hover:ms-2 duration-300"><ion-icon  name="arrow-forward-outline" className=""></ion-icon> </div></div></Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>

                <div className="w-full md:w-1/3 md:px-2">
                    <Link to="/blog/blog01" className="text-white hover:opacity-80 duration-300">
                        <div className="blog relative">
                            <div className="flex">
                                <img className="object-cover w-full h-48 md:h-full rounded-xl" loading="lazy" src={valorant} alt="" />
                                <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "100%" }}></span>
                                <div className="infomation absolute bottom-0 p-3">
                                        <div className="tag-group flex md:hidden xl:flex">
                                            <div className="bg-red-400 text-white inline-flex items-center  px-4 rounded-md mx-1">
                                                <ion-icon name="flame"></ion-icon> <p>อัพเดทใหม่</p>
                                            </div>
                                            <div className="bg-blue-600 text-white inline-flex items-center  px-4 rounded-md mx-1">
                                            <ion-icon name="game-controller"></ion-icon> <p>Valorant</p>
                                            </div>
                                        </div>
                                        <p className="text-white md:text-md xl:text-xl">Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น</p>
                                        <div className="status flex md:hidden xl:flex flex items-center justify-between">
                                            <div className="icon status flex items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>50</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>5</p>
                                            </div>
                                            <div className="date status">
                                                <p>28 มีนาคม 67 19.05 น.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/blog/blog01" className="text-white hover:opacity-80 duration-300">
                        <div className="blog relative">
                            <div className="flex">
                                <img className="object-cover w-full h-48 md:h-full rounded-xl md:mt-1" loading="lazy" src={honkai} alt="" />
                                <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "100%" }}></span>
                                <div className="infomation absolute bottom-0 p-3">
                                        <div className="tag-group flex md:hidden xl:flex">
                                            <div className="bg-red-400 text-white inline-flex items-center  px-4 rounded-md mx-1">
                                                <ion-icon name="flame"></ion-icon> <p>อัพเดทใหม่</p>
                                            </div>
                                            <div className="bg-blue-600 text-white inline-flex items-center  px-4 rounded-md mx-1">
                                            <ion-icon name="game-controller"></ion-icon> <p>Honkai star rail </p>
                                            </div>
                                        </div>
                                        <p className="text-white md:text-md xl:text-xl">แพทซ์ใหม่ครบรอบ 1 ปีมีอะไรน่าสนใจมาดูกัน</p>
                                        <div className="status flex md:hidden xl:flex flex items-center justify-between">
                                            <div className="icon status flex items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>45</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>3</p>
                                            </div>
                                            <div className="date status">
                                                <p>28 มีนาคม 67 16.49 น.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>


        </>
    )
}
export default Recommend