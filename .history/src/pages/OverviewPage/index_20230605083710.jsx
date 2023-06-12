import ContentBox from "../../component/ContentBox";
import CompanyManagePic1 from '../../assets/CompanyManagePic1.png'
// 稻场概况
const CompanyManage = () => {
    return (
        <div>
            <ContentBox
                pic={CompanyManagePic1}
                position={0}
                title={"基础信息"}
                content={'酉阳土家族苗族自治县是重庆市辖县位于市境东南部,历史文化悠久,有2200多年建县史,曾是800年州府所在地,拥有国家级历史文化名镇龙潭古镇和重庆市历史文化名镇龚滩古镇、酉水河镇。'}
                verticalInfo={[{ title: '种植面积', count: '5400亩' }, { title: '种植作物', count: '水稻' }, {
                    title: '种植地区', count: '重庆市 酉阳县'
                }]}
            />
            <ContentBox
                position={1}
                title={'实施环境监测概况'}
                verticalInfo={[{ title: '温度', count: '30°C' }, { title: '湿度', count: '56%' }, {
                    title: 'PM2.5', count: '80'
                }, { title: 'PM10', count: '120' }]}
                infoFirstTab={[{ title: '空气质量', count: "优" }, { title: '空气质量', count: '50DB' }]}
                infoSecondTab={[{ title: '风向', count: '东南' }, { title: '空气质量', count: '1.5m/s' }]}
                infoThirdTab={[{ title: '紫外线', count: '1级' }, { title: '空气质量', count: '56%' }]}
            />
        </div>
    )
};
export default CompanyManage;
