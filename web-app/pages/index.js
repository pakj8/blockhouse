import Loader from "@/components/Loader";
import { fetchCryptos } from "@/redux/slice/cryptoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const filteredData = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#141416] text-gray-100 h-screen flex w-full gap-4">
      <aside className="w-94 bg-[#1B1E29] p-4 hidden md:flex flex-col">
        <div className="text-xl font-bold mb-8">Cryption</div>

        <nav className="flex flex-col space-y-4">Nav Links</nav>
      </aside>
      <div className="mt-4 container mx-auto lg:px-0 px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredData?.map((data, index) => {
            if (index <= 2)
              return (
                <div
                  key={index}
                  className="bg-[#212431] p-4 rounded-lg shadow-md"
                >
                  <div className="text-sm text-gray-400 uppercase">
                    {data?.symbol}
                  </div>
                  <div className="text-2xl font-bold mt-2">
                    ${data?.current_price.toLocaleString()}
                  </div>
                  <div
                    className={`${
                      Math.sign(data?.price_change_percentage_24h) === -1
                        ? "text-red-400"
                        : "text-green-400"
                    }  mt-1`}
                  >
                    {Math.sign(data?.price_change_percentage_24h) === -1
                      ? ""
                      : "+"}
                    {(
                      Math.floor(data?.price_change_percentage_24h * 10) / 10
                    ).toFixed(1)}
                    %
                  </div>
                </div>
              );
          })}
        </section>

        <section className=" w-full mt-4">
          <div className="bg-[#212431] w-full p-4 rounded-lg shadow-md ">
            <h3 className="font-semibold mb-4">Proposition to Buy</h3>

            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search cryptocurrencies..."
                className="border border-gray-700 bg-[#141416] p-2 flex-grow 
                             rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-md"
                onClick={() => dispatch(fetchCryptos())}
              >
                Refresh
              </button>
            </div>

            {loading && <Loader />}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
              <div className="overflow-x-scroll">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                      <th className="py-2">Name</th>
                      <th className="py-2">Price (USD)</th>
                      <th className="py-2">24h</th>
                      <th className="py-2">24h Volume</th>
                      <th className="py-2">Market map</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((crypto) => (
                      <tr
                        key={crypto.id}
                        className="border-b border-gray-700 hover:bg-[#2A2F3F]"
                      >
                        <td className="py-2 px-4">{crypto.name}</td>
                        <td className="py-2 px-4">
                          ${crypto.current_price.toLocaleString()}
                        </td>
                        <td
                          className={`py-2 px-4 ${
                            Math.sign(crypto?.price_change_percentage_24h) ===
                            -1
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {Math.floor(crypto.price_change_percentage_24h * 10) /
                            10}
                          %
                        </td>
                        <td
                          className={`py-2 px-4 
                             `}
                        >
                          ${crypto.total_volume.toLocaleString()}
                        </td>
                        <td
                          className={`py-2 px-4 
                             `}
                        >
                          ${crypto.market_cap.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
