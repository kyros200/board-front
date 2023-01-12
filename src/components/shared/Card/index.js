import {useNavigate} from 'react-router-dom'
import './Card.scss'

const Card = ({children, className="", to, ...style}) => {
    const navigate = useNavigate()
    return (
    <div className={`card ${className}`} style={{...style}} onClick={() => to && navigate(to)}>
        {children}
    </div>
    )
}

export default Card;