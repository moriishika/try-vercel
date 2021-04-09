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
      <div className="flex-col p-4 bg-white justify-betweem content-between">
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
        <input type="text" className="border-1 mt-3.5 py-3 pl-4 border-black focus:ring-0 focus:border-red-500 block w-full shadow-sm sm:text-sm rounded-md" placeholder="Mau nyari barang apa hari ini?"/>
      </div>
    </main>
  );
}

export default App;
