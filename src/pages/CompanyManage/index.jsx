import ContentBox from "../../component/ContentBox";
import pic1 from '../../assets/companyManage/pic1.jpg';
import pic2 from '../../assets/companyManage/pic2.jpg';
import pic3 from '../../assets/companyManage/pic3.jpg';
import pic4 from '../../assets/companyManage/pic4.jpg';

import './style.css'
import MultipleItems from "../../component/Carousel";
import { Alert } from "antd";
import news1 from '../../assets/news/news1.jpg';


const CompanyManage = () => {

    return (
        <div className="overview-container">
            <div className="content-left">
                <ContentBox
                    news={[
                        { title: '酉阳800', img: news1, time: '2023-06-02', content: '市农科院专家来酉指导水稻“药肥双控”' },
                        { title: '酉阳800', img: news1, time: '2023-05-30', content: '“酉阳茶油”获评中国木本油料行业影响力品牌' },
                        { title: '新时代新酉阳新作为', img: news1, time: '2023-05-25', content: '县农业农村委主任彭汀：以“酉阳800”引领农业系统重塑' },
                        { title: '乡村振兴看百村', img: news1, time: '2023-06-02', content: '丁市镇中坝村：用好千氹梯田，美化村寨庭院，探索强村富民新路子' },


                    ]}
                    title={'合作单位'}
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
export default CompanyManage;
