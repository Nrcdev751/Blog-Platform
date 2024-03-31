import sololeveling from '../img/Solo-Leveling-ARISE.png'
import profile from '../img/profile.jpg'
import honkai from '../img/honkai.jpeg'
import valorant from '../img/valorant.png'
import {Link } from 'react-router-dom'
function Blog(){
    return(
        <>
            <section className="p-3">
                <div className="p-4 max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center">
                               <div className="flex items-center">
                                    <ion-icon name="book"></ion-icon>
                                    <p className="text-2xl py-3 text-white px-2">บทความของเรา</p>
                               </div>
                               <Link to="/blog">
                                    <div className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white">ชมทั้งหมด</div>
                                </Link>                    </div>
                    <div className="md:grid grid-cols-6">
                        <div className="col-span-4">
                            <label className="input input-bordered mb-3 flex items-center gap-2">
                                <input type="text" className="grow" placeholder="ค้นหาบทความ" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        <Link to="/blog/blog01">
                            <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                <div className="blog relative">
                                    <div className="flex">
                                        <img className="w-full rounded-xl" src={sololeveling} alt="" />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <p className="text-white md:text-xl my-2">Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</p>
                                    <p className="text-slate-300/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <div className="status flex justify-between md:hidden xl:flex">
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>100</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>10</p>
                                        </div>
                                        <div className="date status">
                                            <p>21 มีนาคม 67 19.21 น.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3  md:hidden xl:flex ">
                                        <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                        <div className="infomation ms-2">
                                            <p className="font-bold">Narongchai</p>
                                            <p>ผู้เขียน</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        <Link to="/blog/blog01">
                            <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                <div className="blog relative">
                                    <div className="flex">
                                        <img className="w-full rounded-xl" src={valorant} alt="" />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <p className="text-white md:text-xl my-2">Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น</p>
                                    <p className="text-slate-300/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <div className="status flex justify-between md:hidden xl:flex">
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>50</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>5</p>
                                        </div>
                                        <div className="date status">
                                            <p>28 มีนาคม 67 19.05 น.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3  md:hidden xl:flex ">
                                        <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                        <div className="infomation ms-2">
                                            <p className="font-bold">Narongchai</p>
                                            <p>ผู้เขียน</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        <Link to="/blog/blog01">
                            <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                <div className="blog relative">
                                    <div className="flex">
                                        <img className="w-full rounded-xl" src={honkai} alt="" />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <p className="text-white md:text-xl my-2">แพทซ์ใหม่ครบรอบ 1 ปีมีอะไรน่าสนใจมาดูกัน</p>
                                    <p className="text-slate-300/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <div className="status flex justify-between md:hidden xl:flex">
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>45</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>3</p>
                                        </div>
                                        <div className="date status">
                                            <p>28 มีนาคม 67 16.49 น.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3  md:hidden xl:flex ">
                                        <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                        <div className="infomation ms-2">
                                            <p className="font-bold">Narongchai</p>
                                            <p>ผู้เขียน</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-span-2">
                            <div className="game-card md:ms-3 bg-blue-600/25 text-white p-3 rounded-xl">
                                <p className="text-xl font-bold">ผู้เขียนบทความของเรา</p>
                            </div>
                            <Link to="/author/narongchai">
                                <div className="flex items-center mt-3 hover:bg-slate-700/25 duration-300 xl:flex p-5 mx-3 rounded-md">
                                    <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                    <div className="infomation ms-2">
                                        <p className="font-bold">Narongchai</p>
                                        <p>ผู้เขียน</p>
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
export default Blog