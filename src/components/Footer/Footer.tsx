import FooterCmp from "./components/FooterCmp"
import FooterCredits from "./components/FooterCredits";

const Footer = (): JSX.Element => {

    const footerCmpData = [
        {
            title: 'Location',
            description: '2215 John Daniel Drive Clark, MO 65243'
        },
        {
            title: 'Around the Web',
            description: ''
        },
        {
            title: 'About Freelancer',
            description: 'Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.'
        }
    ]

    return (
        <footer className="text-light" style={{ backgroundColor: '#2C3D4F' }}>
            <div className="container">
                <div className="row">
                    {footerCmpData.map((item, index) => <FooterCmp key={index} {...item} />)}
                </div>
            </div>  
            <FooterCredits />
        </footer>
    )
}

export default Footer;