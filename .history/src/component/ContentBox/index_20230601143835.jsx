/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';

// title: 名称
// content: 是否有解释内容
// cardContent: 是否有栅格内容 => 每三个一组
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
                {cardTitle.map((item, index) => (
                    <div className="single-card">
                        <div className='card-num'>{item.num}</div>
                        <div className='card-title'>{item.title}</div>


                    </div>))}
            </div>
        </div>
    )
};
export default ContentBox;