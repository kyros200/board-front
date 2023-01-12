import Link from '../shared/Link'
import './Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='buttons'>
                    <Link to="/error">DevLog</Link>
                    <Link to="/error">Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;