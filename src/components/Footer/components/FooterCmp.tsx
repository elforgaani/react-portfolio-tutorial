import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FooterCmp = (props: any): JSX.Element => {

    const FooterCmpIcons = () => {
        return (
            <div className="d-flex justify-content-center align-items-center">


                <div className="icon mx-2"><FontAwesomeIcon size="2x" icon={faFacebook} /></div>
                <div className="icon mx-2"><FontAwesomeIcon size="2x" icon={faTwitter} /></div>
                <div className="icon mx-2"><FontAwesomeIcon size="2x" icon={faLinkedinIn} /></div>
                <div className="icon mx-2"><FontAwesomeIcon size="2x" icon={faGlobe} /></div>

            </div>
        )
    }
    console.log(props.title);
    return (
        <div className="col-md-4">
            <div className="text-center py-5"><h3>{props.title}</h3>
                {props.description === '' ?
                    <FooterCmpIcons /> : <p>{props.description}</p>}
            </div>
        </div>
    )
}
export default FooterCmp;