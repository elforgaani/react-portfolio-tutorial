
import img from '../../assets/images/avatar.svg';
import StarStylingCmp from '../StarStylingCmp/StarStylingCmp';

const Home = (): JSX.Element => {
    return (
        <div style={{ backgroundColor: '#1ABC9C' }} className='py-4'>
            <section className="container">
                <div className="home-section d-flex flex-column justify-content-center align-items-center text-light" >
                    <img src={img} alt="Avatar" className='w-25' />
                    <h2 className='text-uppercase my-3 fs-1 fw-bold'>Start Framework</h2>
                    <StarStylingCmp />
                    <p>Graphic Artist - Web Designer - Illustrator
                    </p>
                </div>
            </section>
        </div>

    )
}
export default Home;