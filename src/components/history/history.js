import "./history.css";
import { Col, Row } from "antd";

function History() {
  return (
    <>
      <div>
        <Row className="birth-section-container">
          <Col xs={24} lg={12} className="birth-image-container">
            <img className="birth-img-holder" src="/assets/images/history-demo-image.png" alt="" />
          </Col>

          <Col xs={24} lg={12}>
            <div className="birth-text-holder">
              <div className="marker-container">
                <div className="marker">
                  <div className="marker-date">2004</div>
                </div>

                <div className="history-title-holder">
                  The Birth of<br></br>the Association
                </div>
                <div className="red-highlight"></div>

                <div className="birth-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum diam orci pretium a pharetra, feugiat cursus.
                  Dictumst risus, sem egestas odio cras adipiscing vulputate.
                  Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                  vel.
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="birth-section-container">

          <Col xs={{ order: 3, span: 24 }} lg={{ order: 2, span: 12 }}>
            <div className="birth-text-holder">
              <div className="marker-container">
                <div className="marker">
                  <div className="marker-date">2008</div>
                </div>

                <div className="history-title-holder">
                  Laying Foundation Stone<br></br>of the Association
                </div>
                <div className="red-highlight"></div>

                <div className="birth-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum diam orci pretium a pharetra, feugiat cursus.
                  Dictumst risus, sem egestas odio cras adipiscing vulputate.
                  Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                  vel.
                </div>
              </div>
            </div>
          </Col>

          <Col xs={{ order: 2, span: 24 }} lg={{ order: 3, span: 12 }} className="birth-image-container">
            <img className="birth-img-holder" src="/assets/images/history-demo-image.png" alt="" />
          </Col>

        </Row>
      </div>
    </>
  );
}

export default History;
