import { useLocation } from "react-router-dom";
import ButtonOrange from "../components/buttons";
import CategorysComponent from "../components/categorysComponent";
import Footer from "../components/footer";
import ItemCateg from "../components/item-categ";
import Navbar from "../components/navBar";
import data from "../store/data";

const CategoryPage = () => {
  const location = useLocation();
  const contentType = location.state;
  console.log(contentType);

  const Content = () => {
    if (contentType === "headphones") {
      return (
        <div>
          <ItemCateg flexReverse={false} item={data[1]} id={1} />
          <ItemCateg flexReverse={true} item={data[2]} id={2} />
          <ItemCateg flexReverse={false} item={data[3]} id={3} />
        </div>
      );
    }
    if (contentType === "speakers") {
      return (
        <div>
          <ItemCateg flexReverse={false} item={data[4]} id={4} />
          <ItemCateg flexReverse={true} item={data[5]} id={5} />\
        </div>
      );
    }
    if (contentType === "earphones") {
      return (
        <div>
          <ItemCateg item={data[0]} id={0} />
        </div>
      );
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="mb-[64px] box-border h-[102px] w-full bg-black pt-[15px] text-center text-[30px] font-bold uppercase tracking-[2px] text-white md:h-[246px] md:pt-[80px] md:text-[40px] xl:h-[239px]">
        {contentType}
      </h1>
      <div className=" md:px-[40px]">
        <Content />
        <CategorysComponent />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
