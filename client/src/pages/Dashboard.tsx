import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  BarChart3,
  Brain,
  TrendingUp,
  Zap,
  FileText,
  MessageCircle,
  Info,
  Users,
  Github,
  Rocket,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { toast } from "sonner";

// Import page components
import HomeDashboard from "./dashboard/HomeDashboard";
import DiseasePrediction from "./dashboard/DiseasePrediction";
import ExplainableAI from "./dashboard/ExplainableAI";
import DatasetAnalytics from "./dashboard/DatasetAnalytics";
import ModelPerformance from "./dashboard/ModelPerformance";
import PDFReportGenerator from "./dashboard/PDFReportGenerator";
import CardioBot from "./dashboard/CardioBot";
import AboutProject from "./dashboard/AboutProject";
import ProjecrAuthor from "./dashboard/ProjectAuthor";

/**
 * Dashboard Layout Component
 * Design: Premium Medical Dashboard with fixed sidebar navigation
 * Features: Multi-page navigation, user authentication, logout functionality
 */

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home Dashboard", icon: <BarChart3 className="w-5 h-5" />, color: "text-blue-400" },
  { id: "prediction", label: "Disease Prediction", icon: <Heart className="w-5 h-5" />, color: "text-red-400" },
  { id: "shap", label: "Explainable AI", icon: <Brain className="w-5 h-5" />, color: "text-purple-400" },
  { id: "analytics", label: "Dataset Analytics", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-400" },
  { id: "performance", label: "Model Performance", icon: <Zap className="w-5 h-5" />, color: "text-yellow-400" },
  { id: "report", label: "PDF Report Generator", icon: <FileText className="w-5 h-5" />, color: "text-orange-400" },
  { id: "chatbot", label: "CardioBot AI", icon: <MessageCircle className="w-5 h-5" />, color: "text-cyan-400" },
  { id: "about", label: "About Project", icon: <Info className="w-5 h-5" />, color: "text-indigo-400" },
  { id: "team", label: "Team Members", icon: <Users className="w-5 h-5" />, color: "text-pink-400" },
];

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("cardio_auth");
    const email = localStorage.getItem("cardio_user");
    if (!auth) {
      setLocation("/login");
      return;
    }
    setUserEmail(email || "User");
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("cardio_auth");
    localStorage.removeItem("cardio_user");
    localStorage.removeItem("cardio_remember");
    toast.success("Logged out successfully");
    setLocation("/login");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomeDashboard />;
      case "prediction":
        return <DiseasePrediction />;
      case "shap":
        return <ExplainableAI />;
      case "analytics":
        return <DatasetAnalytics />;
      case "performance":
        return <ModelPerformance />;
      case "report":
        return <PDFReportGenerator />;
      case "chatbot":
        return <CardioBot />;
      case "about":
        return <AboutProject />;
      case "team":
        return <ProjecrAuthor />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0F172A]">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-72" : "w-20"
        } bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-r border-[#334155] transition-all duration-300 flex flex-col overflow-y-auto`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-[#334155]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-lg font-bold text-white">CardioVision</h1>
                <p className="text-xs text-gray-400">AI Platform</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? "bg-red-500/20 border-l-4 border-red-500 text-red-400"
                  : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
              }`}
              title={item.label}
            >
              <span className={item.color}>{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-[#334155] space-y-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-white/5 transition-all duration-200"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">GitHub</span>}
          </a>

          <a
            href="#"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-white/5 transition-all duration-200"
            title="Deployment"
          >
            <Rocket className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Deployment</span>}
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>

        {/* Toggle Sidebar Button */}
        <div className="p-4 border-t border-[#334155]">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center py-2 text-gray-400 hover:text-gray-300 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border-b border-[#334155] px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {navItems.find((item) => item.id === currentPage)?.label}
            </h2>
            <p className="text-sm text-gray-400">Advanced Cardiovascular Analysis Engine</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{userEmail}</p>
              <p className="text-xs text-gray-400">Authenticated User</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-[#0F172A]">
          <div className="p-8">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}
