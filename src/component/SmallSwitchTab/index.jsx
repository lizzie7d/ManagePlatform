import { useState } from 'react';
import './style.css';
import leftUnSelect from '../../assets/smallTab/left-unselect-tab.png';
import rightUnselect from '../../assets/smallTab/right-unselect-tab.png';
import leftSelect from '../../assets/smallTab/left-select-tab.png';
import rightSelect from '../../assets/smallTab/right-select-tab.png';
import DemoPie from '../Chart/pieChart';

// 图例+切换
const SmallSwitchTabAndPie = ({ tab, pieDataFirst, pieLegendDataFirst, pieDataSecond, pieLengendDataSecond }) => {
    const [selectIndex, setSelectIndex] = useState(0);
    return (
        <div>
            <div className="small-container">
                <div className='left-smallTab' onClick={() => { setSelectIndex(0) }}
                    style={{
                        color: selectIndex === 0 ? '#fff' : '#9EBBCB',
                        backgroundImage: selectIndex === 0 ? `url(${leftSelect})` : `url(${leftUnSelect})`
                    }}
                >{tab[0]}</div>
                <div className='right-smallTab'
                    style={{
                        color: selectIndex === 1 ? '#fff' : '#9EBBCB',
                        backgroundImage: selectIndex === 1 ? `url(${rightSelect})` : `url(${rightUnselect})`
                    }}
                    onClick={() => { setSelectIndex(1) }}>{tab[1]}</div>

            </div>
            <div className="graphic-content">
                {selectIndex === 0 && (<DemoPie
                    data={
                        pieDataFirst
                    }
                    lengendData={
                        pieLegendDataFirst
                    } />)}
                {selectIndex === 1 && (<DemoPie data={
                    pieDataSecond
                }
                    lengendData={
                        pieLengendDataSecond
                    } />)}

            </div>
        </div>

    )
}
export default SmallSwitchTabAndPie;