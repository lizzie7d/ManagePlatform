import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const DemoLine = (data) => {
    //   const [data, setData] = useState([]);



    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        yAxis: {
            label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    };

    return <Line {...config} />;
};

export default DemoLine;
