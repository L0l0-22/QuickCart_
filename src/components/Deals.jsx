import React from 'react';
import banner from "../assets/banner1.jfif";
import banner2 from "../assets/banner2.jfif";
import men from "../assets/men.png";
import rings from "../assets/rings.png";
import iphone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import playstation from "../assets/playstation.png";
import kitchen from "../assets/kitchen2.png";
import flamingo from "../assets/flamingo.png";
import speaker from "../assets/speaker.png";

export default function Deals() {
const reasonsToShop = [
    {
    title: 'Kitchen Essentials',
    desc: 'Top picks for your home',
    img: kitchen,
    },
    {
    title: 'Audio Gear',
    desc: 'Best-selling speakers',
    img: speaker,
    },
    {
    title: 'Top Smartphones',
    desc: 'Latest tech trends',
    img: iphone,
    },
    {
    title: 'Gaming Must-Haves',
    desc: 'Playstation & more',
    img: playstation,
    },
];
const megaDeals = [
    {
    label: 'Fashion deals',
    title: 'Stylish Menswear',
    desc: 'Up to 40% off',
    img: men,
    },
    {
    label: 'Toys deals',
    title: 'Summer Toys Collection',
    desc: 'Up to 35% off',
    img: flamingo,
    },
    {
    label: 'Home deals',
    title: 'Elegant Rings Set',
    desc: '174.95 EGP',
    old: '197',
    img: rings,
    },
    {
    label: 'Tech deals',
    title: 'Lenovo Laptop Y540',
    desc: '8499 EGP',
    old: '12900',
    img: laptop,
    },
];

return (
    <section className="bg-gray-100 py-10 px-4">
    <div className="lg:mx-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="bg-white p-4 flex flex-col rounded-lg">
        <h2 className="mb-5 text-main font-bold text-2xl">More reasons to shop</h2>
        <div className="grid grid-cols-2 gap-4">
            {reasonsToShop.map((item, i) => (
            <div
                key={i}
                className="bg-gray-100 rounded-lg p-4 shadow-sm flex flex-col h-full justify-between"
            >
                <img
                src={item.img}
                alt={item.title}
                className="w-full h-28 object-contain mx-auto mb-3"
                />
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
            </div>
            ))}
        </div>
        </div>

        {/* Middle Column */}
        <div className="bg-red-50 rounded-lg p-4 flex flex-col">
        <h2 className="mb-5 text-main font-bold text-2xl">Mega Deals</h2>
        <div className="grid grid-cols-2 gap-4">
            {megaDeals.map((deal, i) => (
            <div
                key={i}
                className="bg-white rounded-lg p-3 shadow-sm relative flex flex-col h-full justify-between"
            >
                <div className="absolute top-0 right-0 bg-[#f9d0cf] text-redS text-xs font-bold px-2 py-1 rounded-bl-md">
                {deal.label}
                </div>
                <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-[6.5rem] object-contain mb-2 mt-5"
                />
                <h4 className="text-xs font-medium">{deal.title}</h4>
                {deal.old ? (
                <div className="mt-1 text-sm font-bold">
                    <span className="line-through text-gray-500 mr-2">{deal.old}</span>
                    <span className="text-black">{deal.desc}</span>
                </div>
                ) : (
                <p className="text-sm font-bold mt-1">{deal.desc}</p>
                )}
            </div>
            ))}
        </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-4 flex flex-col rounded-lg">
        <h2 className="mb-5 text-main font-bold text-2xl">In Focus</h2>
        <div className="rounded-xl overflow-hidden flex flex-col gap-4">
            <img src={banner} className="w-full h-[12.2rem] object-cover rounded-xl" />
            <img src={banner2} className="w-full h-[12.2rem] object-cover rounded-xl" />
        </div>
        </div>
    </div>
    </section>
);
}
