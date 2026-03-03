import { PawPrint, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-amber-50 border-t mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#6ea2b5] rounded-lg flex items-center justify-center text-white">
                <PawPrint size={18} />
              </div>
              <span className="font-bold text-xl tracking-tight">PetCare</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The best solution for pet care management. 
              We help pet owners stay organized and happy.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5">Services</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li className="hover:text-amber-500 cursor-pointer transition-colors">See the Doctor</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Home Grooming</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Vaccine Information</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Pet Community</li>
            </ul>
          </div>

      
          <div>
            <h4 className="font-bold text-slate-900 mb-5">Contact</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-500" />
                Bandung, Indonesia
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-500" />
                +62 812-9999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-500" />
                hello@petcare.com
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-bold text-slate-900 mb-5">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
            </div>
          </div>

        </div>

       
        <div className="border-t border-slate-200 mt-12 pt-6 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 PetCare Management System. 
            Made with ❤️ for all animal lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}