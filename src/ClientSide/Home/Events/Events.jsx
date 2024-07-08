// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Events = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='sectionGap pt-[140px]'>
            <div>
                <p className='memberSmall'>Events</p>
                <h2 className='memberTitle pb-[25px]'>Trending events</h2>
            </div>

            {/* ========= mobile slider ==== */}

            <div className="slider-container">
                <Slider {...settings}>
                    <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg")] bg-no-repeat bg-center bg-cover h-[504px] rounded-[10px]'>
                        <div className='px-[26px] pb-[25px] flex items-end h-full'>
                            <div className='bg-white px-[25px] py-[17px] rounded-[10px] '>
                                <h3 className='memberSliderTitle'>A non-profit organization</h3>
                                <div className='flex items-center justify-center text-center'>

                                    <IoLocationSharp className='text-[#7EA254]' />
                                    <p className='memberSliderSubtitle'>Contrary to popular belief, is not</p>
                                </div>
                                <div className='flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center'>
                                    <Link to="/event"><button className='memberHoverBtn'>Members</button></Link>
                                    <Link to="/NonEvents"><button className='nonMemberHoverBtn'>Non-Members</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg")] bg-no-repeat bg-center bg-cover h-[504px] rounded-[10px]'>
                        <div className='px-[26px] pb-[25px] flex items-end h-full'>
                            <div className='bg-white px-[25px] py-[17px] rounded-[10px] '>
                                <h3 className='memberSliderTitle'>A non-profit organization</h3>
                                <div className='flex items-center justify-center text-center'>

                                    <IoLocationSharp className='text-[#7EA254]' />
                                    <p className='memberSliderSubtitle'>Contrary to popular belief, is not</p>
                                </div>
                                <div className='flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center'>
                                    <Link to="/event"><button className='memberHoverBtn'>Members</button></Link>
                                    <Link to="/NonEvents"><button className='nonMemberHoverBtn'>Non-Members</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg")] bg-no-repeat bg-center bg-cover h-[504px] rounded-[10px]'>
                        <div className='px-[26px] pb-[25px] flex items-end h-full'>
                            <div className='bg-white px-[25px] py-[17px] rounded-[10px] '>
                                <h3 className='memberSliderTitle'>A non-profit organization</h3>
                                <div className='flex items-center justify-center text-center'>

                                    <IoLocationSharp className='text-[#7EA254]' />
                                    <p className='memberSliderSubtitle'>Contrary to popular belief, is not</p>
                                </div>
                                <div className='flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center'>
                                    <Link to="/event"><button className='memberHoverBtn'>Members</button></Link>
                                    <Link to="/NonEvents"><button className='nonMemberHoverBtn'>Non-Members</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Events;