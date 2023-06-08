import './style.css';
import defaultPic from '../../assets/defaultPic1.png';
const MiddleBox = () => {
    return (
        <div className='middle-flex'>
            <div
                className="middle-container"
            >
                <div className="icon-and-text">

                    <div className="single-detail">
                        <div>2131</div>
                        <div>雪松</div>
                    </div>

                    <div className="single-detail">
                        <div>2131</div>
                        <div>落叶</div>
                    </div>
                </div>
                <div className="icon-and-text">


                    <div className="single-detail">
                        <div>2131</div>
                        <div>银杏</div>
                    </div>
                    <div className="single-detail">
                        <div>2132</div>
                        <div>楠木</div>
                    </div>
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