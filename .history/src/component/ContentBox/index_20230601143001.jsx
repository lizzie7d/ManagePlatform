/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';
const ContentBox = ({ title, content }) => {
    const cardTitle = [{ title: '总种植面积', num: 16, simbol: '亩' }];
    return (
        <div
            className="box-container">
            <div className="box-title">
                <img src={titleImg} />
                {title}
            </div>
            {content && (<div className="box-content">
                {content}
            </div>)}
            <div className="box-card">

            </div>
        </div>
    )
};
export default ContentBox;