import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer"
import {Link } from 'react-router-dom'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Write(){
    const [value, setValue] = useState('');
    const toolbarOptions = [
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        ['link', 'image', 'video'],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      

  
      
        ['clean']                                         // remove formatting button
      ];
    const module = {
        toolbar: toolbarOptions,
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
           }
    return(
        <>
            <Navbar/>
            <div className="p-4 max-w-screen-xl  mx-auto  ">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to="/">หน้าแรก</Link></li> 
                        <li><Link to="/write">เขียนบทความ</Link></li>
                    </ul>
                </div>
                <div className="grid lg:grid-cols-12">
                    <div className="col-span-3"></div>
                    <div className="col-span-6 ">
                        <form action=""  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-control w-70 ">
                                    <div className="label">
                                        <span className="label-text">หัวข้อบทความ</span>
                                    </div>
                                    <input type="text" placeholder="หัวข้อบทความของคุณ" className="input input-bordered input-lg w-70" />
                                </label>
                            </div>
                            <div className="form-group">
                                <div className="label">
                                        <span className="label-text">รูปบทความ</span>
                                    </div>
                                <input type="file" className="file-input file-input-bordered file-input-md w-full " />
                            </div>
                            <div className="form-group my-3">
                                <select className="select select-bordered w-full ">
                                    <option disabled selected>หมวดหมู่บทความ</option>
                                    <option>ข่าวมาแรง</option>
                                    <option>อัพเดทใหม่</option>
                                    <option>แนะนำเกม</option>
                                </select>
                            </div>
                            <div className="form-group my-3">
                            <label className="form-control w-70 my-2">
                                <input type="text" placeholder="ชื่อเกม" className="input input-bordered input-md w-70" />
                                <div className="label">
                                </div>
                                </label>
                            </div>
                            <div className="form-group my-5">
                                <div className="label">
                                        <span className="label-text">เนื้อหาบทความ</span>
                                </div>
                                <ReactQuill theme="snow" modules={module} className="h-72" value={value} onChange={setValue} />   
                            </div>
                            <div>
                                <button className="my-10 btn btn-md btn-ghost w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white ">สร้างบทความ</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-3"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Write