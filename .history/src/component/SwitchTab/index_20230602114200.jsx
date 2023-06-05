import { useState } from 'react';
import './style.css';
import Tabselect from '../../assets/tab-select.png';
import TabUnselect from '../../assets/tab-unselect.png';
import ContentBox from '../ContentBox';
const SwitchTab = ({ title }) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (

        <div className="tab-container">
            <div className="tab-box">
                {title.map((item, index) => (
                    <div key={index} className='single-tab'
                        onClick={() => setTabIndex(index)}
                        style={{
                            fontWeight: index === tabIndex ? 'bold' : 'normal',
                            backgroundImage: index === tabIndex ? `url(${Tabselect})` : `url(${TabUnselect})`
                        }}
                    >{item}</div>))}
            </div>


        </div>
    )
};
export default SwitchTab;