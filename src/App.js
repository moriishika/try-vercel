import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [date, setDate] = useState(null);
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch('/api/date');
  //     const newDate = await res.text();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);
  return (
    <main>
      <div className="flex-col p-4 bg-white justify-betweem content-between sticky top-0">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Bagi Barang</h1>
          <select className="py-0 px-1 w-40 h-7 border-b-2 border-0">
            <option>Pilih Wilayah</option>
            <option>Bali</option>
            <option>Jakarta</option>
            <option>Jawa Barat</option>
            <option>Jawa Timur</option>
            <option>Jawa Tengah</option>
          </select>
        </div>
        <input type="text" className="border-1 mt-3.5 py-3 pl-4 border-black focus:ring-0 focus:border-red-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Mau nyari barang apa hari ini?" />
      </div>

      <div className="grid grid-cols-1 place-items-center w-full">
      <div className="w-80 xl:w-2/5 my-5 p-0">
        <div className="pb-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="MoriiUta.png" className="w-12 rounded-full" />
            <p className="ml-3 font-medium">Morii Uta</p>
          </div>
          <button className="bg-white h-8 px-2 rounded-xl shadow-sm font-medium">Laporkan</button>
        </div>
        <div className="flex-col justify-center">
          <img src="61ev4nvYOTL.jpg" className="rounded-xl" />
          <div className="flex w-full h-6 justify-center items-center">
            <div className="w-3.5 bg-white border-black border-2 h-3.5 mx-1 mt-1 rounded-full"></div>
            <div className="w-3.5 bg-black h-3.5 mx-1 mt-1 rounded-full"></div>
            <div className="w-3.5 bg-black h-3.5 mx-1 mt-1 rounded-full"></div>
            <div className="w-3.5 bg-black h-3.5 mx-1 mt-1 rounded-full"></div>
            <div className="w-3.5 bg-black h-3.5 mx-1 mt-1 rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-xl mt-1 font-semibold" >Figure Gadis sange sama judi</h1>
        </div>
      </div>
      <div className="w-80 bg-white">
        <div className="p-4 pr-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="MoriiUta.png" className="w-12 rounded-full" />
            <p className="ml-3 font-medium">Morii Uta</p>
          </div>
          <button className="bg-white h-8 px-2 rounded-xl shadow-sm font-medium">Laporkan</button>
        </div>
      </div>
      </div>
    </main>
  );
}

export default App;
