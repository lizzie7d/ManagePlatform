import ContentBox from '../../component/ContentBox';
import SwitchTab from '../../component/SwitchTab';
import './style.css';
import systemPic from '../../assets/systempic.jpg';
import MiddleBox from '../../component/MiddleBox';
import { Content } from 'antd/es/layout/layout';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className=''>
            <div className="content-middle">
                <MiddleBox />
            </div>
            <div className="system-container">
                <div className="content-left">
                    <ContentBox
                        title={'现场环境信息'}
                        verticalInfo={[{ title: '温度', count: '30°C' }, { title: '湿度', count: '56%' }, {
                            title: 'PM2.5', count: '80'
                        }, { title: 'PM10', count: '120' }]}
                        infoFirstTab={[{ title: '空气质量', count: "优" }, { title: '空气质量', count: '50DB' }]}
                        infoSecondTab={[{ title: '风向', count: '东南' }, { title: '空气质量', count: '1.5m/s' }]}
                        infoThirdTab={[{ title: '紫外线', count: '1级' }, { title: '空气质量', count: '56%' }]}
                    />
                    <ContentBox title={'维护人员信息'}
                        verticalInfo={[{ title: '温度', count: '30°C' }, { title: '湿度', count: '56%' }, {
                            title: 'PM2.5', count: '80'
                        }, { title: 'PM10', count: '120' }]}
                    />
                    <ContentBox
                        // pic={overViewPic1}
                        lineChart={true}
                        title={"苗木库 "}

                    />
                </div>
                <div className="content-right">
                    <ContentBox
                        title='苗木维护时间'
                        infoFirstTab={[{ title: '', count: '区域A' }, { title: '', count: '区域B' }, { title: '', count: '区域C' }]}
                    // infoSecondTab={[{ title: '', count: '区域C' }]}
                    />
                    <ContentBox
                        title='实景监测框及导航'
                        pic={systemPic}
                    />
                    <ContentBox
                        title='苗木维护完成度'

                        finished={true}
                    />
                </div>
            </div>




        </div>
    )
}
export default SystemPage;