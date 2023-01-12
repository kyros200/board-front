import './Hero.scss';

const Hero = ({ mainText, children}) => {
    return (
        <div className='landing-hero-container'>
            <div className='content'>
                <div className='left'>
                    {mainText}
                </div>
                <div className='right' to="/me">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Hero;