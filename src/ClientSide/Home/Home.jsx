// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import ChooseUs from './ChooseUs/ChooseUs';
import PopularService from './PopularService/PopularService';
import Events from './Events/Events';
import MembershipHome from './MembershipHome/MembershipHome';
import DiscoverMoment from '../Event/DiscoverMoment/DiscoverMoment';
import OurTeam from './OurTeam/OurTeam';
import Reels from './Reels/Reels';
import Testimonial from './Testimonial/Testimonial';
import Footer from './../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ChooseUs></ChooseUs>
            <PopularService></PopularService>
            <Events></Events>
            <MembershipHome></MembershipHome>
            <Reels></Reels>
            <OurTeam></OurTeam>
            <DiscoverMoment></DiscoverMoment>
            <Testimonial></Testimonial>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;