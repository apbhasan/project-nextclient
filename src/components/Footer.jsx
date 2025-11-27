export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} LuxeMart. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-emerald-400">
            Privacy
          </a>
          <a href="#" className="hover:text-emerald-400">
            Terms
          </a>
          <a href="#" className="hover:text-emerald-400">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
