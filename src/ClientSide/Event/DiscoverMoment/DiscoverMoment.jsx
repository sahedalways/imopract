// eslint-disable-next-line no-unused-vars
import React from 'react';

const DiscoverMoment = () => {
    return (
        <div className='sectionGap'>
            <div>
                <p className='eventGallarySmall'>Discover Moments</p>
                <h2 className='eventGarlleryTitle'>a visual journey
                    through our gallery</h2>
            </div>
            <div className='flex justify-between gap-x-[15px]'>
                <div>
                    <div className='img1'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png" alt="" />
                    </div>
                    <div className='img2'>
                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg" alt="" />

                    </div>
                </div>

                <div>
                    <div className='img3'>
                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg" alt="" />

                    </div>
                </div>
            </div>

            <div className='img4'>
                <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719563524/Emopract/middleImg_seijua.jpg" alt="" />
            </div>
            <div>
                <button className='discoverKnowMore'>Know More</button>
            </div>
        </div>
    );
};

export default DiscoverMoment;