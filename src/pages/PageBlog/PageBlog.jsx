
import {Link } from 'react-router-dom'
import React, { useState } from 'react';
import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer"
import GoToTop from '../../assets/Gototop/Gototop'
import {data} from '../../assets/json/data.js'
function Blog(){
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [gameFilter, setGameFilter] = useState('');

    const filteredData = data.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = categoryFilter === '' || item.category.toLowerCase() === categoryFilter.toLowerCase();
        const gameMatch = gameFilter === '' || (item.game && item.game.toLowerCase() === gameFilter.toLowerCase());

        return titleMatch && categoryMatch && gameMatch;
    });

    return(
        <>
            <Navbar/>
            <section className="dark:bg-slate-950/25   bg-white">
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
                                    <p className="text-2xl py-3 px-2">บทความของเรา</p>
                               </div>
                    </div>
                    <label className="input input-bordered mb-3 flex items-center gap-2">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="grow"
                        placeholder="ค้นหาบทความ"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    </label>
                    <div className="flex justify-between">
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="input input-bordered mb-3"
                    >
                        <option value="">หมวดหมู่</option>
                        {Array.from(new Set(data.map(item => item.category))).map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    <select
                        value={gameFilter}
                        onChange={(e) => setGameFilter(e.target.value)}
                        className="input input-bordered mb-3"
                    >
                        <option value="">รายชื่อเกม</option>

                        {Array.from(new Set(data.filter(item => item.game).map(item => item.game))).map((game) => (
                            <option key={game} value={game}>{game}</option>
                        ))}
                    </select>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                
                    
                    {filteredData.map((pageblogs) => (
                    <Link key={pageblogs.id} to={pageblogs.path} className=" hover:opacity-80 duration-300">
                        <div className="card  shadow-xl overflow-hidden inline-block">
                            <img src={pageblogs.images2} className="card-banner rounded-t-xl duration-500" alt="" />
                            <div className="dark:bg-blue-700/25 p-5 rounded-b-xl">
                                <div className="tag-group flex text-white">
                                    <div className="bg-red-400  inline-flex items-center px-4 rounded-md my-2 mx-1">
                                        <ion-icon name="flame"></ion-icon> <p>{pageblogs.category}</p>
                                    </div>
                                    {pageblogs.game && (
                                        <div className="bg-blue-600  inline-flex items-center px-4 rounded-md my-2 mx-1">
                                            <ion-icon name="game-controller"></ion-icon> <p>{pageblogs.game}</p>
                                        </div>
                                    )}
                                </div>
                                <p className="lg:text-xl my-1">{pageblogs.title}</p>
                                <p className="text-slate-500/70  dark:text-slate-300/70">{pageblogs.content}</p>
                                <div className="status flex md:flex-col lg:flex-row justify-between">
                                    <div className="icon status flex my-2 items-center">
                                        <ion-icon name="eye-outline"></ion-icon>
                                        <p className='mx-2'>{pageblogs.views}</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <p className='mx-2'>{pageblogs.likes}</p>
                                    </div>
                                    <div className="date status flex items-center">
                                        <p>{pageblogs.date}</p>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="flex items-center">
                                    <img className="rounded-full h-10 w-10 my-3" src={pageblogs.author_img} alt="" />
                                    <div className="infomation ms-2">
                                        <p className="font-bold">{pageblogs.author}</p>
                                        <p>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                    
                        
                    </div>
                </div>
                <br /><br /><br /><br />
                <br />
            </section>
            <Footer/>
            <GoToTop/>

        </>
    )
}
export default Blog