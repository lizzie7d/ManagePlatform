import ContentBox from "../../component/ContentBox";

// 稻场概况
const Overview = () => {
    return (
        <div>
            <ContentBox
                position={0}
                title={"基础信息"}
                verticalInfo={[{ title: '种植面积', count: '5400亩' }, { title: '种植作物', count: '水稻' }, {
                    title: '种植地区', count: '重庆市 酉阳县'
                }]}
            />
        </div>
    )
};
export default Overview;
