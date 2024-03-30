function Blog(){
    return(
        <>
            <section className="">
                <div className="p-4 max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center">
                                <p className="text-2xl py-3 font-bold">What's News</p>
                                <div className="btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white">ชมทั้งหมด</div>
                    </div>
                    <div className="md:grid grid-cols-6">
                        <div className="col-span-4">
                        <label className="input input-bordered mb-3 flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search blog" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                            <div className="blog-1 grid md:grid-cols-2 py-2">
                                <div className="blog relative">
                                    <div className="flex">
                                        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "80%" }}></span>
                                        <div className="absolute bottom-0 p-3 ">
                                            <p className="text-white md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet.</p>
                                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione?</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <div className="bg-blue-200 p-2 rounded-md inline-flex">PC</div>
                                    <p className="text-xl mt-1 font-bold">Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque sapiente hic quo ex </p>
                                    <div className="flex items-center mt-3">
                                        <img className="rounded-full  h-10 w-10 my-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <div className="infomation ms-2">
                                            <p className="font-bold">Narongchai</p>
                                            <p>ผู้เขียน</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="game-card md:ms-3 bg-red-500/70 text-white p-3 rounded-xl">
                                <p className="text-xl font-bold">คนเขียนกระทู้</p>
                                
                            </div>
                            <div className="flex items-center mt-3 md:ms-5">
                                <img className="rounded-full  h-10 w-10 my-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="infomation ms-2">
                                    <p className="font-bold">Narongchai</p>
                                    <p>ผู้เขียน</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 md:ms-5">
                                <img className="rounded-full  h-10 w-10 my-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="infomation ms-2">
                                    <p className="font-bold">Narongchai</p>
                                    <p>ผู้เขียน</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}
export default Blog