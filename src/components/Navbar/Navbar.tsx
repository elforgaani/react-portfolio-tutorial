import { Link } from 'react-router-dom';


const Navbar = (): JSX.Element => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light text-light " style={{ backgroundColor: '#2C3D4F' }}>
            <div className="container">
                <Link className='text-decoration-none text-light' to=""><h1 className='text-uppercase fw-bold fs-1 '>Start Framework</h1></Link>

                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold text-light text-uppercase" to="about" >About
                                <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold text-light text-uppercase" to="portfolio" >Portfolio
                                <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold text-light text-uppercase" to="contacts" >Contacts
                                <span className="visually-hidden">(current)</span></Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>


    )
}
export default Navbar;