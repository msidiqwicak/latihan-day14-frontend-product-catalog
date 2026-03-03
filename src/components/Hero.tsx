import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-amber-50 rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8">
      {/* Konten Teks */}
      <div className="flex-1 text-center md:text-left z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          “Give <span className="text-[#6ea2b5]"> the Best Love and Care</span>{" "}
          for Your Pet.”
        </h2>
        <p className="text-slate-600 mb-6 text-lg">
          “Monitor your loyal companion’s health schedule, vaccinations, and
          daily activities in one easy-to-use app.”
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button className="bg-[#6ea2b5] hover:bg-[#2b3b42] text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg shadow-zinc-600 transition-all active:scale-95">
            Start now..
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 h-auto text-lg shadow-zinc-600 bg-zinc-400 border-slate-200 hover:bg-white"
          >
            Features
          </Button>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-[500px]">
        <div className="absolute inset-0 bg-amber-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800"
            alt="Anjing dan Kucing Bahagia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
