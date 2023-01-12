import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className='error-container'>
            <div className='content'>
                <div className='buttons'>
                    <Link to="/">Back to main menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Error;