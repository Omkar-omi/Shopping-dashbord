import ShopingNavbar from "./ShopingNavbar";
import CarouselDisplay from "./CarouselDisplay";
import ItemDetails from "./ItemDetails";

const ShopingHome = () => {
  return (
    <div className="d-flex flex-column">
      <ShopingNavbar />
      <CarouselDisplay />
      <div className="card-container">
        <ItemDetails />
      </div>
    </div>


  );
}

export default ShopingHome;