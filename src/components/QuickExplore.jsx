function QuickExplore() {
  return (
    <div>
      <h2 className="text-4xl mb-8 mt-2 font-bold text-center font-playfair">
        Quick Explore
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        <div className="card bg-[#E6D9FF] shadow-xl">
          <div className="card-body text-center mb-0 pb-0">
            <h2 className="text-2xl font-playfair mt-6">Book Your</h2>
            <h1 className="text-3xl font-bold font-playfair">Travel Package</h1>
            <div className="text-center">
              <button className="btn btn-active bg-[#31C292] hover:bg-[#48a586] text-white mt-6 w-36">
                Book Now
              </button>
            </div>
          </div>
          <figure className="px-10">
            <img src="https://i.ibb.co/68fd10v/travel.png" alt="travel" />
          </figure>
        </div>
        <div className="card bg-[#F1EAE3] shadow-xl">
          <div className="card-body text-center mb-0 pb-0">
            <h2 className="text-2xl font-playfair mt-6">Explore</h2>
            <h1 className="text-3xl font-bold font-playfair">Destinations</h1>
            <div className="text-center">
              <button className="btn btn-active bg-[#31C292] hover:bg-[#48a586] text-white mt-6 w-36">
                Explore
              </button>
            </div>
          </div>
          <figure className="px-10">
            <img
              src="https://i.ibb.co/529H4g9/destination.png"
              alt="destination"
            />
          </figure>
        </div>
        <div className="card bg-[#E9FCE7] shadow-xl">
          <div className="card-body text-center mb-0 pb-0">
            <h2 className="text-2xl font-playfair mt-6">Over +42,000</h2>
            <h1 className="text-3xl font-bold font-playfair">Hotels</h1>
            <div className="text-center">
              <button className="btn btn-active bg-[#31C292] hover:bg-[#48a586] text-white mt-6 w-36">
                Book Now
              </button>
            </div>
          </div>
          <figure className="px-10">
            <img src="https://i.ibb.co/hZcXSkN/hotels.png" alt="hotel" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default QuickExplore;
