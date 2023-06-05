import SwitchTab from '../../component/SwitchTab';
import './style.css';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className='system-container'>
            <SwitchTab title={['花田乡', '南腰界镇', '涂市镇', '李溪镇', '铜鼓镇',]} />
        </div>
    )
}
export default SystemPage;