import { Card } from "@/components/ui/card";
import { BarChart3, Users, Database, TrendingUp, Heart, Brain, Zap, FileText } from "lucide-react";

/**
 * Home Dashboard Component
 * Design: Premium Medical Dashboard with KPI cards and project overview
 * Features: Real-time metrics, project information, platform capabilities
 */

export default function HomeDashboard() {
  const kpis = [
    {
      title: "Total Patients",
      value: "1,247",
      change: "+12.5%",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Dataset Records",
      value: "303",
      change: "Complete",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Model Accuracy",
      value: "95.2%",
      change: "+2.3%",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Predictions",
      value: "2,891",
      change: "This Month",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
    },
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Disease Prediction",
      description: "Advanced Deep Learning model for cardiovascular risk assessment",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Explainable AI",
      description: "SHAP-based feature importance and decision transparency",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization and statistical analysis",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Model Performance",
      description: "Real-time metrics, ROC curves, and confusion matrices",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "PDF Reports",
      description: "Automated clinical report generation and export",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Historical data tracking and predictive insights",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to CardioVision AI</h1>
        <p className="text-gray-300 text-lg">
          Advanced Heart Disease Prediction Platform using Deep Learning, Machine Learning, and Explainable AI
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${kpi.color} p-3 rounded-lg text-white`}>
                  {kpi.icon}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2">{kpi.title}</p>
              <p className="text-3xl font-bold text-white mb-2">{kpi.value}</p>
              <p className="text-xs text-green-400">{kpi.change}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              CardioVision AI is a comprehensive final year project focused on predicting heart disease using advanced artificial intelligence and machine learning techniques. The platform leverages deep neural networks combined with explainable AI (SHAP) to provide transparent, trustworthy predictions for cardiovascular risk assessment.
            </p>
            <p>
              The system analyzes multiple patient parameters including age, blood pressure, cholesterol levels, and other clinical indicators to generate accurate risk predictions with detailed feature importance analysis.
            </p>
            <div className="pt-4 border-t border-[#334155]">
              <p className="text-sm font-semibold text-gray-400">Technology Stack</p>
              <p className="text-sm text-gray-400 mt-2">
                React 19 • TensorFlow • SHAP • Plotly • Pandas • Scikit-Learn • Deep Learning • Machine Learning
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Dataset Features</p>
              <p className="text-2xl font-bold text-white">13</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Model Layers</p>
              <p className="text-2xl font-bold text-white">6</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Training Epochs</p>
              <p className="text-2xl font-bold text-white">50</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Validation Accuracy</p>
              <p className="text-2xl font-bold text-green-400">95.2%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Platform Features */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-red-500 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Information */}
      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Project Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Academic Details</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold">Student:</span> Danish Zahoor</p>
              <p><span className="font-semibold">Degree:</span> BS Software Engineering</p>
              <p><span className="font-semibold">University:</span> The Islamia University of Bahawalpur</p>
              <p><span className="font-semibold">Supervisor:</span> Mam Rubab Sheikh</p>
              <p><span className="font-semibold">Project Type:</span> Final Year Project</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
            <div className="space-y-2 text-gray-300">
              <p>✓ 95.2% Model Accuracy</p>
              <p>✓ SHAP-based Explainability</p>
              <p>✓ Real-time Predictions</p>
              <p>✓ Comprehensive Analytics</p>
              <p>✓ Professional UI/UX Design</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
