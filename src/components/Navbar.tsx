import { Search, Bell, PawPrint } from "lucide-react";
import { Input } from "../components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const Navbar = ({ onSearch }: { onSearch: (v: string) => void }) => {
  return (
    <nav className="flex items-center justify-between px-15 py-6 bg-[#6ea2b5] border-b-0 w-full">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-zinc-700">
          <PawPrint size={18} />
        </div>
        <span className="font-bold text-lg text-slate-800">Pet Care</span>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <Input
          placeholder="Search pet, tasks..."
          className="pl-10 rounded-full bg-slate-50 border-none focus-visible:ring-1"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-10 flex-shrink-0">
        <Bell className="text-slate-50 w-5 h-5 cursor-pointer" />

        {/* Avatar Shadcn */}
        <Avatar className="w-10 h-10 cursor-pointer border border-slate-200">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User Avatar"
            className="object-cover"
          />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
