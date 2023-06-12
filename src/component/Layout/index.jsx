import { Link, useLocation, useParams } from 'react-router-dom';
import './style.css';
import checkSystemSelected from '../../assets/checkSystem-selected.png';
import checkSystem from '../../assets/checkSystem.png';
import companyManage from '../../assets/company-manage.png';
import companyManageSelected from '../../assets/company-manage-selected.png';
import daochang from '../../assets/daochang.png';
import daochangSelected from '../../assets/daoChange-select.png';
import info from '../../assets/info.png';
import infoSelected from '../../assets/info-selected.png';


import { useEffect, useState } from 'react';
import moment from 'moment/moment';

const Layout = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const [tabIndex, setTabIndex] = useState(0);
    const ul = useLocation();
    useEffect(() => {
        setTimeout(() => {
            setDate(moment().format("YYYY-MM-DD HH:mm:ss").substring(0, 10));
            setTime(moment().format("YYYY-MM-DD HH:mm:ss").substring(10));
            console.log(ul);
        }, 1000);
    })
    return (
        <div>
            <div className="layout-bg" style={{ display: ul.pathname === '/' || ul.pathname === '/login' ? 'none' : 'block' }}>
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
                                style={{ backgroundImage: tabIndex === 0 ? `url(${daochangSelected})` : `url(${daochang})` }}
                            ></Link>
                            <Link to={"moniringSystem"}
                                onClick={() => setTabIndex(1)}
                                style={{ backgroundImage: tabIndex === 1 ? `url(${checkSystemSelected})` : `url(${checkSystem})` }}


                            ></Link>
                        </div>
                        <div className='layout-title'>酉阳800云稻米认养</div>
                        <div className="left-title">
                            <Link to={"plantInfo"}
                                onClick={() => setTabIndex(2)}
                                style={{ backgroundImage: tabIndex === 2 ? `url(${infoSelected})` : `url(${info})` }}

                            ></Link>
                            <Link to={"companyManage"}
                                onClick={() => setTabIndex(3)}
                                style={{ backgroundImage: tabIndex === 3 ? `url(${companyManageSelected})` : `url(${companyManage})` }}

                            ></Link>
                        </div>

                    </div>
                    <div className="left-detail" style={{ justifyContent: 'flex-end' }}>
                        <div>导览</div>
                        <div>人视</div>
                        <Link to={"/"}>退出</Link>

                    </div>

                </div>
            </div >
        </div>

    )
}
export default Layout;