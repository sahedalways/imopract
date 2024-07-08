// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };

    return (
        <div className='sectionGap'>
            <p className='tesSamlll'>Testimonials</p>
            <h3 className='tesTitle'>A visual journey through our gallery</h3>


            <Slider {...settings}>
                <div className='border border-[#7EA254] rounded-[20px] p-[30px] mb-[20px]'>
                    <p className='tesSlidePara'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 45 BC, making.</p>
                    <div className='flex justify-between items-center pt-[45px]'>
                        <div>
                            <h4 className='tesSlideTitle'>Aubrey Logan</h4>
                            <p>Manager</p>
                        </div>
                        <div className='h-[81px] w-[95px]'>
                            <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719928195/quoteImg_mfpgwl.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className='mx-[1px]'>
                    <div className='border border-[#7EA254] rounded-[20px] p-[30px] '>
                        <p className='tesSlidePara'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 45 BC, making.</p>
                        <div className='flex justify-between items-center pt-[45px]'>
                            <div>
                                <h4 className='tesSlideTitle'>Aubrey Logan</h4>
                                <p>Manager</p>
                            </div>
                            <div className='h-[81px] w-[95px]'>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719928195/quoteImg_mfpgwl.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border border-[#7EA254] rounded-[20px] p-[30px] '>
                    <p className='tesSlidePara'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 45 BC, making.</p>
                    <div className='flex justify-between items-center pt-[45px]'>
                        <div>
                            <h4 className='tesSlideTitle'>Aubrey Logan</h4>
                            <p>Manager</p>
                        </div>
                        <div className='h-[81px] w-[95px]'>
                            <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719928195/quoteImg_mfpgwl.png" alt="" />
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Testimonial;