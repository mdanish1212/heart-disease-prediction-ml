import { Card } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function DatasetAnalytics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-green-500" />
          Dataset Analytics
        </h1>
        <p className="text-gray-300">Comprehensive analysis of the Cleveland Heart Disease dataset</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
          <p className="text-gray-400 text-sm mb-2">Total Records</p>
          <p className="text-3xl font-bold text-white">303</p>
          <p className="text-xs text-green-400 mt-2">100% Complete</p>
        </Card>
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
          <p className="text-gray-400 text-sm mb-2">Features</p>
          <p className="text-3xl font-bold text-white">13</p>
          <p className="text-xs text-blue-400 mt-2">Clinical Parameters</p>
        </Card>
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
          <p className="text-gray-400 text-sm mb-2">Disease Cases</p>
          <p className="text-3xl font-bold text-red-400">160</p>
          <p className="text-xs text-gray-400 mt-2">52.8% Positive</p>
        </Card>
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
          <p className="text-gray-400 text-sm mb-2">Healthy Cases</p>
          <p className="text-3xl font-bold text-green-400">143</p>
          <p className="text-xs text-gray-400 mt-2">47.2% Negative</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Age Distribution</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Mean Age</span>
              <span className="text-lg font-bold text-white">54.4 years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Median Age</span>
              <span className="text-lg font-bold text-white">55.0 years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Age Range</span>
              <span className="text-lg font-bold text-white">29-77 years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Std Deviation</span>
              <span className="text-lg font-bold text-white">9.04 years</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Gender Distribution</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Male</span>
              <span className="text-lg font-bold text-blue-400">207 (68.3%)</span>
            </div>
            <div className="w-full bg-[#0F172A] rounded-full h-2">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "68.3%" }}></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-300">Female</span>
              <span className="text-lg font-bold text-pink-400">96 (31.7%)</span>
            </div>
            <div className="w-full bg-[#0F172A] rounded-full h-2">
              <div className="h-full bg-pink-500 rounded-full" style={{ width: "31.7%" }}></div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Feature Statistics</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Min</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Max</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Mean</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Std Dev</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Age", min: 29, max: 77, mean: 54.4, std: 9.04 },
                { name: "Blood Pressure", min: 94, max: 200, mean: 131.6, std: 17.6 },
                { name: "Cholesterol", min: 126, max: 564, mean: 246.3, std: 51.8 },
                { name: "Heart Rate", min: 60, max: 202, mean: 149.6, std: 22.9 },
                { name: "Old Peak", min: 0, max: 6.2, mean: 1.04, std: 1.16 },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-[#334155] hover:bg-white/5">
                  <td className="py-3 px-4 text-gray-300">{row.name}</td>
                  <td className="py-3 px-4 text-gray-400">{row.min}</td>
                  <td className="py-3 px-4 text-gray-400">{row.max}</td>
                  <td className="py-3 px-4 text-white font-semibold">{row.mean}</td>
                  <td className="py-3 px-4 text-gray-400">{row.std}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
