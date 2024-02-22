import StarStylingCmp from "../StarStylingCmp/StarStylingCmp";

const About = (): JSX.Element => {
    return (
        <section style={{ backgroundColor: '#1ABC9C', paddingBlock: 100 }} className=' text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center py-5">
                            <h2 className="text-uppercase fs-1 fw-bold py-3">About Component</h2>
                            <StarStylingCmp />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-body">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-body">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.                    </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About;