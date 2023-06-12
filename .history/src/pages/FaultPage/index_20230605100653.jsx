import ContentBox from '../../component/ContentBox';
import './style.css';
import systemPic from '../../assets/systempic.png';
const FaultPage = () => {
    return (
        <div className='system-container'>

            <div className="content-left">
                <ContentBox
                    pic={systemPic}
                    title={'导览'} content={'酉阳位于福建德化县国宝乡中部略偏东北，与佛岭、上洋、祥云、内坂和厚德村毗邻，距离德化县城关 16 公里，距离泉州市区 140 公里（规划中的厦门-沙县高速从村边经过）。全村地势呈低山丘陵交错，土地总面积 9.7 平方公里，有 17 个村民小组，全村共有 483户 2144 人。'} />
                picText={[{ title: '花田乡', pic: CompanyManagePic2 }, { title: '南腰界镇', pic: CompanyManagePic2 }, { title: '涂市镇', pic: CompanyManagePic2 }, { title: '李溪镇', pic: CompanyManagePic2 }, { title: '铜鼓镇', pic: CompanyManagePic2 }]}

            </div>
            <div className="content-right">
                <ContentBox title={'稻米数据'}
                    arrFirstRow={[
                        { title: '总种植面积', num: '9.7' },
                        { title: '种植品种', num: '9.7' },
                        { title: '集体经济组织', num: '9.7' },
                    ]}
                    arrSecondRow={[
                        { title: '参加村民户数', num: '9.7' },
                        { title: '参加村民数量', num: '9.7' },
                        { title: '主要种植区', num: '9.7' },
                    ]}
                />
            </div>



        </div>
    )
}
export default FaultPage;