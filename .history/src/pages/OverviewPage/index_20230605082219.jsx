import ContentBox from "../../component/ContentBox";

// 稻场概况
const CompanyManage = () => {
    return (
        <div>
            <ContentBox
                position={0}
                title={"基础信息"}
                verticalInfo={[title:'种植面积', count:'5400亩']}
            />
        </div>
    )
};
export default CompanyManage;
