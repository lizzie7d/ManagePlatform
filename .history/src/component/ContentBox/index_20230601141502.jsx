/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/layout/title-pic.png';
const ContentBox = ({ title, content }) => {
    return (
        <div
            className="box-container">
            <div className="box-title">
                <img src={titleImg} />
                {title}
            </div>
            <div className="box-content">
                {content}
            </div>
        </div>
    )
};
export default ContentBox;