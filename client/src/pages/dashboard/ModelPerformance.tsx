import { Card } from "@/components/ui/card";
import { Zap, TrendingUp } from "lucide-react";

export default function ModelPerformance() {
  const metrics = [
    { label: "Accuracy", value: "95.2%", color: "from-blue-500 to-blue-600" },
    { label: "Precision", value: "94.8%", color: "from-green-500 to-green-600" },
    { label: "Recall", value: "94.1%", color: "from-purple-500 to-purple-600" },
    { label: "F1-Score", value: "94.4%", color: "from-orange-500 to-orange-600" },
    { label: "ROC-AUC", value: "97.1%", color: "from-red-500 to-red-600" },
    { label: "Specificity", value: "96.2%", color: "from-pink-500 to-pink-600" },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Zap className="w-8 h-8 text-yellow-500" />
          Model Performance Metrics
        </h1>
        <p className="text-gray-300">Deep Learning Model Evaluation on Validation Dataset</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6 hover:shadow-lg transition-all">
            <p className="text-gray-400 text-sm mb-3">{metric.label}</p>
            <div className={`bg-gradient-to-r ${metric.color} rounded-lg p-4 text-center`}>
              <p className="text-3xl font-bold text-white">{metric.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Confusion Matrix</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-400 mb-2">True Negatives</p>
              <p className="text-3xl font-bold text-green-400">85</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-400 mb-2">False Positives</p>
              <p className="text-3xl font-bold text-red-400">5</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-400 mb-2">False Negatives</p>
              <p className="text-3xl font-bold text-red-400">7</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-400 mb-2">True Positives</p>
              <p className="text-3xl font-bold text-green-400">90</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Model Architecture</h2>
          <div className="space-y-3">
            <div className="bg-[#0F172A] rounded-lg p-3 border border-[#334155]">
              <p className="text-xs text-gray-400">Input Layer</p>
              <p className="text-sm font-semibold text-white">13 Features</p>
            </div>
            <div className="flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-[#334155] to-transparent"></div>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
              <p className="text-xs text-gray-400">Dense Layer 1</p>
              <p className="text-sm font-semibold text-blue-300">128 neurons (ReLU)</p>
            </div>
            <div className="flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-[#334155] to-transparent"></div>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
              <p className="text-xs text-gray-400">Dropout</p>
              <p className="text-sm font-semibold text-purple-300">Rate: 0.3</p>
            </div>
            <div className="flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-[#334155] to-transparent"></div>
            </div>
            <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
              <p className="text-xs text-gray-400">Dense Layer 2</p>
              <p className="text-sm font-semibold text-green-300">64 neurons (ReLU)</p>
            </div>
            <div className="flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-[#334155] to-transparent"></div>
            </div>
            <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
              <p className="text-xs text-gray-400">Output Layer</p>
              <p className="text-sm font-semibold text-red-300">1 neuron (Sigmoid)</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-500" />
          Training History
        </h2>
        <div className="space-y-4">
          {[
            { epoch: 1, loss: 0.687, acc: 0.60 },
            { epoch: 5, loss: 0.512, acc: 0.75 },
            { epoch: 10, loss: 0.398, acc: 0.84 },
            { epoch: 20, loss: 0.245, acc: 0.92 },
            { epoch: 30, loss: 0.156, acc: 0.94 },
            { epoch: 50, loss: 0.089, acc: 0.95 },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
              <span className="text-sm font-semibold text-gray-300">Epoch {row.epoch}</span>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-xs text-gray-400">Loss</p>
                  <p className="text-sm font-bold text-red-400">{row.loss.toFixed(3)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Accuracy</p>
                  <p className="text-sm font-bold text-green-400">{(row.acc * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
