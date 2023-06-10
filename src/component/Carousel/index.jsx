import company1 from '../../assets/carousel/company1.jpg';
import company2 from '../../assets/carousel/company2.jpg';
import company3 from '../../assets/carousel/company3.png';
import company4 from '../../assets/carousel/company4.jpg';
import './style.css';
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {
        const settings = {
            //详细的设置请查看官方API
            dots: true, //圆点显示（false隐藏）
            infinite: true, //无限的环绕内容
            autoplay: true, //自动播放，速度默认为（3000毫秒）
            speed: 500, //自动播放速度（毫秒）
            slidesToShow: 3, //在一帧中显示3张卡片
            slidesToScroll: 3 //一次滚动3张卡片
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>
                    <div>
                        <img src={company1} alt="" width="300" height="170" />
                    </div>


                </Slider>
            </div>
        );
    }
}
