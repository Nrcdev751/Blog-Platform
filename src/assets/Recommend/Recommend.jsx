function Recommend(){
    return(
        <>
           <section className="">
                <div className="p-4 max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl py-3 font-bold">Recommend Article</p>
                        <div className="btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white">ชมทั้งหมด</div>
                    </div>
                    <div className="grid  md:grid-cols-3 md:gap-2">
                        <div className="col-span-2 ">
                            <div className="blog relative">
                                <div className="flex">
                                    <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "80%" }}></span>
                                    <div className="absolute bottom-0 p-3 ">
                                        <p className="text-white text-3xl">Lorem ipsum dolor sit amet.</p>
                                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione?</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 ">
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
                            <div className="blog relative">
                                <div className="flex">
                                    <img className="w-full rounded-xl md:mt-1" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <span className="rounded-xl bg-gradient-to-t from-black via-transparent to-transparent absolute inset-x-0 bottom-0" style={{ height: "80%" }}></span>
                                    <div className="absolute bottom-0 p-3 ">
                                        <p className="text-white md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet.</p>
                                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Recommend