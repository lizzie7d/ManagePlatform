import ContentBox from "../../component/ContentBox";
import pic1 from '../../assets/companyManage/pic1.jpg';
import pic2 from '../../assets/companyManage/pic2.jpg';
import pic3 from '../../assets/companyManage/pic3.jpg';
import pic4 from '../../assets/companyManage/pic4.jpg';

import './style.css'
import MultipleItems from "../../component/Carousel";
import { Alert } from "antd";
// 稻场概况
const Overview = () => {

    return (
        <div className="overView-container">
            <Alert
                banner
                message={
                    <span>
                        I can be a React component, multiple React components, or just some text.
                    </span>
                }
            />
            <div className="content-left">
                <ContentBox

                    title={'合作单位'}
                    picText={[{ title: '涂市镇', pic: pic1 }, { title: '铜鼓镇', pic: pic2 }, { title: '李溪镇', pic: pic3 }, { title: '花田乡', pic: pic4 }]}
                />

            </div>
            <div className="content-right">
                <ContentBox
                    title={'企业认养信息'}
                    SmallSwitchTab={true}
                    tableListName={["企业名称", "认养面积", '认养周期', '交付时间']}
                    tableList={[
                        { fistColumn: '中国联合网络通信集团有限公司', secondColumn: '100m', thirdColumn: '24周', fourthColumn: '2023/09/03' },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },
                        { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', },

                    ]

                    }
                />
                <ContentBox

                    title={'主要示范区'}
                    picText={[{ title: '涂市镇', pic: pic1 }, { title: '铜鼓镇', pic: pic2 }, { title: '李溪镇', pic: pic3 }, { title: '花田乡', pic: pic4 }]}
                />
            </div>

        </div>
    )
};
export default Overview;
