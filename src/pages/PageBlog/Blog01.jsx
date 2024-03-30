import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer"
import {Link } from 'react-router-dom'
import sololeveling from '../../assets/img/Solo-Leveling-ARISE.png'
import valorant from '../../assets/img/valorant.png'


function Blog(){
    return(
        <>
            <Navbar/>
            <section>
                <div className="p-4 max-w-screen-xl  mx-auto  ">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li><Link to="/">หน้าแรก</Link></li> 
                                <li><Link to="/blog">บทความ</Link></li>
                                <li><Link>Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</Link></li>
                            </ul>
                        </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="blog-content col-span-2 ">
                            <p className="text-xl lg:text-3xl my-3">Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</p>
                            <img src={sololeveling} className="w-full my-2" alt="" />
                            <p className="text-slate-300/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad ducimus ab dicta, cum maiores libero excepturi consequuntur amet obcaecati provident earum, alias dolores labore ipsa optio nisi quidem voluptatibus!</p>
                            <p className="lg:text-2xl my-2">Lorem ipsum dolor sit amet.</p>
                            <p className="text-slate-300/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad iure nisi culpa ipsum atque quisquam aliquid? Pariatur eos dolor, ratione dolores assumenda maxime omnis laudantium explicabo eveniet porro. Excepturi.</p>
                        </div>
                        <div className="blog-recommend">
                            <p className="text-xl lg:text-3xl my-3">บทความอื่น ๆ </p>
                            <Link to="/blog/blog02">
                                <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={valorant} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-white text-md my-2">Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น</p>
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>50</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>5</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/blog/blog02">
                                <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={valorant} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-white text-md my-2">Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น</p>
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>50</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>5</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Blog