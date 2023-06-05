/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';
import Select from 'react-select';
import DemoLine from '../Chart/lineChart';
import PieChart from '@ant-design/plots/es/components/pie';
import DemoPie from '../Chart/pieChart';
// title: 名称
// content: 是否有解释内容
// arrFirstRow: 数组 每三个一组 => 属性有title/num/symbol(非必有)
const ContentBox = ({
    title,
    content,
    arrFirstRow,
    arrSecondRow,
    infoFirstTab,
    infoSecondTab,
    infoThirdTab,
    verticalInfo,
    selectFirst,
    selectSecond,
    tableListName,
    tableList,
    pic,
    lineChart,
    picText,
    pieChart
}) => {
    return (
        <div
            className="box-container">
            <div className="box-title">
                <img src={titleImg} />
                {title}
            </div>
            {verticalInfo && (<div className='vertical-info'>
                {verticalInfo.map((item, index) => (
                    <div className="eachInfo" key={index}>
                        <div>{item.count}</div>
                        <div>{item.title}</div>

                    </div>))}
            </div>)}
            {content && (<div className="box-content">
                {content}
            </div>)}
            {picText && (<div className='picText-content'>
                {picText.map((item, index) =>
                (<div className="pic-text" key={index}>
                    <img src={item.pic} />
                    <div>{item.title}</div>
                </div>))}
            </div>)}
            {pic &&
                <div className="pic-content">
                    <img src={pic} />

                </div>
            }

            {lineChart &&
                <div className="graphic-content">
                    <DemoLine data={lineChart} />

                </div>
            }
            {pieChart &&
                <div className="graphic-content">
                    <DemoPie />

                </div>
            }
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
            {infoFirstTab && (
                <div>
                    <div className='info-tab'>
                        {infoFirstTab.map((item, index) => (
                            <div key={index}
                                className='single-info'>
                                <div className="info-title">
                                    {item.title}
                                </div>
                                <div className="info-num">
                                    {item.count}
                                </div>
                            </div>))}
                    </div>
                    <div className='info-tab'>
                        {infoSecondTab.map((item, index) => (
                            <div key={index}
                                className='single-info'>
                                <div className="info-title">
                                    {item.title}
                                </div>
                                <div className="info-num">
                                    {item.count}
                                </div>

                            </div>))}
                    </div>
                    <div className='info-tab'>
                        {infoThirdTab && infoThirdTab.map((item, index) => (
                            <div key={index}
                                className='single-info'>
                                <div className="info-title">
                                    {item.title}
                                </div>
                                <div className="info-num">
                                    {item.count}
                                </div>

                            </div>))}
                    </div>
                </div>

            )}
            {selectFirst && (
                <div className='select-display'>
                    <div className='select-group'>
                        {selectFirst.map((item, index) => (
                            <div className="select-part" key={index}>
                                <span className="select-title">{item.title}</span>
                                <Select className='select-content'
                                    defaultValue={item.options[0]}
                                    // onChange={setSelectedOption}
                                    options={item.options}
                                />
                            </div>

                        ))}

                    </div>
                    <div className='select-group'>
                        {selectSecond.map((item, index) => (
                            <div className="select-part" key={index}>
                                <span className="select-title">{item.title}</span>
                                <Select className='select-content'
                                    defaultValue={item.options[0]}
                                    // onChange={setSelectedOption}
                                    options={item.options}
                                />
                            </div>

                        ))}

                    </div>

                    {/* 搜索按钮 */}
                    <div className="select-search">
                        <div className="search-button">
                            开始搜索
                        </div>
                        <div>刷新</div>
                    </div>
                </div>

            )}
            {tableListName && (
                <div className="table-list">
                    <div className='table-title'>
                        {tableListName.map((item, index) => (
                            <div key={index} className='list-name'>{item}</div>))}
                    </div>
                    <div className="table-title">
                        {tableList.map((item, index) => (
                            <div>
                                <div key={index} className='list-name'>{item}</div>
                            </div>
                        ))}
                        <div className='list-focus-buttom'>定位</div>
                    </div>
                </div>
            )}

        </div>
    )
};
export default ContentBox;