import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer"
import {Link } from 'react-router-dom'
import sololeveling from '../../assets/img/Solo-Leveling-ARISE.png'
import valorant from '../../assets/img/valorant.png'
import honkai from '../../assets/img/honkai.jpeg'
import profile from '../../assets/img/profile.jpg'
import { useState } from "react"


function Blog(){
    const [formData, setFormData] = useState({
        comment : ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,[name] : value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const validationErrors = {}
        if(!formData.comment.trim()){
            validationErrors.comment = "* กรุณากรอกข้อความแสดงความคิดเห็นด้วยครับ"
        }

        setErrors(validationErrors)
    }

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
                    
                    <div className="md:grid md:grid-cols-3 md:gap-5">
                        <div className="blog-content col-span-2 my-2">
                            <div className="flex justify-between items-center">
                            <div className="date status">
                                <p>21 มีนาคม 67 19.21 น.</p>
                            </div>
                            <div className="date status">
                                <div className="icon status flex items-center">
                                    <ion-icon name="eye-outline"></ion-icon>
                                    <p className='mx-2'>100</p>
                                </div>
                            </div>
                        </div>
                            <p className="text-xl lg:text-3xl my-3">Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</p>
                            <div className="bg-red-400 text-white inline-flex items-center  my-3 px-3 rounded-md">
                                <ion-icon name="flame"></ion-icon> <p>ข่าวมาแรง</p>
                            </div>
                            <img src={sololeveling} className="w-full my-2" alt="" />
                            <p className="text-slate-300/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad ducimus ab dicta, cum maiores libero excepturi consequuntur amet obcaecati provident earum, alias dolores labore ipsa optio nisi quidem voluptatibus!</p>
                            <p className="lg:text-2xl my-2">Heading</p>
                            <p className="text-slate-300/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad iure nisi culpa ipsum atque quisquam aliquid? Pariatur eos dolor, ratione dolores assumenda maxime omnis laudantium explicabo eveniet porro. Excepturi.</p>
                            <div className="option-button flex justify-between items-center my-5">
                                <a >
                                <div className="flex items-center cursor-pointer">
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <p className="ms-2">100</p>
                                </div>
                                </a>
                                <div className="group-button flex justify-between md:justify-start items-center">
                                    <p className="text-xl mx-2">แชร์ต่อ</p>
                                    <a  className="hover:scale-125 ease-in duration-150 cursor-pointer mx-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                                    </a>
                                    <a  className="hover:scale-125 ease-in duration-150 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/></svg>
                                    </a>
                                    <a   className="hover:scale-125 ease-in duration-150 cursor-pointer ms-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    </a>
                                    <a  className="hover:scale-125 ease-in duration-150 cursor-pointer ms-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>                                
                                    </a>
                                
                                    
                                </div>
                            </div>
                            <div className="author flex justify-between p-2 bg-slate-800/25 my-3 items-center">
                                <div className="flex items-center mt-3 ">
                                            <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                            <div className="infomation ms-2">
                                                <p className="">Narongchai</p>
                                                <p>Student</p>
                                            </div>
                                </div>
                                
                                <Link to="/author/narongchai">
                                    <div className="author-link me-4 flex  items-center hover:text-blue-200/50 duration-300">
                                        <p className="me-2">ผู้เขียนบทความ </p>
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                            <div className="comment my-4 w-full ">
                                <p className="text-xl my-2">แสดงความคิดเห็น</p>
                                <form action="" onSubmit={handleSubmit}>
                                    <textarea 
                                    placeholder="แสดงความคิดเห็นของคุณที่นี่" 
                                    type="text"
                                    name="comment"
                                    className="textarea textarea-bordered textarea-lg w-full "
                                    onChange={handleChange}
                                    ></textarea>
                                    {errors.comment && <div className="text-red-500">{errors.comment}</div>}
                                    <button aria-required className="btn btn-md btn-ghost   bg-gradient-to-r from-blue-500 to-blue-800 text-white my-2">ส่งความคิดเห็น</button>
                                </form>
                            </div>
                        </div>
                        <div className="blog-recommend mt-8 ">
                            <p className="text-xl lg:text-3xl my-3">บทความอื่น ๆ </p>
                            <Link to="/blog/blog01">
                                <div className="blog-1 grid lg:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
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
                            <Link to="/blog/blog01">
                                <div className="blog-1 grid lg:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={honkai} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-white text-md my-2">แพทซ์ใหม่ครบรอบ 1 ปีมีอะไรน่าสนใจมาดูกัน</p>
                                        <div className="icon status flex  items-center">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <p className='mx-2'>45</p>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <p className='mx-2'>3</p>
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