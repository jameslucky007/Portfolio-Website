
export default function Home() {
  return (

    <>

<div className="relative flex items-center justify-center h-screen bg-black">
      {/* Red Glow Effect */}
      <div className="absolute inset-0 bg-blue-900 opacity-30 blur-[120px]"></div>

      {/* Content */}
      <div className="text-center relative z-10 px-6">
        <h1 className="text-5xl font-bold text-white">
          The only photo and video enhancer you'll ever need
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Transformative technology gives your low-quality visuals a stunning HD upgrade. Restore old photos to incredible detail and elevate your content to a professional level.
        </p>

        {/* Glass Effect Button */}
        <button className="mt-6 px-6 py-3 text-white text-lg font-semibold bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg hover:bg-opacity-20 transition">
          Resume
        </button>
      </div>
    </div>

      
    </>

 
  );
}
