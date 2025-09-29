import { memo } from "react";
import categoryImage from "../../assets/category_image.png";

const Category = () => {
  return (
    <section className="bg-[#3B3B3B] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Categories</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="bg-[#2A2A2E] rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={categoryImage}
                alt="category"
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Robotica</h3>
              <p className="text-gray-400 text-sm">
                Total Sales: 34.53 ETH
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Category);
