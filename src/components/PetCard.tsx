import { Card, CardContent } from "../components/ui/card";
import type { Pet } from "../data/pets";

export const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-none bg-amber-50">
      <div className="h-48 overflow-hidden">
        <img src={pet.img} alt={pet.name} className="w-full h-full object-cover cursor-pointer" />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-800">{pet.name}</h3>
          <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full uppercase font-bold">
            {pet.type}
          </span>
        </div>
        <p className="text-sm text-slate-500">{pet.breed}</p>
      </CardContent>
    </Card>
  );
};