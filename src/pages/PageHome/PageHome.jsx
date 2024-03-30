import Navbar from "../../assets/Navbar/Navbar.jsx"
import Recommend from "../../assets/Recommend/Recommend.jsx"
import Trending from "../../assets/Trending/Trending.jsx"
import Blog from "../../assets/Blog/Blog.jsx"

function PageHome(){
    return(
        <>
            <Navbar/>
            <Recommend/>
            <Trending/>
            <Blog/>
        </>
    )
}
export default PageHome