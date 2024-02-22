import StarStylingCmp from "../StarStylingCmp/StarStylingCmp";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import PortfolioCmp from "./components/PortfolioCmp";
const Portfolio = (): JSX.Element => {
    const imagesList = [p1, p2, p3, p1, p2, p3];

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center">
                            <h2 className="fs-1 fw-bold text-uppercase"> Portfolio component</h2>
                            <StarStylingCmp />
                        </div>
                    </div>
                    {imagesList.map((img, index): any => <PortfolioCmp img={img} />)}
                </div>
            </div>
        </section>
    )
}
export default Portfolio;