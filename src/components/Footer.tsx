export default function Footer() {
  return (
    <footer className="bg-koda-black pt-20 pb-10 border-t border-koda-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="w-full flex justify-center items-center gap-4 md:gap-8 mb-16">
          <img 
            src="https://storage.googleapis.com/aistudio-chat-prod-user-assets/00/2026/03/09/user_102047647248185566673/01jns24s09f7s94r43r6k0t1q4/image_3.png" 
            alt="KODA Logo" 
            className="h-[10vw] w-auto invert opacity-5" 
          />
          <h2 className="font-display font-bold text-[15vw] leading-none tracking-tighter uppercase text-koda-white/5 select-none">
            KODA
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-koda-white/10 pt-8">
          <div className="text-koda-white/40 text-xs font-mono uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} KODA MUSIC. Все права защищены.
          </div>
          
          <a href="#" className="text-koda-white/40 hover:text-koda-accent text-xs font-mono uppercase tracking-widest transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
