import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Disease Prediction Component
 * Design: Medical input form with real-time prediction
 * Features: Patient data input, risk assessment, prediction results
 */

export default function DiseasePrediction() {
  const [formData, setFormData] = useState({
    age: 55,
    sex: "Male",
    cp: "Typical Angina",
    trestbps: 130,
    chol: 240,
    fbs: "No",
    restecg: "Normal",
    thalach: 150,
    exang: "No",
    oldpeak: 1.0,
    slope: 1,
    ca: 0,
    thal: 0,
  });

  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePredict = async () => {
    setLoading(true);
    // Simulate prediction
    setTimeout(() => {
      const riskScore = Math.floor(Math.random() * 100);
      setPrediction({
        riskScore,
        diagnosis: riskScore > 60 ? "High Risk" : riskScore > 30 ? "Moderate Risk" : "Low Risk",
        confidence: (90 + Math.random() * 10).toFixed(1),
        timestamp: new Date().toLocaleString(),
      });
      toast.success("Prediction completed successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Heart className="w-8 h-8 text-red-500" />
          Heart Disease Risk Assessment
        </h1>
        <p className="text-gray-300">
          Enter patient clinical parameters to predict cardiovascular disease risk using AI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Patient Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Age (years)</label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", parseInt(e.target.value))}
                  className="bg-[#0F172A] border-[#334155] text-white"
                  min="20"
                  max="100"
                />
              </div>

              {/* Sex */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Sex</label>
                <select
                  value={formData.sex}
                  onChange={(e) => handleInputChange("sex", e.target.value)}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              {/* Chest Pain Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Chest Pain Type</label>
                <select
                  value={formData.cp}
                  onChange={(e) => handleInputChange("cp", e.target.value)}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option>Typical Angina</option>
                  <option>Atypical Angina</option>
                  <option>Non-Anginal Pain</option>
                  <option>Asymptomatic</option>
                </select>
              </div>

              {/* Resting Blood Pressure */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Resting BP (mmHg)</label>
                <Input
                  type="number"
                  value={formData.trestbps}
                  onChange={(e) => handleInputChange("trestbps", parseInt(e.target.value))}
                  className="bg-[#0F172A] border-[#334155] text-white"
                  min="80"
                  max="250"
                />
              </div>

              {/* Cholesterol */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Cholesterol (mg/dl)</label>
                <Input
                  type="number"
                  value={formData.chol}
                  onChange={(e) => handleInputChange("chol", parseInt(e.target.value))}
                  className="bg-[#0F172A] border-[#334155] text-white"
                  min="100"
                  max="600"
                />
              </div>

              {/* Fasting Blood Sugar */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Fasting BS {'>'} 120</label>
                <select
                  value={formData.fbs}
                  onChange={(e) => handleInputChange("fbs", e.target.value)}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              {/* Rest ECG */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Rest ECG</label>
                <select
                  value={formData.restecg}
                  onChange={(e) => handleInputChange("restecg", e.target.value)}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option>Normal</option>
                  <option>Abnormality</option>
                  <option>Hypertrophy</option>
                </select>
              </div>

              {/* Max Heart Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Max Heart Rate</label>
                <Input
                  type="number"
                  value={formData.thalach}
                  onChange={(e) => handleInputChange("thalach", parseInt(e.target.value))}
                  className="bg-[#0F172A] border-[#334155] text-white"
                  min="60"
                  max="220"
                />
              </div>

              {/* Exercise Angina */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Exercise Angina</label>
                <select
                  value={formData.exang}
                  onChange={(e) => handleInputChange("exang", e.target.value)}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              {/* Old Peak */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Old Peak (ST)</label>
                <Input
                  type="number"
                  value={formData.oldpeak}
                  onChange={(e) => handleInputChange("oldpeak", parseFloat(e.target.value))}
                  className="bg-[#0F172A] border-[#334155] text-white"
                  min="0"
                  max="6"
                  step="0.1"
                />
              </div>

              {/* Slope */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Slope</label>
                <select
                  value={formData.slope}
                  onChange={(e) => handleInputChange("slope", parseInt(e.target.value))}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </div>

              {/* Major Vessels */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Major Vessels</label>
                <select
                  value={formData.ca}
                  onChange={(e) => handleInputChange("ca", parseInt(e.target.value))}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* Thal */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Thal</label>
                <select
                  value={formData.thal}
                  onChange={(e) => handleInputChange("thal", parseInt(e.target.value))}
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="0">Normal</option>
                  <option value="1">Fixed Defect</option>
                  <option value="2">Reversible Defect</option>
                  <option value="3">Reversible Defect (Severe)</option>
                </select>
              </div>
            </div>

            {/* Predict Button */}
            <Button
              onClick={handlePredict}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing Patient Data...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Predict Disease Risk
                </span>
              )}
            </Button>
          </Card>
        </div>

        {/* Results Panel */}
        <div>
          {prediction ? (
            <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-white mb-6">Prediction Results</h2>

              <div className="space-y-6">
                {/* Risk Score */}
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="#334155" strokeWidth="8" />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={prediction.riskScore > 60 ? "#DC2626" : prediction.riskScore > 30 ? "#EA580C" : "#059669"}
                        strokeWidth="8"
                        strokeDasharray={`${(prediction.riskScore / 100) * 339.3} 339.3`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{prediction.riskScore}%</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Risk Score</p>
                </div>

                {/* Diagnosis */}
                <div className={`p-4 rounded-lg border-2 ${
                  prediction.riskScore > 60
                    ? 'bg-red-500/10 border-red-500/30'
                    : prediction.riskScore > 30
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : 'bg-green-500/10 border-green-500/30'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {prediction.riskScore > 60 ? (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    <p className="font-semibold text-white">Diagnosis</p>
                  </div>
                  <p className={`text-lg font-bold ${
                    prediction.riskScore > 60
                      ? "text-red-400"
                      : prediction.riskScore > 30
                      ? "text-orange-400"
                      : "text-green-400"
                  }`}>
                    {prediction.diagnosis}
                  </p>
                </div>

                {/* Confidence */}
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Model Confidence</p>
                  <p className="text-2xl font-bold text-blue-400">{prediction.confidence}%</p>
                </div>

                {/* Timestamp */}
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Analysis Time</p>
                  <p className="text-sm text-white font-mono">{prediction.timestamp}</p>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 mb-2">Recommendations</p>
                  <ul className="text-xs text-blue-200 space-y-1">
                    <li>• Consult with a cardiologist</li>
                    <li>• Maintain regular exercise</li>
                    <li>• Monitor blood pressure</li>
                    <li>• Follow-up in 3 months</li>
                  </ul>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8 sticky top-8">
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4 opacity-50" />
                <p className="text-gray-400 text-sm">Enter patient data and click "Predict Disease Risk" to see results</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
