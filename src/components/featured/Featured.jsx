import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/219997926.webp?k=55b249a3c28228d9180c608eeeb54f31242de4b4e263efdb8ad938ec4cc4ebda&o="
          alt="featured_Image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>City of Literature 123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/294076296.webp?k=81795be444e0381c2858938eb4a833314c879734085589105a9973c51ab32dc8&o="
          alt="featured_Image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>City of Literature 123 </h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/321508463.webp?k=100735c66491b9ae795a06175feed7d4c0558fb5acecd1c8d3f8dbe40306cbf7&o="
          alt="featured_Image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>108Hotel</h1>
          <h2>City of Literature 123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
