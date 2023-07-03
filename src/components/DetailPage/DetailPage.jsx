import React from "react";

const DetailPage = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-2 d-flex flex-column">
          <button className="btn btn-danger p-2">PRODUCTS</button>
          <button className="btn btn-danger mt-2 p-2">ADD PRODUCT</button>
          <button className="btn btn-danger mt-2 p-2">CATEGORY</button>
          <button className="btn btn-danger mt-2 p-2">USER</button>
          <button className="btn btn-danger mt-2 mb-2 p-2">ORDERS</button>
        </div>

        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Product name / title"
          />
          <select class="form-control mt-4">
            <option>Category</option>
            <option>Others</option>
          </select>
          <input
            type="email"
            className="form-control mt-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product info"
          />
          {/* <div className='row  d-flex justify-content-around mt-4'>
            <div className='col-2 price'>
              <p>Price:</p>
            </div>
            <div className='col-3 price m-0 p-0 justify-content-around'>
              <p>50 x 70</p>
            </div>
            <div className='col-3 price m-0 p-0'>
              <p>70 X 100</p>
            </div>
            <div className='col-3 price m-0 p-0'>
              <p>40 X 100</p>
            </div>

          </div> */}
          <form>
            <div class="row d-flex justify-content-between mt-4">
              <div class="col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>
          <input
            type="email"
            className="form-control mt-4"
            id="exampleInputEmail1"
            placeholder="Heading 2"
          />
          <input
            type="email"
            className="form-control mt-4 mb-4"
            id="exampleInputEmail1"
            placeholder="Info"
          />
          <div className="row d-flex justify-content-between mt-4 mb-4">
            <div class="col-5  form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Add to front page as new product
              </label>
            </div>
            <div class="col-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Add to front page as top seller
              </label>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
            <form className="col-5">
              <div className=" form-group">
                <input
                  type="file"
                  className="form-control-file "
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
            <div className="col-5">
              <button className="btnn mt-2 p-2">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPage;

//  const DetailPage = () => {
//   return (<>
//     <div className="row d-flex justify-content-around mt-4">
//       <div className="col-8">
//         <div className="row ">
//           <div className="col-8 m-0 p-0">
//             <img className="img-fluid" src={furniture} alt="Furniture"/>
//             <div className="row d-flex justify-content-between m-0 p-0 ">
//               <div className="col-3 m-0 p-0">
//                 <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
//               </div>
//               <div className="col-3 m-0 p-0">
//                 <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
//               </div>
//               <div className="col-3 m-0 p-0">
//                 <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
//               </div>
//               <div className="col-3 m-0 p-0">
//                 <img className="img-fluid paddingrl mt-4" src={furniture} alt="Furniture"/>
//               </div>
//             </div>
//             <br /><br />
//             <div className="row">
//               <div className="col-12">
//                 <h2>Heading</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur voluptates atque sunt facilis ipsam labore, recusandae maiores ut porro, ab, saepe suscipit incidunt accusantium nam nihil quam dicta ad? Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. Et, ab culpa officiis eaque alias perferendis unde facere recusandae ipsa eveniet laboriosam hic? Commodi fuga odit nobis accusantium iure, necessitatibus neque.</p>
//               </div>

//             </div>
//             <br /><br />
//           </div>
//           <div className="col-3 mt-0 pl-4 ">
//             <div className="col-12  para">
//             <h1>Title / Heading</h1>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             <p>Lorem ipsum dolor sit amet</p>
//             </div>
//             <br /> <br />
//             <div className='col-12 '>
//               <h5 className='bold'>CHOOSE SIZE</h5>
//               <div className='row'>
//                 <div className='col-3'>
//                   <button className='btnn btn btn-danger p-2'>50 X 70</button>
//                 </div>
//                 <div className='col-3'>
//                   <button className='btn btn-dark p-2'>70 X 100</button>
//                 </div>
//                 <div className='col-3'>
//                   <button className='btnn btn btn-danger p-2'>40 X 100</button>
//                 </div>
//               </div>
//             </div>

//             <br /> <br />
//             <div className='col-12 '>
//               <h4 className='bold'>130$</h4>
//                   <button className='btnn btn btn-danger p-2'>ADD TO CHART</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//    </>
//   )
// }

// export default DetailPage
