import ContentBox from "../../component/ContentBox";
import SwitchTab from "../../component/SwitchTab";
import './style.css'
const PlantInfo = () => {
    return (
        <div>
            <SwitchTab title={["涂市镇", "李溪镇", "铜鼓镇", "南腰界镇", '花田乡']} />
            <div className="plantinfo-contanier">

                <div className="content-left">
                    <ContentBox
                        title={"耕地概况"}
                        pieChart={1}
                    />
                </div>
                <div className="content-right">
                    <ContentBox
                        title={"种植管理"}
                        selectFirst={[{ title: '区域', options: ["涂市镇", "李溪镇", "铜鼓镇", "南腰界镇", '花田乡'] }, { title: '权属', options: ['集体经济', '散户'] }]}
                        selectSecond={[{ title: '种植', options: ["已种植", "未种植"] }, { title: '认养', options: ['已认养', '未认养'] }]}
                        tableListName={["耕地编号", "权属", '种植', '认养', '负责人']}
                        tableList={[
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },
                            { fistColumn: 'E001', secondColumn: '集体经济', thirdColumn: '已种植', fourthColumn: '已认养', fifthColumn: '李明' },

                        ]

                        }

                    />
                </div>

            </div>
        </div>

    )
}
export default PlantInfo;