import Tag from '../Tag';
import './TagContainer.scss';

const TagContainer = ({tags}) => {
    const renderTags = () => {
        return tags.map((tag) => (
            <Tag key={tag.id} backgroundColor={tag.color} name={tag.name} />
        ))
    }

    return (
        <div className='tags'>
            {renderTags()}
        </div>
    )
}

export default TagContainer;