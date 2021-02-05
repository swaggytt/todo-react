import './navbar.scss'
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="content">
                <NavLink className='link-btn' activeClassName='link-btn-active' exact to='/'>Home</NavLink>
                {/* <NavLink className='link-btn' activeClassName='link-btn-active' exact to='/create'>createPage</NavLink> */}
                <NavLink className='link-btn' activeClassName='link-btn-active' exact to='/done'>donePage</NavLink>
                <NavLink className='link-btn' activeClassName='link-btn-active' exact to='/contact'>Contact</NavLink>
                <NavLink exact to='create'><button className='btn'>New Task</button></NavLink>
            </div>
        </div>
    )
}

export default Navbar;