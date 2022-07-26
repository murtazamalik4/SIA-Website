import React from "react";
import "./ourTeam.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function ourTeam({ isVisible }) {
  const team = [{
    name: "james",
    position: "President",
    desc: ""
  },{
    name: "james",
    position: "President",
    desc: ""
  },{
    name: "james",
    position: "President",
    desc: ""
  }]


  return (
    <>

      <div className="container">
        <div className="team-container-inner">
      <Swiper
         className="mySwiper "
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {team.map((team, index) =>
        <SwiperSlide key={index}>     
           <div className="team-2">
              <img src="images/team2.png" alt="" />
              <div className="team_2">
                <div className="name">Wade Warren</div>
                <div className="position">CO-FOUNDER</div>
                <div className="explain">
                  Loreum ipsum is dummy text.Loreum ipsum is dummy text. Loreum
                  ipsum is dummytext. Loreum ipsum is dummy text.
                </div>
              </div>
              <div className="icons">
                <div className="facebook">
                  <img src="images/facebook.png" alt="" />
                </div>
                <div className="twitter">
                  <img src="images/twitter.png" alt="" />
                </div>
                <div className="insta">
                  <img src="images/instagram.png" alt="" />
                </div>
              </div>
            </div>
        </SwiperSlide>)}
      </Swiper>
       </div>
      </div>

      <div className="container ">
        <div className="main-team">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className="header">Our Team</div>
          </motion.div>
          <hr />
          <div className="teams">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: -200 },
              }}
            >

            <div className="team-1">
                <img src="images/team1.png" alt="" />
                <div className="team_1">
                  <div className="name">John Smith</div>
                  <div className="position">CO-FOUNDER</div>
                  <div className="explain">
                    Loreum ipsum is dummy text.Loreum ipsum is dummy text.
                    Loreum ipsum is dummytext. Loreum ipsum is dummy text.
                  </div>
                </div>
                <div className="icons">
                  <div className="facebook">
                    <img src="images/facebook.png" alt="" />
                  </div>
                  <div className="twitter">
                    <img src="images/twitter.png" alt="" />
                  </div>
                  <div className="insta">
                    <img src="images/instagram.png" alt="" />
                  </div>
                </div>
            </div>

            
            </motion.div>
            <div className="team-2">
              <img src="images/team2.png" alt="" />
              <div className="team_2">
                <div className="name">Wade Warren</div>
                <div className="position">CO-FOUNDER</div>
                <div className="explain">
                  Loreum ipsum is dummy text.Loreum ipsum is dummy text. Loreum
                  ipsum is dummytext. Loreum ipsum is dummy text.
                </div>
              </div>
              <div className="icons">
                <div className="facebook">
                  <img src="images/facebook.png" alt="" />
                </div>
                <div className="twitter">
                  <img src="images/twitter.png" alt="" />
                </div>
                <div className="insta">
                  <img src="images/instagram.png" alt="" />
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: 200 },
              }}
            >
              <div className="team-3">
                <img src="images/team3.png" alt="" />
                <div className="team_3">
                  <div className="name">Jane Cooper</div>
                  <div className="position">CO-FOUNDER</div>
                  <div className="explain">
                    Loreum ipsum is dummy text.Loreum ipsum is dummy text.
                    Loreum ipsum is dummytext. Loreum ipsum is dummy text.
                  </div>
                </div>
                <div className="icons">
                  <div className="facebook">
                    <img src="images/facebook.png" alt="" />
                  </div>
                  <div className="twitter">
                    <img src="images/twitter.png" alt="" />
                  </div>
                  <div className="insta">
                    <img src="images/instagram.png" alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourTeam;
