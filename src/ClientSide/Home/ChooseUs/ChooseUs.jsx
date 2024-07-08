// eslint-disable-next-line no-unused-vars
import React from 'react';

const ChooseUs = () => {
    return (
        <div className='sectionGap'>
            <div className='chooseUsParent'>
                <div className='chooseUsImgParent'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719492169/Emopract/home_hero_etdts2.jpg" alt="" />
                </div>
                <div>
                    <p className='chooseUsSamll'>Why Choose Us</p>
                    <h3 className='chooseUsTitle'>most experience care for senior person</h3>
                    <p className='chooseUsParaText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <button className='chooseusKnowbtn'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;