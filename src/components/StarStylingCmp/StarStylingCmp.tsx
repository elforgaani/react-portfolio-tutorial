import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from './style/StarStylingCmp.module.css'
const StarStylingCmp = (styling?: React.CSSProperties) => {
    return (
        <>
            <span className={style.icon} style={styling} ><FontAwesomeIcon icon={faStar} /></span>
        </>
    )
}

export default StarStylingCmp;