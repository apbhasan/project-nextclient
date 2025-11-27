"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#features", label: "Features" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400" />
          <span className="text-lg font-semibold tracking-tight">
            Luxe<span className="text-emerald-400">Mart</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}

          {!session && (
            <button
              onClick={() => signIn()}
              className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium shadow-md shadow-indigo-500/30 transition hover:bg-indigo-500"
            >
              Login / Register
            </button>
          )}

          {session && (
            <div className="relative">
              <button
                onClick={() => setDropdown((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm hover:border-emerald-400"
              >
                <span className="h-7 w-7 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400" />
                <span className="max-w-[120px] truncate text-slate-200">
                  {session.user?.name || session.user?.email}
                </span>
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
                  <div className="border-b border-slate-800 px-4 py-3 text-xs text-slate-400">
                    Signed in as
                    <div className="truncate text-slate-100">
                      {session.user?.email}
                    </div>
                  </div>
                  <Link
                    href="/dashboard/add-product"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/dashboard/manage-products"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300 hover:text-emerald-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!session ? (
              <button
                onClick={() => signIn()}
                className="mt-2 w-full rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Login / Register
              </button>
            ) : (
              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-400">
                  Signed in as {session.user?.email}
                </div>
                <Link
                  href="/dashboard/add-product"
                  className="block text-sm text-slate-200 hover:text-emerald-400"
                >
                  Add Product
                </Link>
                <Link
                  href="/dashboard/manage-products"
                  className="block text-sm text-slate-200 hover:text-emerald-400"
                >
                  Manage Products
                </Link>
                <button
                  onClick={() => signOut()}
                  className="mt-1 text-sm text-red-400"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
