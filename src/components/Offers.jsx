import React from "react";
import { Link } from "react-router-dom";

/**
 * Desktop-first Offers section
 * - Left: "Limited Time Offer" block with big discount + CTA
 * - Right: 3 sale cards
 *
 * Props (all optional):
 * - headline: string (e.g., "LIMITED TIME OFFER")
 * - discount: string (e.g., "30% OFF")
 * - subtext: string (e.g., "on all electronics")
 * - ctaText: string
 * - onCtaClick: () => void
 * - items: [{ id, title, image, oldPrice, price, badge }]
 */
export default function Offers({
  headline = "LIMITED TIME OFFER",
  discount = "30% OFF",
  subtext = "on all electronics",
  ctaText = "SHOP NOW",
  onCtaClick = () => {},
  items = [],
}) {
  return (
    <section className={`w-full bg-gray-100 `}>
      <div className="max-w-[90%] mx-auto py-12">
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 gap-0">
            {/* Left panel */}
            <div className="col-span-12 p-8 lg:col-span-4 lg:p-10 space-y-6">
              <p className=" font-semibold tracking-wide text-main text-xl">
                {headline}
              </p>
              <h2 className="text-[5.5rem] leading-[1.05] font-extrabold text-redS">
                {discount}
              </h2>
              <p className="text-xl text-main font-semibold">{subtext}</p>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-6 py-3 mt-8 font-semibold text-white transition bg-main rounded-lg hover:bg-mainHover"
              >
                {ctaText}
              </button>
            </div>

            {/* Right cards */}
            <div className="col-span-12 p-6 lg:col-span-8 lg:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((it) => (
                  <div
                    key={it.id}
                    className="relative p-5 transition bg-white border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl overflow-hidden"
                    >
                    {it.badge && (
                      <div className="absolute top-1 left-[-30px] ">
                        <div className="bg-red-600 text-white text-xs font-bold px-9 py-1 pr-20 transform -rotate-45 shadow-md">
                          {it.badge}
                        </div>
                      </div>
                    )}
                    <Link to="/productdetails" className="flex items-center justify-center h-52">
                        <img
                        src={it.image}
                        alt={it.title}
                        className="object-contain max-h-36"
                        />
                    </Link>
                    <div className="mt-4 flex items-center justify-between">
                        <h3 className="font-medium text-sm text-main">{it.title}</h3>
                        <div className="mt-1 text-end">
                          <span className="text-base font-extrabold text-redS">
                            {it.price}
                        </span>
                        {it.oldPrice && (
                            <span className="ml-1 text-xs text-gray-400 line-through">
                            {it.oldPrice}
                            </span>
                        )}
                        
                        </div>
                    </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
