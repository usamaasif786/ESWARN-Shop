import React from "react"
import furniture from './images/furniture.jpg'
 const Contact = () => {
  return (<>
    <div className="row d-flex justify-content-around mt-4">
      <div className="col-8">
        <div className="row ">
          <div className="col-8 m-0 p-0">
            <img className="img-fluid" src={furniture} alt="Furniture"/>
            <div className="row d-flex justify-content-between m-0 p-0 ">
              <div className="col-3 m-0 p-0">
                <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
              </div>
              <div className="col-3 m-0 p-0">
                <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
              </div>
              <div className="col-3 m-0 p-0">
                <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
              </div>
              <div className="col-3 m-0 p-0">
                <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col-12">
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur voluptates atque sunt facilis ipsam labore, recusandae maiores ut porro, ab, saepe suscipit incidunt accusantium nam nihil quam dicta ad? Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. Et, ab culpa officiis eaque alias perferendis unde facere recusandae ipsa eveniet laboriosam hic? Commodi fuga odit nobis accusantium iure, necessitatibus neque.</p>
              </div>

            </div>
            <br /><br />
          </div>
          <div className="col-3 mt-0 pl-4 ">
            <div className="col-12  para">
            <h1>Title / Heading</h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            </div>
            <br /> <br />
            <div className='col-12 '>
              <h5 className='bold'>CHOOSE SIZE</h5>
              <div className='row'>
                <div className='col-3'>
                  <button className='btnn btn btn-danger p-2'>50 X 70</button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-dark p-2'>70 X 100</button>
                </div>
                <div className='col-3'>
                  <button className='btnn btn btn-danger p-2'>40 X 100</button>
                </div>
              </div>
            </div>

            <br /> <br />
            <div className='col-12 '>
              <h4 className='bold'>130$</h4>
                  <button className='btnn btn btn-danger p-2'>ADD TO CHART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact