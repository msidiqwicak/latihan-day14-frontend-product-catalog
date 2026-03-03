import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PetCard } from "./components/PetCard";
import { Footer } from "./components/Footer";
import { PET_DATA } from "./data/pets";
import { Button } from "./components/ui/button";
import { Plus, Dog } from "lucide-react";
import { Register } from "./pages/register"
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPets = PET_DATA.filter(pet => 
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#FDFDFD] font-sans text-slate-900">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-20">
        <Hero />

        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Dog className="bg-[#6ea2b5]" /> My Pets
            </h3>
            <p className="text-slate-500 text-sm">Dashboard for your active pets</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full cursor-pointer">
            <Plus className="w-4 h-4 mr-2" /> Add New
          </Button>
        </div>

      
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
             <p className="text-slate-500 font-medium">No pets found matching "{searchQuery}"</p>
          </div>
        )}
         <div>
        <Register />
       </div>
      </main>

      <Footer />
    </div>
  );
}