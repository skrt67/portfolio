import AdminNavbar from "./components/admin-navbar";
import AdminSidebar from "./components/admin-sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

export const metadata = {
  title: "Dashboard Admin - Portfolio Altan DEPELI",
  description: "Interface d'administration du portfolio",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
