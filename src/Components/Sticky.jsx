import React from 'react'

function Sticky() {
  return (
    <>
    {/* items available nav */}
    <div className="container container-fluid" style={{position:'sticky', top:'0',zIndex:'1'}}>
    <div className="row itemContent bg-light my-3 h-50" >
          <div className="col-md-2"></div>

          <div className="col-md-8 d-flex  d-none d-md-flex justify-content-between p-3 "  >
              <div className="divvvv me-2">
              <h6 >Furniture</h6>
              </div>
              <div className="divvvv  me-2">
              <h6>Sofa&Seating</h6>
              </div>
              <div className="divvvv  me-2">
              <h6>Mattresses</h6>
              </div>
              <div className="divvvv d-flex   me-2">
              <h6>Home </h6>
              <h6>Decor</h6>
              </div>
              <div className="divvvv  me-2">
              <h6>Furnishings</h6>
              </div>
              <div className="divvvv  me-2">
              <h6>Lamps&Lightings</h6>
              </div>
              <div className="divvvv me-2">
              <h6>Kitchen&Dining</h6>
              </div>
              <div className="divvvv me-2">
              <h6>Modular</h6>
              </div>
              
          </div>

          <div className="col-md-2"></div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Sticky