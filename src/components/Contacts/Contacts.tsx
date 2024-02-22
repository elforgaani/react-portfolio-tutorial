import StarStylingCmp from "../StarStylingCmp/StarStylingCmp";
import InputField from "./components/InputField";

const Contacts = (): JSX.Element => {
    const fieldsList = ['Name', 'Age', 'Email', 'Password']
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center">
                            <h2 className="fs-1 fw-bold text-uppercase"> contact section</h2>
                            <StarStylingCmp />
                        </div>
                    </div>
                    {fieldsList.map((label, index): any => <InputField label={label} />)}
                    <div className="col-md-12">
                        <div className="input text-center d-flex justify-content-center align-items-center my-3">
                           <button className="btn btn-success">Send Message</button>
                        </div>
                    </div>
                </div >
            </div>
        </section>
    )
}
export default Contacts;