import React from "react";
import "./aboutUs.css";
import { motion } from "framer-motion"

function aboutUs() {
  return (


<motion.div
 initial={{  y:300 ,opacity:0}}
 animate={{y: 0,opacity: 1}}
 viewport={{ once: true }}
 whileInView="visible"
 
  transition={{ type:"linear" ,duration: 3.0}}
  
><div className="main">
      <div className="component">
        <div className="image">
          <img src="/images/image.png" alt="" />
        </div>
        <div className="content">
          <div className="content-1">ABOUT US</div>
          <hr/>
          <div className="content-2">We Are the Singapore Indian Association.</div>
          <div className="content-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </div>
          <div className="content-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus.
          </div>
          <button>Know More</button>
        </div>
      </div>
    </div>
    </motion.div>
    
  );
}

export default aboutUs;
