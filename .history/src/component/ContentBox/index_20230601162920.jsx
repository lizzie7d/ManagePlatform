/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';

// title: 名称
// content: 是否有解释内容
// cardContent: 是否有栅格内容 => 数组 每三个一组 => 属性有title/num/symbol(非必有)
const ContentBox = ({ title, content, cardContent }) => {
    const arrFirstRow = cardContent?.splice(0, 3);
    const arrSecondRow = cardContent?.splice(4, 6);

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
            {arrFirstRow && (<div className="box-card">
                {cardContent.map((item, index) => (
                    <div className="single-card" key={index}>
                        <div className='card-num'>{item.num}</div>
                        <div className='card-title'>{item.title}</div>
                    </div>
                ))}
            </div>)}
        </div>
    )
};
export default ContentBox;