import ButtonOrange from "../components/buttons";
import CategorysComponent from "../components/categorysComponent";
import Footer from "../components/footer";
import ItemCateg from "../components/item-categ";
import Navbar from "../components/navBar";
import data from "../store/data";

const CategoryPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="mb-[64px] box-border h-[102px] w-[375px] bg-black pt-[15px] text-center text-[30px] font-bold uppercase tracking-[2px] text-white ">
        {data[0].category}
      </h1>
      <ItemCateg data={data} />
      <CategorysComponent />
      <Footer />
    </div>
  );
};

export default CategoryPage;
