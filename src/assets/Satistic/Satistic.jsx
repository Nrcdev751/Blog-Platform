import satis from '../json/satistic.json'

function Satistic(){
    return(
        <>
           <section className="dark:bg-slate-950/25   bg-white p-3">
                <div className="p-4 mt-20 max-w-screen-xl mx-auto">
                        <div className="title text-center my-15">
                            <p className="main-title text-4xl">ข้อมูลของเรา</p>
                            <p className="text-xl  my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quo?</p>
                        </div>
                        {
                                satis.map((satistic) => (
                                <div className="grid md:grid-cols-3 my-10">
                                    <div className="text-center">
                                        <p className="text-7xl text-blue-600">{satistic.totalBlogs.toLocaleString()}</p>
                                        <p className="text-xl  my-5">บทความ</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-7xl text-blue-600">{satistic.totalAuthor.toLocaleString()}</p>
                                        <p className="text-xl  my-5">ผู้เขียนบทความ</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-7xl text-blue-600">{satistic.totalViews.toLocaleString()}</p>
                                        <p className="text-xl  my-5">ยอดรับชม</p>
                                    </div>
                                </div>
                                    )
                                )
                            }
                   
                </div>
           </section>
        </>
    )
}
export default Satistic