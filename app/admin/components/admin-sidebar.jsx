"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: '📊'
  },
  {
    name: 'Projets',
    href: '/admin/projects',
    icon: '💼'
  },
  {
    name: 'Messages',
    href: '/admin/messages',
    icon: '📧'
  },
  {
    name: 'Statistiques',
    href: '/admin/stats',
    icon: '📈'
  },
  {
    name: 'Paramètres',
    href: '/admin/settings',
    icon: '⚙️'
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Administration</h2>
      </div>
      
      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-[#16f2b3] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Bouton de déconnexion */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-2 mb-4"
        >
          <span>🚪</span>
          <span>Déconnexion</span>
        </button>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 text-center">
            Portfolio Admin v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
