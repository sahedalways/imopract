// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularService = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };

    var settingsLarge = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };

    return (
        <div>
            <div className=''>
                <div className='sectionGap'>
                    <div className='md:text-center md:w-full'>
                        <p className='popularSmallText'>Our Services</p>
                        <h2 className='popularSmallTitle'>our most popular services</h2>
                        <p className='popularDes'>Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you.</p>
                    </div>
                </div>

                {/* mobile slider  */}
                <div className='md:hidden block bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719506684/Emopract/cardBg_g8b4cu.png")] bg-no-repeat bg-cover bg-center h-[1200px] '>
                    <div className='w-[366px]  mx-auto'>
                        <div className="slider-container ">
                            <Slider {...settings}>
                                <div className=''>
                                    <div className='h-[350px] md:h-full'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='popularSlidertitle'>regular work</h2>
                                        <p className='popularSlidertext'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='popularReadMoreBtn'>Read More</button>
                                    </div>
                                </div>


                                <div>
                                    <div className='h-[350px] md:h-full'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='popularSlidertitle'>regular work</h2>
                                        <p className='popularSlidertext'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='popularReadMoreBtn'>Read More</button>
                                    </div>
                                </div>
                                <div>
                                    <div className='h-[350px] md:h-full'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='popularSlidertitle'>regular work</h2>
                                        <p className='popularSlidertext'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='popularReadMoreBtn'>Read More</button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>


                    <div>
                        <div className='px-[36px] pt-[40px]'>
                            <p className='getIntouchSmall'>Get In Touch</p>
                            <h3 className='getTitle'>free consultation</h3>
                            <p className='getParaText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='relative'>
                            <div className='getinTmgParent'>
                                <img className='w-full h-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719507389/Emopract/freeConsultation_uji0kh.jpg" alt="" />
                            </div>
                            <div className='absolute top-[165px] w-full'>
                                <div className='bg-[#F2F2F2] mx-[36px]  rounded-[10px]'>
                                    <h3 className='eventCardTitle text-[#7EA254]'>request for a session!</h3>
                                    <form className='space-y-[20px] mt-[15px]'>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Full Name</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Phone Number</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Email Address</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor=""> Message</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>

                                        <div className='inputParent pt-[30px] pb-[25px]'>
                                            <button className='contactSendBtn bg-[#7EA254] text-white'>Send Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* large slider  */}
                <div className='  hidden md:block bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719646495/Emopract/mdCardbg_atj9uo.png")] bg-no-repeat bg-cover bg-center md:h-auto'>
                    <div className=''>
                        <div className="slider-container ">
                            <Slider {...settingsLarge}>
                                <div className='grid grid-cols-2'>
                                    <div className=''>
                                        <div className=''>
                                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                        </div>
                                        <div className='text-center'>
                                            <h2 className=''>regular work</h2>
                                            <p className=''>The mundane matters of everyday life take up a lot of time and energy</p>
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>


                                    <div>
                                        <div className=''>
                                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                        </div>
                                        <div className='text-center'>
                                            <h2 className=''>regular work</h2>
                                            <p className=''>The mundane matters of everyday life take up a lot of time and energy</p>
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=''>
                                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                        </div>
                                        <div className='text-center'>
                                            <h2 className=''>regular work</h2>
                                            <p className=''>The mundane matters of everyday life take up a lot of time and energy</p>
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>


                    <div >
                        <div className='px-[36px] md:px-[50px] lg:px-[60px] xl:px-[100px]'>
                            <p className='getIntouchSmall'>Get In Touch</p>
                            <h3 className='getTitle'>free consultation</h3>
                            <p className='getParaText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='relative'>
                            <div className='getinTmgParent'>
                                <img className='w-full h-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719507389/Emopract/freeConsultation_uji0kh.jpg" alt="" />
                            </div>
                            <div className=' inline-block mt-[-100px] w-full'>
                                <div className='bg-[#F2F2F2] mx-[36px] md:mx-[150px]  rounded-[10px]'>
                                    <h3 className='eventCardTitle text-[#7EA254]'>request for a session!</h3>
                                    <form className='space-y-[20px] mt-[15px]'>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Full Name</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Phone Number</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor="">Email Address</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>
                                        <div className='inputParent'>
                                            <label className='formTitle text-black' htmlFor=""> Message</label>
                                            <input className='contactInpufeild' type="text" />
                                        </div>

                                        <div className='inputParent pt-[30px] pb-[15px]'>
                                            <button className='contactSendBtn bg-[#7EA254] text-white'>Send Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>

        </div>
    );
};

export default PopularService;