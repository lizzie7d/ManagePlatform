/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';

import DemoPie from '../Chart/pieChart';
import DemoColumn from '../Chart/columnChart';
import DemoGauge from '../Chart/finishedChart';
import SmallSwitchTabAndPie from '../SmallSwitchTab';
import refresh from '../../assets/refresh.png';
import SmallSwitchTabAndtb from '../smallSwitchTabAndTable';
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
    verticalSecondInfo,
    selectFirst,
    selectSecond,
    tableListName,
    tableList,
    pic,
    lineChart,
    picText,
    pieChart,
    finished,
    top,
    left,
    right,
    SmallSwitchTab
}) => {
    return (
        <div
            className="box-container" style={{ width: SmallSwitchTab ? '408px' : '316px' }}>
            <div className="box-title">
                <img src={titleImg} />
                {title}
            </div>
            {verticalInfo && (
                <div className='link-basic'>
                    <div className='vertical-info'>
                        {verticalInfo.map((item, index) => (
                            <div className="eachInfo" key={index}>
                                <div className='vertical-count'>{item.count}</div>

                                <div className='link-bottom'></div>
                                <div>{item.title}</div>
                            </div>))}

                    </div>

                </div>
            )}
            {verticalSecondInfo && (
                <div className='link-basic'>
                    <div className='vertical-info'>
                        {verticalSecondInfo.map((item, index) => (
                            <div className="eachInfo" key={index}>
                                <div className='vertical-count'>{item.count}</div>
                                <div className='link-bottom'></div>
                                <div>{item.title}</div>
                            </div>))}

                    </div>

                </div>
            )}
            {SmallSwitchTab &&
                (
                    <SmallSwitchTabAndtb
                        tab={['全部企业', '临近交付企业']}

                    />

                )
            }
            {/* <SmallSwitchTabAndtb
                tab={['全部企业', '临近交付企业']}

            /> */}
            {content && (<div className="box-content">
                {content}
            </div>)}

            {pic &&
                <div className="pic-content">
                    <img src={pic} />

                </div>
            }
            {picText && (<div className='picText-content'>
                {picText.map((item, index) =>
                (<div className="pic-text" key={index}>
                    <img src={item.pic} />
                    <div>{item.title}</div>
                </div>))}
            </div>)}
            {lineChart &&
                <div className="graphic-content">
                    <DemoColumn />

                </div>
            }
            {finished &&
                <div className="graphic-content">
                    <DemoGauge />

                </div>
            }

            {pieChart &&
                <div>
                    <SmallSwitchTabAndPie
                        tab={['种植区', '权属']}
                        pieDataFirst={[
                            { value: 2000, name: '涂市镇' },
                            { value: 1500, name: '李溪镇' },
                            { value: 1100, name: '铜鼓镇' },
                            { value: 600, name: '南腰界镇' },
                            { value: 300, name: '花田乡' }
                        ]}
                        pieLegendDataFirst={[
                            '涂市镇', '李溪镇', '铜鼓镇', '南腰界镇', '花田乡'
                        ]}
                        pieDataSecond={[
                            { value: 950, name: '集体经济' },
                            { value: 50, name: '散户' },
                        ]}
                        pieLengendDataSecond={[
                            '集体经济', '散户'
                        ]}

                    />
                    <SmallSwitchTabAndPie
                        tab={['种植状态', '认养状态']}
                        pieDataFirst={[
                            { value: 900, name: '已种植' },
                            { value: 100, name: '未种植' },
                        ]}
                        pieLegendDataFirst={[
                            '已种植', '未种植'
                        ]}
                        pieDataSecond={[
                            { value: 700, name: '已认养' },
                            { value: 700, name: '未认养' },
                        ]}
                        pieLengendDataSecond={[
                            '已认养', '未认养'
                        ]}

                    />
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
                <div style={{ height: infoSecondTab ? 'auto' : 100 }}>
                    <div className='info-tab'>
                        {infoFirstTab.map((item, index) => (
                            <div key={index}
                                className='single-info'>
                                <div className="info-title">
                                    {item.title}
                                </div>
                                <div className='link-right'></div>

                                <div className="info-num">
                                    {item.count}
                                </div>
                            </div>))}
                    </div>
                    <div className='info-tab'>
                        {infoSecondTab && infoSecondTab.map((item, index) => (
                            <div key={index}
                                className='single-info'>
                                <div className="info-title">
                                    {item.title}
                                </div>
                                <div className='link-right'></div>

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
                                <div className='link-right'></div>
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
                            <div className="select-part" key={index} style={{ paddingTop: 8 }}>
                                <span className="select-title">{item.title}</span>
                                <select className='select-content' name={item.options[0]}
                                    // onChange={setSelectedOption}
                                    options={item.options}
                                >
                                    {item.options.map((subItem, subIndex) => (<option
                                        value={item.options}
                                    >{subItem}</option>))}
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className='select-group'>
                        {selectSecond && selectSecond.map((item, index) => (
                            <div className="select-part" key={index}>
                                <span className="select-title">{item.title}</span>
                                <select className='select-content' name={item.options[0]}
                                    // onChange={setSelectedOption}
                                    options={item.options}
                                >
                                    {item.options.map((subItem, subIndex) => (<option
                                        value={item.options}
                                    >{subItem}</option>))}
                                </select>
                            </div>
                        ))}
                    </div>

                    {/* 搜索按钮 */}
                    <div className="select-search">
                        <div className="search-button">
                            确认
                        </div>
                        <div className="link-right"></div>
                        <div className='refresh-btn'>刷新
                            <img src={refresh} style={{ marginLeft: 2 }} />
                        </div>
                    </div>
                </div>

            )}
            {tableListName && (
                <div className="table-list">
                    <div className='table-title'>
                        {tableListName.map((item, index) => (
                            <div key={index} className='list-name'>{item}</div>))}
                    </div>
                    <div className='table-height' style={{ height: SmallSwitchTab ? '324px' : '514px' }}>
                        {tableList && tableList.map((item, index) => (
                            <div className="table-info">
                                <div key={index} className='table-list-info'>{item.fistColumn}</div>
                                <div key={index} className='table-list-info'>{item.secondColumn}</div>
                                <div key={index} className='table-list-info'>{item.thirdColumn}</div>
                                <div key={index} className='table-list-info'>{item.fourthColumn}</div>
                                {item.fifthColumn && (<div key={index} className='table-list-info'>{item.fifthColumn}</div>)}
                            </div>
                            // <div className='table-info'>


                            // </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
};
export default ContentBox;