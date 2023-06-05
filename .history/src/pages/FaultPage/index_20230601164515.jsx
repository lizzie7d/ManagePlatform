import ContentBox from '../../component/ContentBox';
import './style.css';
const FaultPage = () => {
    return (
        <div className='system-container'>

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
    )
}
export default FaultPage;