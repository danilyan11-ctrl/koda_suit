import logo from "../assets/logo.PNG";

export default function Footer() {
  return (
    <footer className="bg-koda-black py-16 md:py-20">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:px-12">

        <img src={logo} className="h-12 opacity-20 invert" />

        <p className="text-xs tracking-wide text-koda-white/40">
          © 2026 KODA MUSIC
        </p>

      </div>

    </footer>
  );
}
