import { Link } from 'react-router-dom';
import './style.css'
const Layout = () => {
    return (
        <div className="layout-bg">
            <div className="layout-flex">
                <div>
                    <div className="layout-left">
                        <div className="left-detail">
                            <Link to={"faultPage"}> 123 </Link>
                        </div>
                        <div className="left-title">
                            <Link to={"overview"}>稻场概况</Link>
                            <Link to={"moniringSystem"}>监测系统</Link>

                        </div>
                    </div>
                </div>
                <div className='layout-title'>酉阳云稻米孪生平台</div>
                <div className="layout-right">
                    <div className="left-detail">
                        123
                    </div>
                    <div className="left-title">
                        <Link to={"plantInfo"}>种植信息</Link>
                        <div>监测系统</div>

                    </div>
                </div>

            </div>
        </div >
    )
}
export default Layout;