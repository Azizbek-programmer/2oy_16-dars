import { memo } from "react";
import categoryImage from "../../assets/category_image.png";

const Category = () => {
  return (
    <section className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#3B3B3B] rounded-lg p-4 flex flex-col items-center">
            <img
              src={categoryImage}
              alt="category"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Robotica</h3>
            <p className="text-gray-400 text-sm">Total Sales: 34.53 ETH</p>
          </div>

          <div className="bg-[#3B3B3B] rounded-lg p-4 flex flex-col items-center">
            <img
              src={categoryImage}
              alt="category"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Metaverse</h3>
            <p className="text-gray-400 text-sm">Total Sales: 28.12 ETH</p>
          </div>

          <div className="bg-[#3B3B3B] rounded-lg p-4 flex flex-col items-center">
            <img
              src={categoryImage}
              alt="category"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Artworks</h3>
            <p className="text-gray-400 text-sm">Total Sales: 42.77 ETH</p>
          </div>

          <div className="bg-[#3B3B3B] rounded-lg p-4 flex flex-col items-center">
            <img
              src={categoryImage}
              alt="category"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Gaming</h3>
            <p className="text-gray-400 text-sm">Total Sales: 19.05 ETH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Category);
