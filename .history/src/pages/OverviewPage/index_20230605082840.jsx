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
        </div>
    )
};
export default CompanyManage;
