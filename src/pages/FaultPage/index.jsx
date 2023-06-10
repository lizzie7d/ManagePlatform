import ContentBox from '../../component/ContentBox';
import './style.css';
import systemPic from '../../assets/systempic.jpg';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';
import pic5 from '../../assets/pic5.jpg';
import MiddleBox from '../../component/MiddleBox';


const FaultPage = () => {
    return (
        <div>
            <div className="content-middle">
                <MiddleBox />
            </div>
            <div className='system-container'>
                <div className="content-left">
                    <ContentBox
                        top={'80px'}
                        left={'32px'}
                        pic={systemPic}
                        title={'项目介绍'}
                        content={
                            ` “酉阳贡米”有着悠久的历史，稻米脆酥油糯，滑而不腻，粒细体长、形状似梭、质白如玉、米色透明、香味回绕，自宋朝开始被朝廷定位“贡米”。而位于武陵山腹地的酉阳，水稻常年种植面积保持在26万亩左右。这里平均海拔800米，山地立体气候明显，四季分明、昼夜温差大，雨量充沛、无霜期长、日照充足，为打造绿色、有机水稻产业提供了优越的先决条件。`
                        } />
                    <ContentBox
                        top={'570px'}
                        left={'32px'}
                        title={'种植园导览'}
                        picText={[{ title: '涂市镇', pic: pic1 }, { title: '李溪镇', pic: pic2 }, { title: '铜鼓镇', pic: pic3 }, { title: '南腰界镇', pic: pic4 }, { title: '花田乡', pic: pic5 }]}
                    />
                </div>

                <div className="content-right">
                    <ContentBox title={'稻米数据'}
                        top={'80px'}
                        right={'32px'}
                        verticalInfo={[{ title: '总种植面积', count: '5500亩' }, { title: '覆盖农户', count: '2125户' }, {
                            title: '带动人均增收', count: '5000元'
                        }]}
                        verticalSecondInfo={[{ title: '脱贫户', count: '150' }, { title: '集体经济组织', count: '7' }, {
                            title: '主要种植区', count: '5'
                        }]}
                    />
                    <ContentBox title={'实施环境监测概况'}
                        top={'80px'}
                        right={'32px'}
                        verticalInfo={[{ title: '温度', count: '30' }, { title: '温度', count: '56' }, {
                            title: 'PM2.5', count: '80'
                        }, {
                            title: 'PM10', count: '120'
                        }]}
                        infoFirstTab={[{ title: '空间质量', count: "优" }, { title: '噪音', count: "50DB" }]}
                        infoSecondTab={[{ title: '风向', count: '东南' }, { title: '风速', count: '1.5m/s' }]}
                        infoThirdTab={[{ title: '紫外线', count: '1级' }, { title: '空气湿度', count: '56%' }]}
                    />
                    <ContentBox title={'气象监测'}
                        weather={1}


                    />

                </div>
            </div>




        </div>
    )
}
export default FaultPage;