import './Tag.scss';

const Tag = ({key, backgroundColor, name}) => {
    return (
        <div key={key} className='tag' style={{backgroundColor}}>
            {name}
        </div>
    )
}

export default Tag;