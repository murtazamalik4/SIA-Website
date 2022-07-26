import React from 'react'
import AboutUs from '../aboutUs/aboutUs';
import UpcomingEvents from '../upcomingEvents/upcomingEvents';
import OurTeam from '../ourTeam/ourTeam';
import Footer from '../footer/footer';

function home() {
  return (
    <>
        <AboutUs />
          <UpcomingEvents />
        <OurTeam />
        <Footer />
    </>
  )
}

export default home