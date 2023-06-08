import ContentBox from '../../component/ContentBox';
import './style.css';
import overViewPic2 from '../../assets/overviewPic2.png';

import systemPic from '../../assets/systempic.png';
import MiddleBox from '../../component/MiddleBox';
const FaultPage = () => {
    return (
        <div>
            {/* <div className="content-middle">
                <MiddleBox />
            </div> */}
            <div className='system-container'>

                <div className="content-left">
                    <ContentBox
                        pic={systemPic}
                        infoFirstTab={[{ title: '厂家', count: "张某" }]}
                        infoSecondTab={[{ title: '进场时间', count: '2023/5/9' }]}
                        infoThirdTab={[{ title: '检疫信息', count: '良好' }]}
                        title={'植物原生信息'} content={
                            `酉阳位于福建德化县国宝乡中部略偏东北，与佛岭、上洋、祥云、内坂和厚德村毗邻，距离德化县城关 16 公里，距离泉州市区 140 公里（规划中的厦门-沙县高速从村边经过）。全村地势呈低山丘陵交错，土地总面积 9.7 平方公里，有 17 个村民小组，全村共有 483户 2144 人。`
                        } />


                </div>

                <div className="content-right">
                    {/* <ContentBox title={'基本信息'}
                        verticalInfo={[{ title: '面积', count: '30°C' }, { title: '湿度', count: '56%' }, {
                            title: 'PM2.5', count: '80'
                        }, { title: 'PM10', count: '120' }]}
                    /> */}


                </div>
            </div>




        </div>
    )
}
export default FaultPage;