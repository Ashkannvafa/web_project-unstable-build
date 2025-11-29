"use client";
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { usePathname } from 'next/navigation';
import { Hexagon } from 'lucide-react'; 

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  // Define Links
  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Support', path: '/support' },
  ];

  const appLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'My Tracks', path: '/tracks' },
    { name: 'History', path: '/history' },
    { name: 'My Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
  {/* The Icon */}
  <Hexagon className="text-neon-purple w-8 h-8 fill-neon-purple/20 animate-pulse" strokeWidth={2.5} />

  {/* The Text */}
  <Link href="/" className="text-2xl font-extrabold tracking-wider text-white hover:text-neon-cyan transition-colors">
    HARMONIQ
  </Link>
</div>

          {/* Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {(user ? appLinks : publicLinks).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                    ${pathname === link.path ? 'text-neon-cyan' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons (Right Side) */}
          <div className="hidden md:block">
            {user ? (
              <button 
                onClick={logout}
                className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full border border-red-500/50 hover:bg-red-500/40 transition"
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-5 py-2 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}