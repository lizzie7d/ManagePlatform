import ContentBox from '../../component/ContentBox';
import SwitchTab from '../../component/SwitchTab';
import './style.css';
import systemPic1 from '../../assets/systemPic1.jpg';
import MiddleBox from '../../component/MiddleBox';
import { Content } from 'antd/es/layout/layout';
const SystemPage = () => {

    //监测系统页面

    return (
        <div className=''>

            <SwitchTab title={["涂市镇", "李溪镇", "铜鼓镇", "南腰界镇", '花田乡']} />
            <div className="system-container">
                <div className="content-left">
                    <ContentBox

                        title={'设备总量'}
                        infoFirstTab={[{ title: '设备数量', count: "80" }, { title: '运行状态', count: '正常' }]}
                        infoSecondTab={[{ title: '设备类型', count: '1' }]}
                        selectFirst={[{ title: '设备状态', options: ['开启', '关闭'] }, { title: '控制类型', options: ['自动', '手动'] }]}
                        selectSecond={[{ title: '运行状态', options: ["正常", "故障", '维修'] }]}
                        tableListName={["设备编号", "运行状态", '设备开关', '位置']}
                        fengxian={1}
                        tableList={[
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },
                            { fistColumn: 'VTSS001', secondColumn: '正常', thirdColumn: '开启', fourthColumn: '定位' },


                        ]

                        }
                    />
                </div>
                <div className="content-right">
                    <ContentBox
                        title='功能监测系统'
                        iconAndTextFirstColumn={[{ title: '摄像监测', icon: 'ads' }, { title: '苗情监测', icon: 'ads' }]}
                        iconAndTextSecondColumn={[{ title: '土壤监测', icon: 'ads' }, { title: '水质监测', icon: 'ads' }]}
                    />
                    <ContentBox
                        title='实景融合点位'
                        pic={systemPic1}
                    />
                    <ContentBox
                        title='风险预警提示'
                        tableListName={["事件", "设备标号", '负责人电话', '状态']}
                        fengxian={1}
                        tableList={[
                            { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' },
                            { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' },
                            { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' },
                            { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' },

                            { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' }, { fistColumn: '时间', secondColumn: 'ASDCSD', thirdColumn: '184545478752', fourthColumn: '已处理' },

                        ]

                        }
                    />

                </div>
            </div>




        </div>
    )
}
export default SystemPage;