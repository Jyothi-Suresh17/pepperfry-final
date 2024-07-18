import {
  faMagnifyingGlass,
  faUser,
  faStore,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <>
      <div className= " container-fluid MainNAv">
        <div className="nav1" style={{ backgroundColor: "#e8e9e9" }}>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <ul className="list-unstyled d-flex justify-content-around mt-2 ">
                <li className="">Sell on Pepprfry</li>
                <li>Become a Franchisee</li>
                <li>Buy in Bulk</li>
                <li>Gift Cards</li>
                <li>Track Your Order </li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
       
        {/* nav pepprfry */}
        <div className="navPepper row d-flex justify-content-evenly my-3 mx-2">
          <div className="search d-flex col-md-4">
            {/* <input type="text" className='form-control ' placeholder='Search' />
    <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            <input
              type="text"
              placeholder="Search"
              className="form-control w-50 h-50 ng-untouched ng-pristene ng-valid"
            />
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                flip="horizontal"
                size="xs"
                style={{ marginTop: "10px", marginLeft: "-30px" }}
                className="text-secondary"
              />
            </div>
          </div>

          <div className="peper col-md-4 align-item-center d-flex justify-content-center">
            <img
              src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg"
              width={"219px"}
              height={"49px"}
              alt=""
            />
          </div>

          <div className="signin col-md-4 d-flex">
            <div className="divv d-flex">
              <div className="div1 ">
                <div
                  className=" font-semibold  text-end"
                  style={{ fontSize: "13px" }}
                >
                  Sign Up Now
                </div>
                <div className="font-semibold text-xs">
                  <span
                    className="text-warning font-semibold  "
                    style={{ fontSize: "13px" }}
                  >
                    Get Credits Worth INR 10,000
                  </span>
                </div>
              </div>
              <FontAwesomeIcon icon={faUser} size="2xl" className="m-2" />
            </div>

            <div className="divv1 d-flex">
              <div className="div1 ">
                <div
                  className=" font-semibold  text-end"
                  style={{ fontSize: "13px" }}
                >
                  Find a{" "}
                </div>
                <div className="font-semibold text-xs">
                  <span
                    className="text-warning font-semibold  "
                    style={{ fontSize: "13px" }}
                  >
                    Store
                  </span>
                </div>
              </div>
              <FontAwesomeIcon icon={faStore} size="2xl" className="m-2" />
            </div>
            <FontAwesomeIcon icon={faHeart} size="2xl" className="mt-2 mx-3" />
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              className="mt-2 mx-3"
            />
          </div>
        </div>
        <hr />
        
        
      </div>
    </>
  );
}

export default Header;
