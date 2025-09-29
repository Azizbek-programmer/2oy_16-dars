import { memo } from "react";
import left_image from "../../assets/collagations_left.png";
import middle_image from "../../assets/collagations_middle.png";
import right_image from "../../assets/collagations_right.png";

const Collections = () => {
  return (
    <section className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Trending Collection</h2>
        <p className="text-gray-400 mt-2">
          Checkout Our Weekly Updated Trending Collection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className=" rounded-lg p-3">
            <img src={left_image} alt="collection left" className="w-full rounded-md" />
            <div className="flex gap-3 items-center mt-3">
              <div className="flex gap-2">
                <img src={left_image} alt="preview" className="w-full h-20 rounded-md" />
                <img src={left_image} alt="preview" className="w-full h-20 rounded-md" />
              </div>
              <span className="bg-purple-500 w-20 h-20 text-center justify-center px-3 py-1 rounded-lg text-sm">1025+</span>
            </div>
            <h3 className="mt-3 font-semibold">DSGN Animals</h3>
            <p className="text-gray-400 text-sm">MrFox</p>
          </div>
          <div className=" rounded-lg p-3">
            <img src={middle_image} alt="collection middle" className="w-full rounded-md" />
            <div className="flex gap-3 items-center mt-3">
              <div className="flex gap-2">
                <img src={middle_image} alt="preview" className="w-20 h-20 rounded-md" />
                <img src={middle_image} alt="preview" className="w-20 h-20 rounded-md" />
                <img src={middle_image} alt="preview" className="w-20 h-20 rounded-md" />
              </div>
              <span className="bg-purple-500 w-20 h-20 text-center justify-center px-3 py-1 rounded-lg text-sm">1025+</span>
            </div>
            <h3 className="mt-3 font-semibold">Magic Mushrooms</h3>
            <p className="text-gray-400 text-sm">Shroomie</p>
          </div>
          <div className=" rounded-lg p-3">
            <img src={right_image} alt="collection right" className="w-full rounded-md" />
            <div className="flex gap-3 items-center mt-3">
              <div className="flex gap-2">
                <img src={right_image} alt="preview" className="w-20 h-20 rounded-md" />
                <img src={right_image} alt="preview" className="w-20 h-20 rounded-md" />
              </div>
              <span className="bg-purple-500 w-20 h-20 text-center justify-center px-3 py-1 rounded-lg text-sm">1025+</span>
            </div>
            <h3 className="mt-3 font-semibold">Disco Machines</h3>
            <p className="text-gray-400 text-sm">BeKind2Robots</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Collections);
