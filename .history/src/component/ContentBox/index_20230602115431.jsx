/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';

// title: 名称
// content: 是否有解释内容
// arrFirstRow: 数组 每三个一组 => 属性有title/num/symbol(非必有)
const ContentBox = ({ title, content, arrFirstRow, arrSecondRow }) => {


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
            {arrFirstRow && (
                <div className='card-container'>
                    <div className="box-card">
                        {arrFirstRow.map((item, index) => (
                            <div className="single-card" key={index}>
                                <div className='card-num'>{item.num}</div>
                                <div className='card-title'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <div className="box-card">
                        {arrSecondRow.map((item, index) => (
                            <div className="single-card" key={index}>
                                <div className='card-num'>{item.num}</div>
                                <div className='card-title'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>)}
            <div className='info-tab'>
                <div className='single-info'>
                    <div className="info-title">
                        设备数量
                    </div>
                    <div className="info-num">
                        123
                    </div>

                </div>
                <div className='single-info'>
                    <div className="info-title">
                        设备数量
                    </div>
                    <div className="info-num">
                        123
                    </div>

                </div>

            </div>
        </div>
    )
};
export default ContentBox;