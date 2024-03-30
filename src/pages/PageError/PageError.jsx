import Navbar from "../../assets/Navbar/Navbar"
function Error(){
    return(
        <>
            <Navbar/>
            <section className="">
                <div className="p-4 max-w-screen-xl mx-auto">
                    <div className="text-3xl">Error 404 not found !!</div>
                </div>
            </section>
        </>
    )
}
export default Error