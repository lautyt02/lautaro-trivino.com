import {Link} from 'react-router-dom'
const NavBar = ()=>{
    return(
        <>
        <Link to={"/"}>Home </Link>
        <Link to={"/cv/"}>CV </Link>
        <Link to={"/projects/"}>Projects </Link>
        <Link to={"/contact/"}>Contact </Link>
        
        </>
    )
}
export {NavBar}