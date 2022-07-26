import React from 'react'
import './events.css'
import { motion } from "framer-motion";

function events() {
  return (
    <div className='events_main'>
      <div className='events_component_1'>
        <div className="events_1">
          <h1>INDIAN FOLK DANCE FEST</h1>
        </div>
        <div className='events_2'>
          HOME - Upcoming Events - Indian Folk Dance Fest
        </div>
      </div>
      <div className='events_component_2'>
        <div className="first">
          <img src="/images/Rectangle 84.png" alt="" />
        </div>
        <div className="second">
          <div className="head_1">ABOUT THIS EVENT</div>
          <hr/>
          <div className="head_2">
            INDIAN FOLK DANCE FEST
          </div>
          <div className="description_events_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
          </div>
          <div className="when_where">
          <div className="where">
            <span>WHERE</span>
            <div>
              SIA Club
            </div>
            <div>
              69 Balestier Road Singapore
            </div>
          </div>
          <div className="when">
            <span>WHEN</span>
            <div>
              Sunday
              24th July, 2022
            </div>
          </div>
          </div>
          <div className="btn">
            <button>JOIN NOW</button>
          </div>
        </div>
      </div>
      <div className="main-upcoming">
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 1.0 }}
         variants={{
           visible: { opacity: 1},
           hidden: { opacity: 1 }
         }}
        
       >
        <div className="header">FIND MORE EVENTS</div>
      </motion.div>
      <hr />

      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 1.0 }}
         variants={{
           visible: { y:0},
           hidden: { y:200}
         }}
         style={{overflow: "hidden"}}
       >
      <div className="events " >
        <div className="event-1">
          <img src="images/event1.png" alt="" />
          <div className="desc">
            <div className="calendar">
              <div className="month">July</div>
              <div className="date">18</div>
            </div>
            <div className="descriptions">
              <div className="first">
                Summer Bazaar 2022 - Connected To India.
              </div>
              <div className="second_desc">
                Loreum ipsum is dummy text. Loreum ipsum is dummy text.
              </div>
            </div>
          </div>
        </div>
        <div className="event-2">
          <img src="images/event2.png" alt="" />
          <div className="desc">
            <div className="calendar">
              <div className="month">July</div>
              <div className="date">18</div>
            </div>
            <div className="descriptions">
              <div className="first">Traditional Folk Music Festivals.</div>
              <div className="second_desc">
                Loreum ipsum is dummy text. Loreum ipsum is dummy text.
              </div>
            </div>
          </div>
        </div>
        <div className="event-3">
          <img src="images/event3.png" alt="" />
          <div className="desc">
            <div className="calendar">
              <div className="month">July</div>
              <div className="date">18</div>
            </div>
            <div className="descriptions">
              <div className="first">Tasty Food & Drinks Festrival-2022.</div>
              <div className="second_desc">
                Loreum ipsum is dummy text. Loreum ipsum is dummy text.
              </div>
            </div>
          </div>
        </div>
      </div></motion.div>
    </div>
    </div>
  )
}

export default events