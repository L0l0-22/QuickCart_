import React from 'react';

export default function DescriptionContent() {
     const leftSpecs = [
    { label: "Product Weight", value: "500 g" },
    { label: "Colour Name", value: "White" },
    { label: "Product Length", value: "6.9 cm" },
    { label: "Product Width", value: "18.8 cm" },
    { label: "What's In The Box", value: "1 Controller" },
    { label: "Model Number", value: "CFI-ZCT1J/CFI-ZCT1G/CFI-ZCT1NA/CFI-ZCP1/CFI-ZCT1W" },
  ];

  const rightSpecs = [
    { label: "Version", value: "KSA Version" },
    { label: "Connection Type", value: "Wireless" },
    { label: "Product Height", value: "18.9 cm" },
    { label: "Type of Console Software", value: "PlayStation 5 (PS5)" },
    { label: "Features", value: "With Microphone, Voice Assistant" },
    { label: "Model Name", value: "DualSense" },
  ];
  return (
    <div id="content1" className="text-gray-800 leading-relaxed space-y-6 mt-5">
      {/* Long Description */}
      <div>
        <h2 className="text-2xl font-bold">Product Overview</h2>
        <p className="mt-4">
          Elevate your gaming with the DualSense Wireless Controller for PS5. Featuring immersive haptic feedback,
          adaptive triggers, and a sleek ergonomic design, this controller redefines your gaming experience.
          Every action, explosion, and impact is felt in real time, bringing your gameplay to life like never before.
        </p>
        <p className="mt-2">
          Whether you're navigating epic storylines or battling online opponents, the DualSense controller provides precision,
          responsiveness, and comfort for hours of uninterrupted gaming.
        </p>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-xl font-semibold">Product Key Features & Highlights</h2>
        <ul className="list-disc marker:text-redS pl-6 mt-2 space-y-2">
          <li>Immersive haptic feedback that responds to in-game actions in real-time</li>
          <li>Adaptive triggers offering dynamic tension for more realistic gameplay</li>
          <li>Ergonomic design for comfortable grip during extended play sessions</li>
          <li>Integrated microphone and built-in speaker for real-time communication</li>
          <li>Compatible with PS5 and select PC games via USB-C connection</li>
        </ul>
      </div>

      {/* Specifications */}
      <div>
        <h2 className="text-xl font-semibold mt-6">Specifications</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[leftSpecs, rightSpecs].map((specList, i) => (
                <div key={i} className="rounded-lg border border-gray-200 overflow-hidden">
                {specList.map((item, index) => (
                    <div
                    key={index}
                    className={`flex justify-between px-4 py-3 ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                    >
                    <span className="text-gray-600 text-sm font-medium w-1/2">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900 w-1/2 text-right">{item.value}</span>
                    </div>
                ))}
                </div>
            ))}
        </div>
        </div>
        </div>
  );
}
