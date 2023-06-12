import './style.css';
import defaultPic from '../../assets/defaultPic1.png';
import chanliang from '../../assets/chanliang.png';
import chanzhi from '../../assets/chanzhi.png';
import { useState } from 'react';

const MiddleBox = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='middle-flex'>
            <div
                className="middle-container"
            >
                <div className="icon-and-text">
                    <div className='single-detail' onClick={() => setIndex(0)} style={{ backgroundColor: index === 0 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>涂市镇钟岭村01</div>
                    <div className='single-detail' onClick={() => setIndex(1)} style={{ backgroundColor: index === 1 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>涂市镇大杉村01</div>
                    <div className='single-detail' onClick={() => setIndex(2)} style={{ backgroundColor: index === 2 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>铜鼓镇清泉村01</div>
                    <div className='single-detail' onClick={() => setIndex(3)} style={{ backgroundColor: index === 3 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }} >李溪镇毛家山村01</div>

                </div>
                <div className="icon-and-text">
                    <div className='single-detail' onClick={() => setIndex(4)} style={{ backgroundColor: index === 4 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>涂市镇钟岭村02</div>
                    <div className='single-detail' onClick={() => setIndex(5)} style={{ backgroundColor: index === 5 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }} >涂市镇大杉村02</div>
                    <div className='single-detail' onClick={() => setIndex(6)} style={{ backgroundColor: index === 6 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>铜鼓镇清泉村02</div>
                    <div className='single-detail' onClick={() => setIndex(7)} style={{ backgroundColor: index === 7 ? 'rgba(37, 121, 133, 1)' : 'rgba(31, 75, 85, 1)' }}>南腰界镇01</div>


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