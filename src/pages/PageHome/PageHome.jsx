import Recommend from "../../assets/Recommend/Recommend.jsx"
import Trending from "../../assets/Trending/Trending.jsx"
import Blog from "../../assets/Blog/Blog.jsx"
import Footer from "../../assets/Footer/Footer.jsx"
import Satistic from "../../assets/Satistic/Satistic.jsx"

function PageHome(){
    return(
        <>
            <Recommend/>
            <Trending/>
            <Satistic/>
            <Blog/>
            <Footer/>
        </>
    )
}
export default PageHome