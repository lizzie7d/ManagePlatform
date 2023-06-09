import './style.css';
import defaultPic from '../../assets/defaultPic1.png';
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
                    {titleSecondColumn.map((item, index) => (<div>{item}</div>))}
                </div>
                <div className="middle-pic">
                    <img src={defaultPic} style={{ width: 202 }} />
                </div>
                <div className="link-right"></div>
                <div className="produce-box">
                    <div className="produce-title">栽种时间</div>
                    <div className="produce-content">
                        <div className="produce-current">2023/5/6</div>
                        {/* <div className="produce-number">16,524</div>
                        <div className="produce-symbol">/万吨</div> */}

                    </div>
                    <div className="produce-content">
                        <div className="produce-current">2023/5/9</div>
                        {/* <div className="produce-number">12,524</div>
                        <div className="produce-symbol">/万吨</div> */}

                    </div>
                </div>
                <div className="produce-box">
                    <div className="produce-title">栽种人员</div>
                    <div className="produce-content">
                        <div className="produce-current">张三</div>
                        {/* <div className="produce-number">16,524</div>
                        <div className="produce-symbol">/万吨</div> */}

                    </div>
                    <div className="produce-content">
                        <div className="produce-current">李四</div>
                        {/* <div className="produce-number">12,524</div>
                        <div className="produce-symbol">/万吨</div> */}

                    </div>
                    <div className="produce-content">
                        <div className="produce-current">王二麻子</div>
                        {/* <div className="produce-number">12,524</div>
                        <div className="produce-symbol">/万吨</div> */}

                    </div>
                </div>
            </div>
        </div>

    )
};
export default MiddleBox;