import ContentBox from '../../component/ContentBox';
import './style.css';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className='system-container'>
            <ContentBox title={'导览'} content={'酉阳位于福建德化县国宝乡中部略偏东北，与佛岭、上洋、祥云、内坂和厚德村毗邻，距离德化县城关 16 公里，距离泉州市区 140 公里（规划中的厦门-沙县高速从村边经过）。全村地势呈低山丘陵交错，土地总面积 9.7 平方公里，有 17 个村民小组，全村共有 483户 2144 人。'} />
            <ContentBox title={'稻米数据'} />
        </div>
    )
}
export default SystemPage;