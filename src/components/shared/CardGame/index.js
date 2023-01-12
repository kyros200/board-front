import Card from '../Card'
import Logo from '../Logo'
import './CardGame.scss'

const CardGame = ({name, console, image, ...rest}) => {
    return (
    <Card {...rest} className='card-game'>
        <div className='image'>
            <img src={image} alt={name}/>
        </div>
        <Logo className="logo" console={console} />
        <div className='text'>
            {name}
        </div>
    </Card>
    )
}

export default CardGame;