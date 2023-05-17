const ProductDetails = ({product, addToCart})=>(
    <div className="container mb-5">
  <div className="row d-flex flex-row">
    <div className="col-md-5 product-image">
      <img className="img-fluid" src={`/images/${product.image}.jpg`} alt="" />
    </div>
    <div className="col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first">
      <img className="img-fluid" src={`/images/${product.images[0]}.jpg`} alt="" />
      <img className="img-fluid" src={`/images/${product.images[1]}.jpg`} alt="" />
      <img className="img-fluid" src={`/images/${product.images[2]}.jpg`} alt="" />
    </div>
    <div className="col-md-5">
      <h6 className="text-uppercase text-secondary">{product.name}</h6>
      <h2 className="fs-3">{product.category}</h2>
      <h5 className="text-secondary fs-6 fw-bold">${product.price}</h5>
      <div className="text-secondary text-small">color :</div>
      <div className="my-2">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={product.color=='red'} />
          <label className="btn btn-danger color-label" htmlFor="btnradio1">
            <i className="bi bi-check2" />
          </label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={product.color=='green'}/>
          <label className="btn btn-success color-label" htmlFor="btnradio2">
            <i className="bi bi-check2" />
          </label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked={product.color=='black'}/>
          <label className="btn btn-dark color-label" htmlFor="btnradio3">
            <i className="bi bi-check2" />
          </label>
        </div>
      </div>
      <div className="text-secondary text-small">size :</div>
      <div className="my-2">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="size" id="btnradio4" autoComplete="off" checked={product.size=='S'} />
          <label className="btn btn-outline-dark" htmlFor="btnradio4">S</label>
          <input type="radio" className="btn-check" name="size" id="btnradio5" autoComplete="off" checked={product.size=='M'} />
          <label className="btn btn-outline-dark" htmlFor="btnradio5">M</label>
          <input type="radio" className="btn-check" name="size" id="btnradio6" autoComplete="off" checked={product.size=='L'}/>
          <label className="btn btn-outline-dark" htmlFor="btnradio6">L</label>
        </div>
      </div>
      <button className="btn btn-dark w-100 my-5" onclick={()=>addToCart(product)}><i className="bi bi-cart-plus-fill" />
        Add to Cart </button>
      <div>
        <span className="text-secondary text-small">Details :</span>
        <div className="accordion accordion-flush" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's details.</strong> All our prouducts are hosted on this website through the most care and love.All the items provided are of high quality and represent this websites work ethics. Our products some from various companies liek Sony,Apple,Canon, etc and we help sell their products through our prestiged website.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's details.</strong> All our prouducts are hosted on this website through the most care and love.All the items provided are of high quality and represent this websites work ethics. Our products some from various companies liek Sony,Apple,Canon, etc and we help sell their products through our prestiged website.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's details.</strong> All our prouducts are hosted on this website through the most care and love.All the items provided are of high quality and represent this websites work ethics. Our products some from various companies liek Sony,Apple,Canon, etc and we help sell their products through our prestiged website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



)

export default ProductDetails;