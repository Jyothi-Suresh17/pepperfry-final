import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div
        className="container container-fluid"
        style={{ backgroundColor: "#d1d5d7" }}
      >
        <div className="row row1 d-flex justify-content-evenly pointer-cursor align-items-center mt-5 pt-5 ">
          <div className="col-md-2 ms-3 ">
            <h6 className="fw-bolder">Corporate</h6>
          </div>

          <div className="col-md-2 ">
            <h6 className="fw-bolder">Useful Links</h6>
          </div>

          <div className="col-md-2 ">
            <h6 className="fw-bolder">Partner With Us</h6>
          </div>

          <div className="col-md-2 ">
            <h6 className="fw-bolder">Need Help?</h6>
          </div>

          <div className="col-md-3 ">
            <h6 className="fw-bolder">Shop Built Safe Products</h6>
          </div>
        </div>
        <div className="row row1 d-flex justify-content-evenly align-items-center  pointer-cursor ">
          <div className="col-md-2 ms-3 mb-4 ">
            <p style={{ fontSize: "13px" }}>About Us</p>
            <p style={{ fontSize: "13px" }}>Corporate Governance</p>
            <p style={{ fontSize: "13px" }}>Pepperfry in the News</p>
            <p style={{ fontSize: "13px" }}>Careers</p>
            {/* <p style={{ fontSize: "13px" }}>{" "}</p> */}
          </div>

          <div className="col-md-2 mt-1 ">
            <p style={{ fontSize: "13px" }}>Explore Gift Cards</p>
            <p style={{ fontSize: "13px" }}>Buy in Bulk</p>
            <p style={{ fontSize: "13px" }}>Discover Our Brands</p>
            <p style={{ fontSize: "13px" }}>Check Out Bonhomie, Our Blog</p>
            <p style={{ fontSize: "13px" }}>Find a Store</p>
          </div>

          <div className="col-md-2 mt-1">
            <p style={{ fontSize: "13px" }}> Sell on Pepperfry</p>
            <p style={{ fontSize: "13px" }}> Become a Franchisee</p>
            <p style={{ fontSize: "13px" }}>Become Our Channel Partner</p>
            <p style={{ fontSize: "13px" }}>Become Our Pep Homie</p>
            <p style={{ fontSize: "13px" }}> Our Marketplace Policies</p>
            <p style={{ fontSize: "13px" }}> Merchant Dashboard Login</p>
          </div>

          <div className="col-md-2 mb-5 ">
            <p style={{ fontSize: "13px" }}> FAQs</p>
            <p style={{ fontSize: "13px" }}> Policies</p>
            <p style={{ fontSize: "13px" }}>Contact Us </p>
          </div>

          <div className="col-md-3 ">
            <p style={{ fontSize: "13px" }}>Kids & Pet Friendly</p>
            <p style={{ fontSize: "13px" }}> Certified Non-Toxic</p>
            <p style={{ fontSize: "13px" }}> Made with Vegetarian Glue</p>
            <p style={{ fontSize: "13px" }}>Scratch Resistant Finish</p>
            <div className="div">
              <h6 className="fw-bolder">Download our App</h6>
              <div className="btn1  ">
                <div className="container text-center  d-flex align-items-center justify-content-between">
                  <div>
                    <img
                      src="https://ii1.pepperfry.com/assets/pf23-apple-appstore-logo.png"
                      alt=""
                      className="w-75 img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://ii1.pepperfry.com/assets/pf23-google-appstore-logo.png"
                      alt=""
                      className="w-75 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row randomCategories mt-5 d-flex justify-content-between pointer-cursor align-items-center">
          <div className="col-md-4 ">
            <h6 className="fw-bolder">Popular Categories</h6>
            <p style={{ fontSize: "12px" }}>
              Sofas, Sectional Sofas, Sofa Sets, Queen Size Beds, King Size
              Beds, Coffee Tables, Dining Sets, Recliners, Sofa Cum Beds, Queen
              Size Mattresses, Cabinets & Sideboards, Book Shelves, TV & Media
              Units, Wardrobes, Foldable Mattresses, Pillows, Wall Shelves,
              Photo Frames, Bed Sheets, Table Linen, Study Tables, Office
              Furniture, Dining Tables, Carpets, Wall Art
            </p>
          </div>
          <div className="col-md-4 ">
            <h6 className="fw-bolder">Popular Brands</h6>
            <p style={{ fontSize: "12px" }}>
              Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana,
              Springtek, Spacewood, A Globia Creations, Febonic, @home, Durian,
              Evok, Wakefit, Nilkamal, Sleepycat, Bluewud, Duroflex, Sleepyhead,
              Green Soul, Orange Tree
            </p>
          </div>
          <div className="col-md-4 ">
            <h6 className="fw-bolder">Popular cities </h6>
            <p style={{ fontSize: "12px" }}>
              Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai,
              Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Faridabad, Jaipur,
              Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur,
              Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar,
              Patna, Ludhiana, Ahmedabad, Nashik, Madurai, Kanpur, Aurangabad
            </p>
          </div>
        </div>
        <hr />

        <div className="row rowICOns my-5 justify-content-between align-items-center pointer-cursor">
          <div className="col-md-6">
            <h6 className="fw-bolder">We Accept</h6>
            <div className="divvf d-flex justify-content-between align-items-center">
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-visa.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div style={{ width: "70px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg"
                  alt=""
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 ">
            <h6 className="fw-bolder">Like What You See? Follow us Here</h6>
            <div className="divvf d-flex justify-content-evenly align-items-center">
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-fb.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-pinterest.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-linkedin.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-youtube.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row final my-4 pointer-cursor">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex">
            <span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary">Whitehat</span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary" >Sitemap</span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary">Terms Of Use</span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary" >Privacy Policy</span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary">Your Data and Security</span>
              <span style={{fontSize:'15px'}} className="me-2 text-secondary">Grievance Redressal</span>
            </span>
           
          </div>
          <div className="col-md-2"></div>
        </div>
        <div style={{fontSize:'15px'}} className="text-center text-secondary py-3">
        © Copyright Pepperfry Limited
        </div>
      </div>
    </>
  );
}

export default Footer;
