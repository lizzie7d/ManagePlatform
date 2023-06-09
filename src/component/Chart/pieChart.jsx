import React, { Component } from 'react'
import { Card } from 'antd'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

const PieA = ({ data, lengendData }) => {
    let option = {
        title: {
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            //提示框浮层内容格式器，支持字符串模板和回调函数形式。
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            orient: 'horizontal',
            bottom: 0,
            right: 0,
            x: 'center',
            data: lengendData,
            itemHeight: 5,
            itemWidth: 8,
            textStyle: {
                fontSize: '12px',
                color: '#fff'
            }
        },

        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '80%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data,
            }
        ]
    }

    return (
        <Card.Grid className="pie_a">
            <ReactEcharts option={option} />
        </Card.Grid>
    )

}
export default PieA;