import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";
import { toast } from "sonner";

export default function PDFReportGenerator() {
  const [generating, setGenerating] = useState(false);

  const handleGenerateReport = () => {
    setGenerating(true);
    setTimeout(() => {
      toast.success("Report generated successfully!");
      setGenerating(false);
    }, 2000);
  };

  const sampleReports = [
    {
      id: 1,
      date: "2024-06-02",
      patient: "Patient #001",
      risk: "High",
      accuracy: "95.2%",
    },
    {
      id: 2,
      date: "2024-06-01",
      patient: "Patient #002",
      risk: "Moderate",
      accuracy: "94.8%",
    },
    {
      id: 3,
      date: "2024-05-31",
      patient: "Patient #003",
      risk: "Low",
      accuracy: "96.1%",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <FileText className="w-8 h-8 text-orange-500" />
          PDF Report Generator
        </h1>
        <p className="text-gray-300">Generate and download clinical prediction reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Generate New Report</h2>

            <div className="space-y-6">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-blue-300">
                  <strong>Latest Prediction:</strong> High Risk (72.8%) - Generated on 2024-06-02
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Report Title</label>
                  <input
                    type="text"
                    placeholder="Cardiovascular Risk Assessment Report"
                    className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Report Format</label>
                  <select className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500">
                    <option>Comprehensive Clinical Report</option>
                    <option>Executive Summary</option>
                    <option>Technical Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Include Sections</label>
                  <div className="space-y-2">
                    {[
                      "Patient Information",
                      "Risk Assessment Results",
                      "Feature Analysis",
                      "Clinical Recommendations",
                      "Model Confidence Metrics",
                    ].map((section) => (
                      <label key={section} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                        <span className="text-sm text-gray-300">{section}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGenerateReport}
                disabled={generating}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {generating ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Report...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Generate PDF Report
                  </span>
                )}
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Report Preview</h2>
            <div className="bg-[#0F172A] rounded-lg p-6 border border-[#334155] space-y-4">
              <div className="border-b border-[#334155] pb-4">
                <p className="text-xs text-gray-400 mb-1">Report Title</p>
                <p className="text-lg font-bold text-white">Cardiovascular Risk Assessment Report</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Generated Date</p>
                  <p className="text-sm text-white">2024-06-02 14:32:15</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Report ID</p>
                  <p className="text-sm text-white font-mono">RPT-2024-0602-001</p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-2">Risk Assessment</p>
                <p className="text-2xl font-bold text-red-400">HIGH RISK (72.8%)</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-400">Clinical Recommendations:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Consult with a cardiologist for comprehensive evaluation</li>
                  <li>• Maintain regular exercise and physical activity</li>
                  <li>• Monitor blood pressure and cholesterol levels</li>
                  <li>• Follow-up appointment recommended in 3 months</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8 h-fit">
          <h2 className="text-xl font-bold text-white mb-6">Recent Reports</h2>
          <div className="space-y-3">
            {sampleReports.map((report) => (
              <div key={report.id} className="bg-[#0F172A] rounded-lg p-4 border border-[#334155] hover:border-[#445566] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-white">{report.patient}</p>
                    <p className="text-xs text-gray-400">{report.date}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    report.risk === "High"
                      ? "bg-red-500/20 text-red-400"
                      : report.risk === "Moderate"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-green-500/20 text-green-400"
                  }`}>
                    {report.risk}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Accuracy: {report.accuracy}</p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs py-2 rounded transition-colors">
                    <Eye className="w-3 h-3" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 text-xs py-2 rounded transition-colors">
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
