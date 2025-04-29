 import React from "react";
 function BookingPage() {

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-12">
          <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-10 border-t-4 border-black">
            <h2 className="text-3xl font-bold text-center text-black mb-2">Book Your Event</h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and we’ll help make your occasion unforgettable.
            </p>
    
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                  />
                </div>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Event Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                  />
                </div>
              </div>
    
              <div>
                <label className="text-sm font-medium text-gray-700">Number of Guests</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                />
              </div>
    
              <div>
                <label className="text-sm font-medium text-gray-700">Additional Notes</label>
                <textarea
                  rows="4"
                  placeholder="Special requests, dietary needs..."
                  className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
                ></textarea>
              </div>
    
              <button
                type="submit"
                className="w-full bg-black text-white text-lg py-3 rounded-full hover:bg-gray-800 transition"
              >
                Submit Reservation
              </button>
            </form>
          </div>
        </div>
      );
    }  
  export default BookingPage;