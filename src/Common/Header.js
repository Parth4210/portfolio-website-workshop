import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="btn">Home</NavLink>
            <NavLink to="/about" className="btn">About Me</NavLink>
            <NavLink to="/projects" className="btn">Projects</NavLink>
            <NavLink to="/experience" className="btn">Experience</NavLink>
            <NavLink to="/contact" className="btn">Contact</NavLink>
        </div>
    )
}

export default Header