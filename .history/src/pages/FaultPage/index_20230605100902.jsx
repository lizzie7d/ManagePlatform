import ContentBox from '../../component/ContentBox';
import './style.css';
import CompanyManagePic2 from '../../assets/CompanyManagePic2.png';

import systemPic from '../../assets/systempic.png';
const FaultPage = () => {
    return (
        <div className='system-container'>

            <div className="content-left">
                <ContentBox
                    pic={systemPic}
                    picText={[{ title: '花田乡', pic: CompanyManagePic2 }, { title: '南腰界镇', pic: CompanyManagePic2 }, { title: '涂市镇', pic: CompanyManagePic2 }, { title: '李溪镇', pic: CompanyManagePic2 }, { title: '铜鼓镇', pic: CompanyManagePic2 }]}

                    title={'导览'} content={'酉阳位于福建德化县国宝乡中部略偏东北，与佛岭、上洋、祥云、内坂和厚德村毗邻，距离德化县城关 16 公里，距离泉州市区 140 公里（规划中的厦门-沙县高速从村边经过）。全村地势呈低山丘陵交错，土地总面积 9.7 平方公里，有 17 个村民小组，全村共有 483户 2144 人。'} />

            </div>
            <div className="content-right">
                <ContentBox title={'稻米数据'}
                    verticalInfo={[{ title: '温度', count: '30°C' }, { title: '湿度', count: '56%' }, {
                        title: 'PM2.5', count: '80'
                    }, { title: 'PM10', count: '120' }]}
                />
            </div>



        </div>
    )
}
export default FaultPage;