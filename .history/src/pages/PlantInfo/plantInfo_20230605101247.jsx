import ContentBox from "../../component/ContentBox";
import './style.css'
const PlantInfo = () => {
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    return (
        <div className="plantinfo-contanier">
            <div className="content-left">
                <ContentBox
                    title={"耕地概况"}
                    pieChart={data}
                />
            </div>
            <div className="content-right">
                <ContentBox
                    title={"种植管理"}
                // pieChart={data}
                />
            </div>

        </div>
    )
}
export default PlantInfo;