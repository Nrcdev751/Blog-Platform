import sololeveling from '../../assets/img/Solo-Leveling-ARISE.png'
import honkai from '../../assets/img/honkai.jpeg'
import profile from '../../assets/img/profile.jpg'
import valorant from '../../assets/img/valorant.png'
import {Link } from 'react-router-dom'
import React, { useState } from 'react';
import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer"
import GoToTop from '../../assets/Gototop/Gototop'
function Blog(){
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardData = [
        {
            id: 1,
            imageUrl: sololeveling,
            linkTo: "blog01",
            content: {
                tag: "ข่าวมาแรง",
                game: "",
                title: "Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                viewCount: 100,
                likeCount: 10,
                date: "21 มีนาคม 67 19.21 น.",
                author: {
                    name: "Narongchai",
                    role: "ผู้เขียน",
                    avatarUrl: profile
                }
            }
        },
        {
            id: 2,
            imageUrl: valorant,
            linkTo: "blog01",
            content: {
                tag: "ข่าวมาแรง",
                game: "Valorant",
                title: "Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                viewCount: 50,
                likeCount: 5,
                date: "28 มีนาคม 67 19.05 น.",
                author: {
                    name: "Narongchai",
                    role: "ผู้เขียน",
                    avatarUrl: profile
                }
            }
        },
        {
            id: 3,
            imageUrl: honkai,
            linkTo: "blog01",
            content: {
                tag: "ข่าวมาแรง",
                game: "Honkai Star Rail",
                title: "แพทซ์ใหม่ครบรอบ 1 ปีมีอะไรน่าสนใจมาดูกัน",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                viewCount: 45,
                likeCount: 3,
                date: "28 มีนาคม 67 16.49 น.",
                author: {
                    name: "Narongchai",
                    role: "ผู้เขียน",
                    avatarUrl: profile
                }
            }
        },
       
    ];
    return(
        <>
            <Navbar/>
            <section>
                <div className="p-4 max-w-screen-xl  mx-auto  ">
                     <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to="/">หน้าแรก</Link></li> 
                            <li><Link to="/blog">บทความ</Link></li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center">
                               <div className="flex items-center">
                                    <ion-icon name="book"></ion-icon>
                                    <p className="text-2xl py-3 text-white px-2">บทความของเรา</p>
                               </div>
                    </div>
                    <label className="input input-bordered mb-3 flex items-center gap-2">
                                <input type="text" className="grow" placeholder="ค้นหาบทความ" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cardData.map((card, index) => (
                    <Link key={card.id} to={card.linkTo} className="text-white hover:opacity-80 duration-300">
                        <div 
                            className={`card shadow-xl overflow-hidden inline-block ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={card.imageUrl} className="card-banner rounded-t-xl duration-500" alt="" />
                            <div className="bg-blue-900/25 p-5 rounded-b-xl" id={`cardContent_${index}`}>
                                <div className="tag-group flex">
                                    <div className="bg-red-400 text-white inline-flex items-center px-4 rounded-md my-2 mx-1">
                                        <ion-icon name="flame"></ion-icon> <p>{card.content.tag}</p>
                                    </div>
                                    {card.content.game && (
                                        <div className="bg-blue-600 text-white inline-flex items-center px-4 rounded-md my-2 mx-1">
                                            <ion-icon name="game-controller"></ion-icon> <p>{card.content.game}</p>
                                        </div>
                                    )}
                                </div>
                                <p className="lg:text-xl my-1">{card.content.title}</p>
                                <p className="text-slate-300/70">{card.content.text}</p>
                                <div className="status flex md:flex-col lg:flex-row justify-between">
                                    <div className="icon status flex my-2 items-center">
                                        <ion-icon name="eye-outline"></ion-icon>
                                        <p className='mx-2'>{card.content.viewCount}</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <p className='mx-2'>{card.content.likeCount}</p>
                                    </div>
                                    <div className="date status flex items-center">
                                        <p>{card.content.date}</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 my-2 border-blue-400/50" />
                                <div className="flex items-center">
                                    <img className="rounded-full h-10 w-10 my-3" src={card.content.author.avatarUrl} alt="" />
                                    <div className="infomation ms-2">
                                        <p className="font-bold">{card.content.author.name}</p>
                                        <p>{card.content.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                    
                        
                    </div>
                </div>
            </section>
            <Footer/>
            <GoToTop/>

        </>
    )
}
export default Blog