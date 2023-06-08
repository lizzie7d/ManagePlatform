import ContentBox from "../../component/ContentBox"
import overViewPic1 from '../../assets/overviewPic1.png';

const Yunwei = () => {
    return (
        <div style={{ padding: 16 }}> <div className="content-left">
            <ContentBox
                pic={overViewPic1}
                title={"基础信息"}
                content={'酉阳土家族苗族自治县是重庆市辖县位于市境东南部,历史文化悠久,有2200多年建县史,曾是800年州府所在地,拥有国家级历史文化名镇龙潭古镇和重庆市历史文化名镇龚滩古镇、酉水河镇。'}
                verticalInfo={[{ title: '场地面积', count: '5400亩' }, { title: '建筑面积', count: '500平方米' }, {
                    title: '绿化地区', count: '540亩'
                }
                ]}
            />
        </div></div>

    )
}
export default Yunwei;