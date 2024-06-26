import Navbar from "../../assets/Navbar/Navbar"
function Error(){
    return(
        <>
            <Navbar/>
            <section className="h-screen flex items-center justify-center">
                <div className="p-4 max-w-screen-xl h-auto mx-auto flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white py-2 text-xl" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                    <div className="text-3xl">Error 404 not found !!</div>
                </div>
            </section>
        </>
    )
}
export default Error