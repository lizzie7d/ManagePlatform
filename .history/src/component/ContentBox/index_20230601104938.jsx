/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/layout/title-pic.png';
const ContentBox = (props) => {
    return (
        <div
            className="box-container">
            <div className="box-title">
                <img src={titleImg} />
                {props.name}
            </div>
            <div className="box-content">
                {props.content}
            </div>
        </div>
    )
};
export default ContentBox;