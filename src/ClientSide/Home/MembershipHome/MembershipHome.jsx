// eslint-disable-next-line no-unused-vars
import React from 'react';

const MembershipHome = () => {
    return (
        <div className='bg-[#EDEDED] mt-[60px]'>
            <div className='py-[51px] px-[36px]'>
                <div >
                    <p className='homeMemberShipSamll'>Our Membership</p>
                    <h3 className='homeMemberShipTitle'>our most popular membership package</h3>
                    <p className='membershipPara'>Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you.</p>
                </div>
                <div className='grid grid-cols-1 gap-y-[15px] cursor-pointer'>
                    <button className='membershipbtnOne'>Annual Plan</button>
                    <button className='membershipbtnTwo'>Annual Plan</button>
                    <button className='membershipbtnThree'>Annual Plan</button>
                </div>
            </div>
        </div>
    );
};

export default MembershipHome;