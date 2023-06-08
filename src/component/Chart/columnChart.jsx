import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
    const data = [
        {
            type: '雪松',
            sales: 38,
        },
        {
            type: '落叶松',
            sales: 52,
        },
        {
            type: '香樟',
            sales: 61,
        },
        {
            type: '楠木',
            sales: 145,
        },
        {
            type: '银杏',
            sales: 48,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#000',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
            axisLabe: {
                show: true,
                textStyle: { color: '#000' }
            },

        },

        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '数量',
            },
        },
    };
    return <Column {...config} height={200} />;
};

export default DemoColumn;
