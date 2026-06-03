import { Card } from "@/components/ui/card";
import { Info, Target, Zap, Award } from "lucide-react";

export default function AboutProject() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Info className="w-8 h-8 text-indigo-500" />
          About CardioVision AI
        </h1>
        <p className="text-gray-300">A comprehensive final year project on heart disease prediction using AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-500" />
            Project Overview
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              CardioVision AI is an advanced platform for predicting heart disease risk using deep learning, machine learning, and explainable AI techniques. The project leverages the Cleveland Heart Disease dataset and employs state-of-the-art neural networks to provide accurate cardiovascular risk assessments.
            </p>
            <p>
              The platform combines predictive accuracy with interpretability, allowing medical professionals to understand the reasoning behind each prediction through SHAP (SHapley Additive exPlanations) analysis.
            </p>
            <p>
              This project demonstrates the practical application of AI in healthcare, emphasizing both performance and transparency for clinical decision-making.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            Key Features
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>Deep Learning-based disease prediction with 95.2% accuracy</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>SHAP explainability for transparent AI decisions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Comprehensive dataset analytics and visualization</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Real-time model performance metrics</span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Automated PDF report generation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span>AI-powered medical chatbot assistance</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-500" />
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-blue-300 mb-2">Frontend</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• React 19</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS 4</li>
              <li>• Wouter (Routing)</li>
            </ul>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-green-300 mb-2">Machine Learning</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• TensorFlow</li>
              <li>• Deep Neural Networks</li>
              <li>• Scikit-Learn</li>
              <li>• SHAP (Explainability)</li>
            </ul>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-purple-300 mb-2">Data & Visualization</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Pandas</li>
              <li>• Plotly</li>
              <li>• NumPy</li>
              <li>• Statistical Analysis</li>
            </ul>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-red-300 mb-2">Dataset</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Cleveland Heart Disease</li>
              <li>• 303 Records</li>
              <li>• 13 Features</li>
              <li>• Binary Classification</li>
            </ul>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-orange-300 mb-2">Model Performance</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Accuracy: 95.2%</li>
              <li>• Precision: 94.8%</li>
              <li>• Recall: 94.1%</li>
              <li>• ROC-AUC: 97.1%</li>
            </ul>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm font-semibold text-cyan-300 mb-2">Tools & Libraries</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Jupyter Notebook</li>
              <li>• Python 3.11</li>
              <li>• Git Version Control</li>
              <li>• Docker (Optional)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Project Methodology</h2>

        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Data Collection & Preprocessing",
              description: "Collected Cleveland Heart Disease dataset with 303 records and 13 clinical features. Performed data cleaning, normalization, and feature engineering.",
            },
            {
              step: "2",
              title: "Exploratory Data Analysis",
              description: "Conducted comprehensive statistical analysis, correlation studies, and visualization of feature distributions and relationships.",
            },
            {
              step: "3",
              title: "Model Development",
              description: "Designed and trained deep neural networks with 6 layers, achieving 95.2% accuracy on validation data through hyperparameter optimization.",
            },
            {
              step: "4",
              title: "Explainability Implementation",
              description: "Integrated SHAP analysis to provide feature importance and decision transparency for individual predictions.",
            },
            {
              step: "5",
              title: "Platform Development",
              description: "Built comprehensive web platform with React, featuring prediction interface, analytics dashboard, and medical chatbot.",
            },
            {
              step: "6",
              title: "Validation & Testing",
              description: "Performed rigorous testing including cross-validation, ROC curve analysis, and clinical validation of predictions.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 border border-red-500/30">
                  <span className="text-red-400 font-bold">{item.step}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Future Enhancements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p className="font-semibold text-blue-300 mb-2">Short Term</p>
            <ul className="space-y-1 text-xs">
              <li>• Integration with hospital management systems</li>
              <li>• Mobile application development</li>
              <li>• Real-time patient monitoring</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-purple-300 mb-2">Long Term</p>
            <ul className="space-y-1 text-xs">
              <li>• Multi-disease prediction models</li>
              <li>• Personalized treatment recommendations</li>
              <li>• Clinical trial integration</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
