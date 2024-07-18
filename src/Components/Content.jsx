import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Carousel } from "react-bootstrap";

function Content() {
  return (
    <>
      <div className="contents container container-fluid">
        <div className="divPoster">
          <div className="row justify-content-center">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <img
                src="https://ii1.pepperfry.com/assets/a3886d9e-f8e1-4e23-8953-71324e345def.jpg"
                width={"1300px"}
                className="img-fluid "
                alt=""
              />
            </div>
            <div className="col-md-1"></div>
          </div>
          <hr />
          <div className="row row3Sec d-flex justify-content-around   ms-5">
            <div className="col-md-4 my-2">
              <img
                src="https://ii1.pepperfry.com/assets/46ca4ea4-1948-48b3-9508-2ab2dc4fc272.jpg"
                className="img-fluid"
                width={"390px"}
                alt=""
              />
              <div className="grad mt-2 w-100 rounded p-2 ">
                <h5 className="fw-2">
                  Additional Discount{" "}
                  <span className="text-warning">upto Rs.10,000/-</span>
                </h5>
                <h6>Available at your Nearest Store</h6>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <img
                src="https://ii1.pepperfry.com/assets/4e945937-753c-4327-836f-c3fc8927b642.jpg"
                className="img-fluid"
                width={"390px"}
                alt=""
              />
              <div className="grad mt-2 w-100 rounded p-2 ">
                <h5 className="fw-2">
                  Additional Discount{" "}
                  <span className="text-warning">upto Rs.2,000/-</span>
                </h5>
                <h6>Available at your Nearest Store</h6>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <img
                src="https://ii1.pepperfry.com/assets/ad31a3de-d1b5-48b4-ae82-62f7c2f2e0cd.jpg"
                className="img-fluid"
                width={"390px"}
                alt=""
              />
              <div className="gra mt-2 w-100 rounded p-2 ">
                <h5 className="fw-2">
                  No Cost<span className="text-primary"> EMI Offers </span>
                </h5>
                <h6>Available at your Nearest Store</h6>
              </div>
            </div>
          </div>
          <div className="row rowyellowBanner my-5">
            <div className="col-md-12 ">
              {" "}
              <img
                src="https://ii1.pepperfry.com/assets/1d5678cd-db9e-443c-828c-29e33cc9107e.jpg"
                style={{ height: "180px" }}
                className="img-fluid  "
                width={"95%"}
                alt=""
              />
            </div>
          </div>

          {/* fry deals */}

          <div className="row fryDeals d-flex text-center justify-content-center align-item-center">
            <h3 style={{ color: "#7b4b08", fontWeight: "250px" }}>
              Shop What the Fry Deals
            </h3>
            <h6>
              Sale ends in{" "}
              <span className="text-danger">
                01:04:55 <FontAwesomeIcon icon={faClock} />
              </span>
            </h6>

            <div className="col-md-2 ">
              <img
                variant="top"
                src="https://ii1.pepperfry.com/media/catalog/product/b/l/494x544/blue-oriental-machine-made-6x4-5-feet-chenille-carpet-by-braids-blue-oriental-machine-made-6x4-5-fee-xqu3kr.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                {" "}
                Blue Chenille Vintage 4 x 6 Feet Machine Made Carpet
              </p>
              <h6>
                Rs 289{" "}
                <span className="text-secondary text-decoration-line-through">
                  999
                </span>{" "}
                <span className="text-success">71%</span>
              </h6>
            </div>
            <div className="col-md-2">
              <img
                variant="top"
                src="https://ii2.pepperfry.com/media/catalog/product/p/h/494x544/philodendron-oxycardium-golden-natural-plant-in-brown-self-watering-plastic-pot-philodendron-oxycard-j9uryi.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                Philodendron Oxycardium Golden Natural Plant In Brown Self
                Watering Plastic Pot
              </p>
              <h6>
                Rs 149{" "}
                <span className="text-secondary text-decoration-line-through">
                  399
                </span>{" "}
                <span className="text-success">63%</span>
              </h6>
            </div>

            <div className="col-md-2">
              <img
                variant="top"
                src="https://ii3.pepperfry.com/media/catalog/product/s/e/494x544/set-of-2-transparent-700ml-glass-kitchen-storage-with-black-lid--free-replacement-of-lids--set-of-2--oc4tkv.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                {" "}
                Set Of 2 Transparent 700ml Glass Kitchen Storage with Black Lid
                (Free Replacement of Lids)
              </p>
              <h6>
                Rs 219{" "}
                <span className="text-secondary text-decoration-line-through">
                  499
                </span>{" "}
                <span className="text-success">51%</span>
              </h6>
            </div>
            <div className="col-md-2">
              <img
                variant="top"
                src="https://ii1.pepperfry.com/media/catalog/product/p/o/494x544/portable-retro-multi-function-camping-lantern-lamp-tent-hanging-light-outdoor-path-garden-led-lanter-nrx1bw.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                {" "}
                Rechargeable Camping Lantern with USB Charging (Assorted Colour)
              </p>
              <h6>
                Rs 349{" "}
                <span className="text-secondary text-decoration-line-through">
                  999
                </span>{" "}
                <span className="text-success">61%</span>
              </h6>
            </div>
            <div className="col-md-2">
              <img
                variant="top"
                src="https://ii3.pepperfry.com/media/catalog/product/b/l/494x544/blue-traditional-120-tc-100--cotton-queen-bedsheet-with-2-pillow-covers-blue-traditional-120-tc-100--7tu9oj.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                {" "}
                Blue Traditional 120 TC 100% Cotton Queen Bedsheet With 2 Pillow
                Covers
              </p>
              <h6>
                Rs 289{" "}
                <span className="text-secondary text-decoration-line-through">
                  1,199
                </span>{" "}
                <span className="text-success">76%</span>
              </h6>
            </div>
            <div className="col-md-2">
              <img
                variant="top"
                src="https://ii2.pepperfry.com/media/catalog/product/p/u/494x544/purple-fields-natural-fragrance-incense-sticks-purple-fields-natural-fragrance-incense-sticks-mys2lp.jpg"
                className="img-fluid w-75"
              />
              <p className="trmm">
                {" "}
                Lavender Fragrance 120 Incense Sticks With Wooden Holder
              </p>
              <h6>
                Rs 99{" "}
                <span className="text-secondary text-decoration-line-through">
                  169
                </span>{" "}
                <span className="text-success">41%</span>
              </h6>
            </div>
          </div>

          <div className="row Mattress pointer-cursor mt-5 text-center justify-content-center align-items-center">
            <div className="col-md-12">
              <h3
                className="my-3"
                style={{ color: "#7b4b08", fontWeight: "250px" }}
              >
                Mattress Mania
              </h3>
              <div className="col-md-12 ">
                <img
                  src="https://www.worldwidemattressoutlet.com/wp-content/uploads/2016/08/Mattress-of-the-Month-Banner-1280x504.png"
                  style={{ height: "300px" }}
                  className="img-fluid  "
                  width={"90%"}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* brands */}

          <div className="row brandBazar text-center my-3">
            <h3
              className="mt-5"
              style={{ color: "#7b4b08", fontWeight: "250px" }}
            >
              Brand Bazar
            </h3>

            <div className="row   d-flex justify-content-center align-items-center">
              <div className="col-md-4 my-3 pointer-cursor">
                <Card style={{ width: "400px", height: "550px" ,backgroundColor:'#c2c8ca'}}>
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src="https://images.furnituredealer.net/img/products/coaster/color/devon--181734809_300525ke-b1.jpg"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Beds</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 70% Off + Extra Coupon Inside</h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVhSyO8XGFCr6XiUafRvmaHnhJ_ZEmbp9vnZjEwIv3jhiSa5t3Q3jO-yUP7uyzxTodA&usqp=CAU"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3dha2VmaXQtaW5ub3ZhdGlvbnMuanBn.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://www.logopie.com/wp-content/uploads/2014/08/MintWud-700x480.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Snooze and save
                </h6>
                <p className="text-secondary text-start ">
                  Special offer on 200+ Beds
                </p>
              </div>
              <div className="col-md-4 my-3 pointer-cursor">
                <Card style={{ width: "400px", height: "550px",backgroundColor:'#c2c8ca' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "350px" }}
                    className="img-fluid"
                    src="https://s1.ax1x.com/2020/11/04/Bcpb6J.jpg"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Sofas</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 70% Off + Extra Coupon Inside</h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.am14IbGaM7_6FWY5oggTfAAAAA&pid=Api&P=0&h=220"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://images.creativemarket.com/0.1.0/ps/2498033/1160/772/m1/fpnw/wm0/preview001-.jpg?1491306758&s=5c885c1b094a1a70c8b076a36cc3341a"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://www.logodesign.net/logo/yellow-sofa-2368ld.png?size=2&industry=sofa"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Sink in Comfort
                </h6>
                <p className="text-secondary text-start ">
                  Upgrade your home with 400+ soafa options..
                </p>
              </div>
              <div className="col-md-4 my-3 pointer-cursor">
                <Card style={{ width: "400px", height: "550px",backgroundColor:'#c2c8ca' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "370px" }}
                    className="img-fluid"
                    src="https://ii1.pepperfry.com/media/catalog/product/s/w/1100x1210/switch-foldable-study-table-with-wheels--in-teak-finish-by-duroflex-switch-foldable-study-table-with-youljj.jpg"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Study Tables</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 50% Off + Extra Coupon Inside</h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQVhSyO8XGFCr6XiUafRvmaHnhJ_ZEmbp9vnZjEwIv3jhiSa5t3Q3jO-yUP7uyzxTodA&usqp=CAU"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.MRwbDmVJ8icES7oTnRz2lgAAAA&pid=Api&P=0&h=220"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://www.logopie.com/wp-content/uploads/2014/08/MintWud-700x480.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Unleash your Brilliance!!
                </h6>
                <p className="text-secondary text-start ">
                  Exclusive offer on 60 + products
                </p>
              </div>
            </div>

            <div className="row  d-flex justify-content-cnter align-items-center">
              <div className="col-md-4 pointer-cursor">
                <Card style={{ width: "400px", height: "550px",backgroundColor:'#c2c8ca' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "370px" }}
                    className="img-fluid"
                    src="https://i.pinimg.com/736x/a4/6a/45/a46a450c7811670bf1304a13eb0b1143--sliding-wardrobe-wardrobe-doors.jpg"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Wardrobes</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 60% Off + Extra Coupon Inside</h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://clipground.com/images/godrej-logo-png-9.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3dha2VmaXQtaW5ub3ZhdGlvbnMuanBn.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://www.logopie.com/wp-content/uploads/2014/08/MintWud-700x480.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Organize in Style!!
                </h6>
                <p className="text-secondary text-start ">
                  Choose from 150+ selection of wardrobes
                </p>
              </div>
              <div className="col-md-4 pointer-cursor">
                <Card style={{ width: "400px", height: "550px",backgroundColor:'#c2c8ca' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "320px" }}
                    className="img-fluid"
                    src="https://i5.walmartimages.com/asr/e3de3e1a-f927-4125-8166-a29ea414f60a.912f9bdab74e26cb7ab50e21ebe24ee6.jpeg"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Kitchen Racks</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 70% Off + Assured 20% Cashback </h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://i2.wp.com/kitchenlifestyle.com/wp-content/uploads/2017/01/kitchen-logo-square.jpg?fit=1000%2C800&ssl=1"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://racks.ph/wp-content/uploads/2021/07/Racks-Menu-Logo.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://cdn.dribbble.com/users/162062/screenshots/1995482/media/b922c92b5c8fe485de29223578196d57.jpg?compress=1&resize=400x300&vertical=top"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Effortless kitchen organization starts here
                </h6>
                <p className="text-secondary text-start ">
                  Organize your kitchen now from 140+ options{" "}
                </p>
              </div>
              <div className="col-md-4 pointer-cursor">
                <Card style={{ width: "400px", height: "550px",backgroundColor:'#c2c8ca' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "370px" }}
                    className="img-fluid"
                    src="https://i5.walmartimages.com/asr/9e48255d-7eed-4222-bcbf-a47a4acb1544_1.2a051defbae65e9e6dd384a272220b2b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                  />
                  <Card.Body >
                    <Card.Title className="fw-bold">
                      <h4>Floor Lamps</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Upto 80% Off + Additional Rs 1100/</h5>
                      <hr />
                      <div className="divvv d-flex justify-content-center align-items-center">
                        <img
                          src="https://www.lamp.es/images/53660/small_slider_image.jpg"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://pristinepainting.ca/wp-content/uploads/sites/484/2019/08/mylogo.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                        <img
                          src="https://bestinteriordesigninginhyderabad.in/wp-content/uploads/2023/05/simplify-logo-01.png"
                          alt=""
                          className="w-25 img-fluid"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h6 className="text-secondary text-start mt-1">
                  Lightup Your Cozy Corner
                </h6>
                <p className="text-secondary text-start ">
                  Light Your Space from 800+ products{" "}
                </p>
              </div>
            </div>
          </div>
          {/* places */}
          <div className="row places d-flex justify-content-center align-items-center">
            <div className="col-md-4 pointer-cursor">
              <img
                src="https://ii1.pepperfry.com/assets/274a96a5-8fa1-4f65-9fd3-4448e2e855f6.jpg"
                className="img-fluid"
                style={{ height: "300px", width: "550px" }}
                alt=""
              />
            </div>

            <div className="col-md-8 pointer-cursor">
              <Carousel>
                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/13/1701998659_bengaluru_2x_3011.jpg"
                        alt="First slide"
                      />
                      <div className="text-overlay text-light">
                        <h3>Bengaluru</h3>
                        <h4>11 stores</h4>
                      </div>
                    </div>
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/10/1701998730_mumbai_2x_3011.jpg"
                        alt="First slide"
                      />
                      <div className="text-overlay text-light">
                        <h3>Mumbai</h3>
                        <h4>7 stores</h4>
                      </div>
                    </div>
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/11/1701998845_delhi-ncr_2x_3011.jpg"
                        alt="First slide"
                      />
                      <div className="text-overlay text-light">
                        <h3>Delhi</h3>
                        <h4>6 stores</h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/14/1701998896_pune_2x_3011.jpg"
                        alt="First slide"
                      />
                      <div className="text-overlayy text-light">
                        <h3>Pune</h3>
                        <h4>5 stores</h4>
                      </div>
                    </div>
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/19/1701998787_hyderabad_2x_3011.jpg"
                        alt="Second slide"
                      />
                      <div className="text-overlay text-light">
                        <h3>Hyderabad</h3>
                        <h4>4 stores</h4>
                      </div>
                    </div>
                    <div className="position-relative">
                      <img
                        className="d-block imm p-2 img-fluid"
                        style={{ width: "300px" }}
                        src="https://ii1.pepperfry.com/media/catalog/studio/city/16/1701998949_chennai_2x_3011.jpg"
                        alt="Third slide"
                      />
                      <div className="text-overlay text-light">
                        <h3>Chennai</h3>
                        <h4>5 stores</h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          {/* Newest arrivals  */}
          <div className="row discover d-flex  justify-content-between align-items-center">
            <h3 style={{ color: "#7b4b08", fontWeight: "250px" }} className="text-center mt-5 mb-2">
              Discover Our Newest Arrivals 
            </h3>

            <div className="col-md-3  pointer-cursor">
              <img src="https://ii1.pepperfry.com/assets/3586b24d-7119-4c07-820f-14947f05f440.jpg" className="img-fluid" width={'320px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Study Tables</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>230+ options ,starting at ₹2,962 → </p>
            </div>

            <div className="col-md-3  pointer-cursor">
              <img src="https://ii1.pepperfry.com/assets/9a356c69-0cc8-4461-90c2-7dd3dd4178bc.jpg" className="img-fluid" width={'320px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Wall Shelves</h6>
              <p className="text-secondary my-1 " style={{fontSize:'13px'}}>650+ options ,starting at ₹299 → </p>
            </div>

            <div className="col-md-3  pointer-cursor">
              <img src="https://ii1.pepperfry.com/assets/97031880-6273-4cf4-bb63-56d4dcc2d1c4.jpg" className="img-fluid" width={'320px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Dining Set</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>400+ options ,starting at ₹7,599 → </p>
            </div>

            <div className="col-md-3 pointer-cursor">
              <img src="https://ii1.pepperfry.com/assets/32dc7253-4011-439a-b520-d183b7412947.jpg" className="img-fluid" width={'320px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Queen BedSheets</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>1300+ options ,starting at ₹299 → </p>
            </div>

            
          </div>

          {/* interior trends */}

          <div className="row rowInterior">

          <h3 style={{ color: "#7b4b08", fontWeight: "250px" }} className="text-center mt-5 mb-2">
              Follow home Interior Trends 
            </h3>
              <div className="row rowInterior1 justify-content-between align-items-center my-3">

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/74c0891f-8104-4dbb-a41a-abc961a66a94.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Relaxing coastal Furniture</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>120+ options ,starting at ₹1,669 → </p>
                </div>

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/95308189-26ce-49c6-92d3-462ed81a126c.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Relaxing coastal Furniture</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>120+ options ,starting at ₹1,669 → </p>
                </div>

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/92e66623-dae9-4778-ad82-04b75351e27a.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Relaxing coastal Furniture</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>120+ options ,starting at ₹1,669 → </p>
                </div>

               
              </div>

              <div className="row rowInterior2 justify-content-between align-items-center my-3">

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/8e9e5439-87ce-45d8-a2c3-09671814bd3b.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Earthernwear Essence</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>600+ options ,starting at ₹169 → </p>
                </div>

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/0feb8fb0-bd16-4bcf-bb18-026fc4b0cf95.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Glam Grandeur Collection</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>100+ options ,starting at ₹2,499 → </p>
                </div>

                <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/809cdfa1-1d33-43cf-89d4-d7f5808f96df.jpg" className="img-fluid" width={'425px'} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Eco Eden</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>300+ options ,starting at ₹179 → </p>
                </div>

               
              </div>
          </div>

          {/* collections */}

          <div className="row rowcollections d-flex justify-content-between align-items-center">
            
          <h3 style={{ color: "#7b4b08", fontWeight: "250px" }} className="text-center mt-5 mb-2">
             Check Out These Collections
            </h3>

          <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/4d8cef7f-85bc-46ec-908a-42e74ad9e5a0.jpg" className="img-fluid" style={{width:'500px',height:'200px'}} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Wall Mounted TV Units</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>150+ options ,starting at ₹3,024 → </p>
                </div>
          <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/5a06785f-0287-4fd3-b9fe-3b1f44f84941.jpg" className="img-fluid" style={{width:'500px',height:'200px'}} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">Box Storage Beds</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>300+ options ,starting at ₹7,399 → </p>
                </div>
          <div className="col-md-4 pointer-cursor">
                <img src="https://ii1.pepperfry.com/assets/b5e35095-3d31-4aff-9d87-b762cb9cfd1f.jpg" className="img-fluid" style={{width:'500px',height:'200px'}} alt="" />
              <h6 className="text-secondary my-1 fw-bolder">2 Door Wardrobes</h6>
              <p className="text-secondary my-1" style={{fontSize:'13px'}}>250+ options ,starting at ₹7,899 → </p>
                </div>


          </div>

        </div>
      </div>
      <hr />
    </>
  );
}

export default Content;
