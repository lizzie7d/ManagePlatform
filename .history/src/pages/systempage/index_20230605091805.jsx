import ContentBox from '../../component/ContentBox';
import SwitchTab from '../../component/SwitchTab';
import './style.css';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className=''>
            <SwitchTab title={['花田乡', '南腰界镇', '涂市镇', '李溪镇', '铜鼓镇',]} />
            <div className="content-left">
                <ContentBox
                    title='设备总览'
                    infoFirstTab={[{ title: '设备数量', count: 120 }, { title: '运行状态', count: '正常' }]}
                    infoSecondTab={[{ title: '设备类型', count: 120 }]}
                    selectFirst={[{ title: '设备状态', options: ['开启', '关闭'] }, { title: '控制类型', options: ['自动', '手动'] }]}
                    selectSecond={[{ title: '运行状态', options: ['开启', '关闭'] }, { title: '所在区域', options: ['天花村', '手动'] }]}
                    tableListName={['设备编号', '运行状态', '设备开关', '位置']}
                    tableList={['E001', '正常', '开启']}
                />
            </div>
            <div className="content-right">
                <ContentBox
                    title='功能监测系统'
                    infoFirstTab={[{ title: '', count: '摄像监测' }, { title: '', count: '苗情监测' }]}
                    infoSecondTab={[{ title: '', count: '土壤监测' }, { title: '', count: '水质监测' }]}
                    infoThirdTab={[{ title: '', count: '虫害监测' }]}
                />
                <ContentBox
                    title='实景监测框及导航'
                    infoFirstTab={[{ title: '', count: '摄像监测' }, { title: '', count: '苗情监测' }]}
                    infoSecondTab={[{ title: '', count: '土壤监测' }, { title: '', count: '水质监测' }]}
                    infoThirdTab={[{ title: '', count: '虫害监测' }]}
                />
            </div>



        </div>
    )
}
export default SystemPage;