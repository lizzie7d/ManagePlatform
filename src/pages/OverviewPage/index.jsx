import ContentBox from "../../component/ContentBox";
import overViewPic2 from '../../assets/overviewPic2.png';

import './style.css'
// 稻场概况
const Overview = () => {

    return (
        <div className="overView-container">
            <div className="content-left">



            </div>
            <div className="content-right">
                <ContentBox
                    title={'实施环境监测概况'}
                    verticalInfo={[{ title: '温度', count: '30°C' }, { title: '湿度', count: '56%' }, {
                        title: 'PM2.5', count: '80'
                    }, { title: 'PM10', count: '120' }]}
                    infoFirstTab={[{ title: '空气质量', count: "优" }, { title: '空气质量', count: '50DB' }]}
                    infoSecondTab={[{ title: '风向', count: '东南' }, { title: '空气质量', count: '1.5m/s' }]}
                    infoThirdTab={[{ title: '紫外线', count: '1级' }, { title: '空气质量', count: '56%' }]}
                />
                <ContentBox

                    title={'水稻种植'}
                    infoFirstTab={[{ title: '修建时间', count: "2023/5/9" }]}
                    infoSecondTab={[{ title: '驱虫时间', count: '2023/5/10' }]}
                    infoThirdTab={[{ title: '健康程度', count: '完美' }]}
                />
            </div>

        </div>
    )
};
export default Overview;
