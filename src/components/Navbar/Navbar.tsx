import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='fixed-top' style={{ backgroundColor: '#2C3D4F' }}>
            <div className="container d-flex justify-content-between align-items-center py-3">
                <Link className='text-decoration-none text-light' to=""><h1 className='text-uppercase fw-bold fs-1 '>Start Framework</h1></Link>
                <div className="tabs">
                    <ul className='d-flex justify-content-center align-items-center list-unstyled'>
                        <li className='px-2'><Link className='link-opacity-50 text-decoration-none text-light fw-bold text-uppercase ' to="about">About</Link></li>
                        <li className='px-2'><Link className='link-opacity-50 text-decoration-none text-light fw-bold text-uppercase' to="portfolio">Portfolio</Link></li>
                        <li className='px-2'><Link className='link-opacity-50 text-decoration-none text-light fw-bold text-uppercase' to="contacts">Contacts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;