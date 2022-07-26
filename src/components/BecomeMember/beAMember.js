import { useEffect } from "react";
import "../BecomeMember/beAMember.css";


function BeAMember() {

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "assets/rev-slider.js";
        // script.defer = true;
        // document.body.appendChild(script);
    }, []);

  return (
    <>
      <rs-module-wrap
        id="rev_slider_1_1_wrapper"
        data-source="gallery"
        style={{ visibility: "hidden", background: "transparent", padding: 0, display: 'none' }}
      >
        <rs-module id="rev_slider_1_1" style={{}} data-version="6.5.25">
          <rs-slides>
            <rs-slide
              style={{ position: "absolute" }}
              data-key="rs-1"
              data-title="Slide"
              data-thumb="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-1-copyright-50x100.jpg"
              data-anim="ms:1000;r:0;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="//chit-club.ancorathemes.com/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                alt=""
                title="about-slider-1-copyright"
                width={1920}
                height={870}
                className="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-1-copyright.jpg"
                data-panzoom="d:10000;ss:100;se:106%;"
                data-no-retina
              />
              <rs-layer
                id="slider-1-slide-1-layer-0"
                className="slider-main-title"
                data-type="text"
                data-color="#ffc94a"
                data-xy="x:c;y:m;yo:6px,6px,3px,-19px;"
                data-text="w:normal;s:85,85,46,32;l:105,105,57,35;fw:900;a:center;"
                data-frame_0="rX:70deg;oZ:-50;"
                data-frame_0_chars="d:5;y:cyc(-100||100);o:0;"
                data-frame_1="oZ:-50;sp:700;"
                data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;"
                data-frame_999="o:0;st:w;"
                style={{ zIndex: 5, fontFamily: "FivoSans,sans-serif" }}
              >
                <span>Hello from</span>
                Chit Club!
                <br />
                <span>We Take Fun Seriously</span>
              </rs-layer>
              <a
                id="slider-1-slide-1-layer-1"
                className="rs-layer slider_button rev-btn"
                href="/events/"
                target="_self"
                rel="nofollow"
                data-type="button"
                data-xy="x:c;y:m;yo:175px,175px,96px,69px;"
                data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;"
                data-dim="minh:0px,0px,none,none;"
                data-rsp_bd="off"
                data-padding="t:32,32,17,10;r:48,48,27,17;b:32,32,17,10;l:48,48,27,17;"
                data-frame_0="y:50,50,27,16;"
                data-frame_1="e:power2.out;st:600;sp:1300;"
                data-frame_999="o:0;st:w;"
                data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;"
                style={{
                  zIndex: 6,
                  backgroundColor: "#ffc94a",
                  fontFamily: "FivoSans,sans-serif",
                  cursor: "pointer",
                }}
              >
                HOST AN EVENT
              </a>
            </rs-slide>
            <rs-slide
              style={{ position: "absolute" }}
              data-key="rs-8"
              data-title="Slide"
              data-thumb="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-2-copyright-50x100.jpg"
              data-anim="ms:1000;r:0;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="//chit-club.ancorathemes.com/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                alt=""
                title="about-slider-2-copyright"
                width={1920}
                height={870}
                className="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-2-copyright.jpg"
                data-panzoom="d:10000;ss:100;se:106%;"
                data-no-retina
              />
              <rs-layer
                id="slider-1-slide-8-layer-0"
                className="slider-main-title"
                data-type="text"
                data-color="#ffc94a"
                data-xy="x:c;y:m;yo:6px,6px,3px,-19px;"
                data-text="w:normal;s:85,85,46,32;l:105,105,57,35;fw:900;a:center;"
                data-frame_0="rX:70deg;oZ:-50;"
                data-frame_0_chars="d:5;y:cyc(-100||100);o:0;"
                data-frame_1="oZ:-50;sp:700;"
                data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;"
                data-frame_999="o:0;st:w;"
                style={{ zIndex: 5, fontFamily: "FivoSans,sans-serif" }}
              >
                Board Games
                <br />
                <span>Bring Us Together</span>
              </rs-layer>
              <a
                id="slider-1-slide-8-layer-1"
                className="rs-layer slider_button rev-btn"
                href="/shop/"
                target="_self"
                rel="nofollow"
                data-type="button"
                data-xy="x:c;y:m;yo:175px,175px,96px,69px;"
                data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;"
                data-dim="minh:0px,0px,none,none;"
                data-rsp_bd="off"
                data-padding="t:32,32,17,10;r:48,48,27,17;b:32,32,17,10;l:48,48,27,17;"
                data-frame_0="y:50,50,27,16;"
                data-frame_1="e:power2.out;st:600;sp:1300;"
                data-frame_999="o:0;st:w;"
                data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;"
                style={{
                  zIndex: 6,
                  backgroundColor: "#ffc94a",
                  fontFamily: "FivoSans,sans-serif",
                  cursor: "pointer",
                }}
              >
                VISIT THE GAME SHOP
              </a>
            </rs-slide>
            <rs-slide
              style={{ position: "absolute" }}
              data-key="rs-9"
              data-title="Slide"
              data-thumb="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-3-copyright-50x100.jpg"
              data-anim="ms:1000;r:0;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="//chit-club.ancorathemes.com/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                alt=""
                title="about-slider-3-copyright"
                width={1920}
                height={870}
                className="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="//chit-club.ancorathemes.com/wp-content/uploads/2019/11/about-slider-3-copyright.jpg"
                data-panzoom="d:10000;ss:100;se:106%;"
                data-no-retina
              />
              <rs-layer
                id="slider-1-slide-9-layer-0"
                className="slider-main-title"
                data-type="text"
                data-color="#ffc94a"
                data-xy="x:c;y:m;yo:6px,6px,3px,-19px;"
                data-text="w:normal;s:85,85,46,32;l:105,105,57,35;fw:900;a:center;"
                data-frame_0="rX:70deg;oZ:-50;"
                data-frame_0_chars="d:5;y:cyc(-100||100);o:0;"
                data-frame_1="oZ:-50;sp:700;"
                data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;"
                data-frame_999="o:0;st:w;"
                style={{ zIndex: 5, fontFamily: "FivoSans,sans-serif" }}
              >
                Play Board Games
                <br />
                <span>All Day At Chit Club</span>
              </rs-layer>
              <a
                id="slider-1-slide-9-layer-1"
                className="rs-layer slider_button rev-btn"
                href="/events/"
                target="_self"
                rel="nofollow"
                data-type="button"
                data-xy="x:c;y:m;yo:175px,175px,96px,69px;"
                data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;"
                data-dim="minh:0px,0px,none,none;"
                data-rsp_bd="off"
                data-padding="t:32,32,17,10;r:48,48,27,17;b:32,32,17,10;l:48,48,27,17;"
                data-frame_0="y:50,50,27,16;"
                data-frame_1="e:power2.out;st:600;sp:1300;"
                data-frame_999="o:0;st:w;"
                data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;"
                style={{
                  zIndex: 6,
                  backgroundColor: "#f22f2f",
                  fontFamily: "FivoSans,sans-serif",
                  cursor: "pointer",
                }}
              >
                VIEW UPCOMING EVENTS
              </a>
            </rs-slide>
          </rs-slides>
        </rs-module>
      </rs-module-wrap>

      <div className="BAMCard">
        <div className="bam-detail-container">
            <div className="text-container">
                <h1 className="heading">We'd love to have you onboard!</h1>
                <span className="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci<br></br> pretium a pharetra, feugiat cursus.</span>
            </div>
            <div className="bam-btn-container">
                <button className="bam-btn">Be a Member</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default BeAMember;
