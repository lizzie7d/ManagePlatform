/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import titleImg from '../../assets/title-pic.png';
import Select from 'react-select';
import { useState } from 'react';
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
    selectFirst,
    selectSecond,
}) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];
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
                </div>

            )}
            <div className='select-display'>
                {selectFirst.map((item, index) => (
                    <div className="select-part">
                        <div className="select-title">{item.title}</div>
                        <Select className='select-content'
                            defaultValue={item.options[0]}
                            // onChange={setSelectedOption}
                            options={item.options}
                        />

                    </div>

                ))}
                {selectSecond.map((item, index) => (
                    <div className="select-part">
                        <div className="select-title">{item.title}</div>
                        <Select className='select-content'
                            defaultValue={item.options[0]}
                            // onChange={setSelectedOption}
                            options={item.options}
                        />

                    </div>

                ))}
            </div>

        </div>
    )
};
export default ContentBox;