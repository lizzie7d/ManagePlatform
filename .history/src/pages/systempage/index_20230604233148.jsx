import ContentBox from '../../component/ContentBox';
import SwitchTab from '../../component/SwitchTab';
import './style.css';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className='system-container'>
            <SwitchTab title={['花田乡', '南腰界镇', '涂市镇', '李溪镇', '铜鼓镇',]} />
            <ContentBox
                title='设备总览'
                infoFirstTab={[{ title: '设备数量', count: 120 }, { title: '运行状态', count: '正常' }]}
                infoSecondTab={[{ title: '设备类型', count: 120 }]}
                selectFirst={[{ title: '设备状态', options: ['开启', '关闭'] }, { title: '控制类型', options: ['自动', '手动'] }]}
                selectSecond={[{ title: '运行状态', options: ['开启', '关闭'] }, { title: '所在区域', options: ['天花村', '手动'] }]}
                tableListName={['设备编号', '运行状态', '设备开关', '位置']}
                tableList={['E001', '正常', '开启']}
            />
            <ContentBox
                title='功能监测系统'

            />

        </div>
    )
}
export default SystemPage;