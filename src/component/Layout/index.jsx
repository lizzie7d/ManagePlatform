import { Link } from 'react-router-dom';
import './style.css';
import titleSelect from '../../assets/title-selected.png';
import rightTitleSelect from '../../assets/right-title-selected.png';

import { useEffect, useState } from 'react';
import moment from 'moment/moment';

const Layout = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setDate(moment().format("YYYY-MM-DD HH:mm:ss").substring(0, 10));
            setTime(moment().format("YYYY-MM-DD HH:mm:ss").substring(10));
            let today = moment(new Date());
            console.log(time);
        }, 1000);
    })
    return (
        <div className="layout-bg">
            <div className="layout-flex">
                <div className="left-detail">
                    <div>晴天</div>
                    <div>{date}</div>
                    <div>{time}</div>

                </div>
                <div className='middle-title'>

                    <div className="left-title">
                        <Link
                            to={"faultPage"}
                            onClick={() => setTabIndex(0)}
                            style={{ backgroundImage: tabIndex === 0 ? `url(${titleSelect})` : 'none' }}
                        >稻场概况</Link>
                        <Link to={"moniringSystem"}
                            onClick={() => setTabIndex(1)}
                            style={{ backgroundImage: tabIndex === 1 ? `url(${titleSelect})` : 'none' }}

                        >监测系统</Link>
                    </div>
                    <div className='layout-title'>酉阳800云稻米认养</div>
                    <div className="left-title">
                        <Link to={"plantInfo"}
                            onClick={() => setTabIndex(2)}
                            style={{ backgroundImage: tabIndex === 2 ? `url(${rightTitleSelect})` : 'none' }}

                        >种植信息</Link>
                        <Link to={"overview"}
                            onClick={() => setTabIndex(3)}
                            style={{ backgroundImage: tabIndex === 3 ? `url(${rightTitleSelect})` : 'none' }}

                        >企业管理</Link>
                    </div>

                </div>
                <div className="left-detail" style={{ justifyContent: 'flex-end' }}>
                    <div>导览</div>
                    <div>人视</div>
                    <Link to={"/"}>退出</Link>

                </div>

            </div>
        </div >
    )
}
export default Layout;