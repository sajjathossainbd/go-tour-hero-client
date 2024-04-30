function TourPackages() {
  return (
    <div>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Tour Packages
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
          <img
            className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
            src="https://i.ibb.co/sV6C122/Sundarban-Tiger.png"
            alt="Shoes"
          />
          <div className="absolute text-white bottom-10 left-14 text-center">
            <h2 className="text-3xl font-bold  font-playfair">Bangladesh</h2>
            <h3 className="text-xl font-bold mt-3">
              <span className="p-2 rounded-lg bg-yellow-500 text-sm">12+</span>{" "}
              Destination
            </h3>
            <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
              Book Now
            </button>
          </div>
        </div>
        <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
          <img
            className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
            src="https://i.ibb.co/6DXG2CW/package3.png"
            alt="Shoes"
          />
          <div className="absolute text-white bottom-10 left-14 text-center">
            <h2 className="text-3xl font-bold  font-playfair">Thailand</h2>
            <h3 className="text-xl font-bold mt-3">
              <span className="p-2 rounded-lg bg-yellow-500 text-sm">20+</span>{" "}
              Destination
            </h3>
            <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
              Book Now
            </button>
          </div>
        </div>
        <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
          <img
            className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
            src="https://i.ibb.co/BPMNffH/package2.png"
            alt="Shoes"
          />
          <div className="absolute text-white bottom-10 left-14 text-center">
            <h2 className="text-3xl font-bold  font-playfair">Indonesia</h2>
            <h3 className="text-xl font-bold mt-3">
              <span className="p-2 rounded-lg bg-yellow-500 text-sm">18+</span>{" "}
              Destination
            </h3>
            <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
              Book Now
            </button>
          </div>
        </div>
        <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
          <img
            className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
            src="https://i.ibb.co/qyB78g5/package1.png"
            alt="Shoes"
          />
          <div className="absolute text-white bottom-10 left-14 text-center">
            <h2 className="text-3xl font-bold  font-playfair">Cambodia</h2>
            <h3 className="text-xl font-bold mt-3">
              <span className="p-2 rounded-lg bg-yellow-500 text-sm">14+</span>{" "}
              Destination
            </h3>
            <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPackages;
