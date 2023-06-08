import { Link } from 'react-router-dom';
import './style.css';
import Tabselect from '../../assets/tab-select.png';
import Tabunselect from '../../assets/tab-unselect.png';

import { useState } from 'react';

const Layout = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="layout-bg">
            <div className="layout-flex">
                <div className="left-detail">
                    {/* <Link to={"faultPage"}> 123 </Link> */}
                </div>
                <div className='middle-title'>
                    <div className="left-title">
                        <Link to={"moniringSystem"}
                            onClick={() => setTabIndex(1)}

                            style={{
                                fontWeight: 'bold',
                                backgroundImage: tabIndex === tabIndex ? `url(${Tabselect})` : `url(${Tabunselect})`
                            }}>驾驶舱</Link>

                        <Link to={"overview"}
                            tabIndex={2}
                            onClick={() => setTabIndex(2)}

                            style={{
                                fontWeight: 'bold',
                                // backgroundImage: `url(${Tabselect})`
                            }}>过程维护信息</Link>
                    </div>
                    <div className='layout-title'>绿化管理综合平台</div>
                    <div className="left-title">
                        <Link to={"faultPage"}
                            tabIndex={3}
                            onClick={() => setTabIndex(3)}

                            style={{
                                fontWeight: 'bold',
                                // backgroundImage: `url(${Tabselect})`
                            }}>单植物原生信息</Link>

                        <Link to={"yunwei"}
                            tabIndex={4}
                            onClick={() => setTabIndex(4)}

                            style={{
                                fontWeight: 'bold',
                                // backgroundImage: `url(${Tabselect})`
                            }}>运维管理</Link>
                    </div>

                </div>
                <div className="left-detail">

                </div>


            </div>
        </div >
    )
}
export default Layout;