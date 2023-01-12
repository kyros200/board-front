// import { useState } from 'react';
// import ReactLoading from 'react-loading';
// import Modal from '../Modal';
import {Link} from 'react-router-dom'
import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            Landing (Offline)
            <Link to="/Teste">Teste</Link>
            <Link to="/game">Check Online</Link>
            <Link to="/error">Check Error template</Link>
        </div>
    )
}

export default MainPage;