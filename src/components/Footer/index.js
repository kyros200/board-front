import Link from '../shared/Link'
import Hatch from '../shared/Hatch'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='right'>
                    <div className='text'>
                        <Hatch /> know who I am.
                    </div>
                    <div className='text'>
                        {new Date().getFullYear()} Made by Rafael Najjar
                    </div>
                    <Link className={"button"} to="/error">About me</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;