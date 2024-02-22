import style from './style/PortfolioCmp.module.css'

const PortfolioCmp = (img: any) => {

    return (
        <div className="col-md-4">
            <div className={`${style.portfolioImage} my-3 position-relative overflow-hidden`}>
                <img src={img.img} alt="Component" className="w-100 rounded-3" />
            </div>
        </div>
    )
}

export default PortfolioCmp;