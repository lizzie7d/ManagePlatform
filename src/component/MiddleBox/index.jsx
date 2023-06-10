import './style.css';
import defaultPic from '../../assets/defaultPic1.png';
import chanliang from '../../assets/chanliang.png';
import chanzhi from '../../assets/chanzhi.png';

const MiddleBox = () => {
    const titleFirstColumn = ['涂市镇钟岭村01', '涂市镇大杉村01', '铜鼓镇清泉村01', '李溪镇毛家山村01'];
    const titleSecondColumn = ['涂市镇钟岭村02', '涂市镇钟岭村02', '涂市镇钟岭村02', '涂市镇钟岭村02'];

    return (
        <div className='middle-flex'>
            <div
                className="middle-container"
            >
                <div className="icon-and-text">
                    {titleFirstColumn.map((item, index) => (<div className='single-detail'>{item}</div>))}
                </div>
                <div className="icon-and-text">
                    {titleSecondColumn.map((item, index) => (<div className='single-detail'>{item}</div>))}
                </div>
                <div className="middle-pic">
                    <img src={defaultPic} style={{ width: 202 }} />
                </div>
                <div className="link-right"></div>
                <div className="produce-box">
                    <div className="produce-title"><img style={{ marginRight: 8 }} src={chanliang} />产量</div>
                    <div className="produce-content">
                        <div className="produce-current">当前</div>
                        <div className="produce-number">1,450</div>
                        <div className="produce-symbol">吨</div>

                    </div>
                    <div className="produce-content">
                        <div className="produce-current">预估</div>
                        <div className="produce-number">1,600</div>
                        <div className="produce-symbol">吨</div>

                    </div>
                </div>
                <div className="produce-box">
                    <div className="produce-title"><img style={{ marginRight: 8 }} src={chanzhi} />产值</div>
                    <div className="produce-content">
                        <div className="produce-current">当前</div>

                        <div className="produce-number">3,200</div>
                        <div className="produce-symbol">万元</div>

                    </div>
                    <div className="produce-content">
                        <div className="produce-current">预估</div>
                        <div className="produce-number">2,750</div>
                        <div className="produce-symbol">万元</div>

                    </div>

                </div>
            </div>
        </div>

    )
};
export default MiddleBox;