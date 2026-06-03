import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

/**
 * Explainable AI (SHAP) Component
 * Design: Feature importance visualization and model explainability
 * Features: SHAP values, feature contributions, risk factor analysis
 */

export default function ExplainableAI() {
  const features = [
    { name: "Age", impact: 0.245, type: "risk" },
    { name: "Blood Pressure", impact: 0.198, type: "risk" },
    { name: "Cholesterol", impact: 0.156, type: "risk" },
    { name: "Heart Rate", impact: 0.134, type: "protective" },
    { name: "Exercise Angina", impact: 0.112, type: "risk" },
    { name: "Old Peak", impact: 0.089, type: "risk" },
    { name: "Chest Pain Type", impact: 0.078, type: "risk" },
    { name: "Fasting Blood Sugar", impact: 0.067, type: "risk" },
    { name: "Rest ECG", impact: 0.056, type: "risk" },
    { name: "Slope", impact: 0.045, type: "protective" },
    { name: "Major Vessels", impact: 0.038, type: "risk" },
    { name: "Thal", impact: 0.028, type: "risk" },
  ];

  const topRiskFactors = features.filter((f) => f.type === "risk").slice(0, 5);
  const protectiveFactors = features.filter((f) => f.type === "protective");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Brain className="w-8 h-8 text-purple-500" />
          Explainable AI (SHAP Analysis)
        </h1>
        <p className="text-gray-300">
          Understand which features drive the model's predictions through SHAP (SHapley Additive exPlanations) analysis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature Importance */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Feature Importance (SHAP Values)</h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-300">{feature.name}</span>
                    <span className={`text-sm font-bold ${
                      feature.type === "risk" ? "text-red-400" : "text-green-400"
                    }`}>
                      {(feature.impact * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#0F172A] rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        feature.type === "risk"
                          ? "bg-gradient-to-r from-red-500 to-red-600"
                          : "bg-gradient-to-r from-green-500 to-green-600"
                      }`}
                      style={{ width: `${feature.impact * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SHAP Waterfall Analysis */}
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Prediction Breakdown</h2>

            <div className="space-y-4">
              <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
                <p className="text-sm text-gray-400 mb-2">Base Value (Model Average)</p>
                <p className="text-2xl font-bold text-blue-400">45.2%</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-300">Contributing Factors</p>
                {topRiskFactors.slice(0, 3).map((factor, index) => (
                  <div key={index} className="flex items-center justify-between bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <span className="text-sm text-gray-300">{factor.name}</span>
                    <span className="text-sm font-bold text-red-400">+{(factor.impact * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
                <p className="text-sm text-gray-400 mb-2">Final Prediction</p>
                <p className="text-2xl font-bold text-red-400">72.8%</p>
                <p className="text-xs text-gray-400 mt-2">HIGH RISK</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Risk Analysis Panel */}
        <div className="space-y-6">
          {/* Top Risk Factors */}
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Top Risk Drivers
            </h2>

            <div className="space-y-3">
              {topRiskFactors.map((factor, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-red-300">{factor.name}</span>
                    <span className="text-xs font-bold text-red-400">{(factor.impact * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-red-500/20 rounded-full h-1">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${(factor.impact / Math.max(...features.map((f) => f.impact))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Protective Factors */}
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Protective Factors
            </h2>

            <div className="space-y-3">
              {protectiveFactors.map((factor, index) => (
                <div key={index} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-green-300">{factor.name}</span>
                    <span className="text-xs font-bold text-green-400">{(factor.impact * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-green-500/20 rounded-full h-1">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${(factor.impact / Math.max(...features.map((f) => f.impact))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Model Interpretation */}
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-xl font-bold text-white mb-4">Interpretation Guide</h2>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="font-semibold text-blue-300 mb-1">SHAP Values</p>
                <p className="text-xs">Show how much each feature contributes to pushing the prediction from the base value</p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                <p className="font-semibold text-purple-300 mb-1">Feature Impact</p>
                <p className="text-xs">Larger bars indicate stronger influence on the prediction outcome</p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="font-semibold text-green-300 mb-1">Transparency</p>
                <p className="text-xs">Understand why the model made a specific prediction for this patient</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Detailed Analysis */}
      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Clinical Interpretation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-3">High Risk Indicators</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Age is a significant risk factor (24.5% contribution)</li>
              <li>• Elevated blood pressure increases risk substantially (19.8%)</li>
              <li>• High cholesterol levels are concerning (15.6%)</li>
              <li>• Exercise-induced angina suggests cardiac stress (11.2%)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Positive Indicators</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Normal heart rate response to activity</li>
              <li>• Favorable ST segment slope</li>
              <li>• Absence of major coronary vessel calcification</li>
              <li>• Normal thalassemia status</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-sm text-blue-300">
            <strong>Note:</strong> SHAP analysis provides local explanations for individual predictions. These values show how each feature influenced this specific patient's risk assessment, helping clinicians understand the model's reasoning and make informed decisions.
          </p>
        </div>
      </Card>
    </div>
  );
}
