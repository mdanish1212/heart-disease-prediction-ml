import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Heart } from "lucide-react";

export default function CardioBot() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "bot"; text: string }>>([
    {
      role: "bot",
      text: "Hello! I'm CardioBot, your intelligent heart health assistant. I can help you with questions about cardiovascular health, disease prevention, and our AI prediction system. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);
    setInput("");

    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "heart disease": "Heart disease is a condition that affects the structure and function of the heart. It can include coronary artery disease, heart failure, and arrhythmias. Risk factors include high blood pressure, high cholesterol, smoking, and diabetes.",
        cholesterol: "Cholesterol is a fatty substance in your blood. High levels can increase your risk of heart disease. You can manage cholesterol through diet, exercise, and medication. Aim for LDL below 100 mg/dL and HDL above 40 mg/dL for men.",
        "blood pressure": "Normal blood pressure is below 120/80 mmHg. High blood pressure (hypertension) is 130/80 mmHg or higher. It's a major risk factor for heart disease. Monitor it regularly and maintain a healthy lifestyle.",
        prediction: "Our AI model analyzes 13 clinical parameters to predict cardiovascular disease risk with 95.2% accuracy. It uses deep learning and provides explainable results through SHAP analysis.",
        exercise: "Regular exercise strengthens your heart and improves cardiovascular health. Aim for 150 minutes of moderate-intensity aerobic activity per week. Always consult with your doctor before starting a new exercise program.",
        diet: "A heart-healthy diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit salt, sugar, and saturated fats. The Mediterranean diet is particularly beneficial for heart health.",
      };

      let response = "I'm not sure about that. Could you ask me about heart disease, cholesterol, blood pressure, exercise, diet, or our prediction system?";
      const lowerInput = input.toLowerCase();

      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <MessageCircle className="w-8 h-8 text-cyan-500" />
          CardioBot AI Assistant
        </h1>
        <p className="text-gray-300">Your intelligent heart health companion</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Chat Area */}
        <div className="lg:col-span-3">
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6 h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-red-500/20 border border-red-500/30 text-red-100"
                        : "bg-blue-500/20 border border-blue-500/30 text-blue-100"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-blue-500/20 border border-blue-500/30 text-blue-100 px-4 py-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me about heart health..."
                className="flex-1 bg-[#0F172A] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Quick Topics
            </h3>

            <div className="space-y-2">
              {[
                "What is heart disease?",
                "How to lower cholesterol?",
                "Blood pressure management",
                "Exercise benefits",
                "Healthy diet tips",
                "Risk factors",
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setInput(topic);
                    setTimeout(() => {
                      const event = new KeyboardEvent("keypress", { key: "Enter" });
                      document.querySelector("input")?.dispatchEvent(event);
                    }, 100);
                  }}
                  className="w-full text-left text-xs bg-[#0F172A] hover:bg-[#1a2332] border border-[#334155] hover:border-cyan-500/50 text-gray-300 hover:text-cyan-300 rounded-lg px-3 py-2 transition-all"
                >
                  {topic}
                </button>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-6">
            <h3 className="text-lg font-bold text-white mb-4">About CardioBot</h3>
            <p className="text-sm text-gray-400">
              CardioBot is an AI-powered assistant trained on medical knowledge to provide information about cardiovascular health and our prediction system.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              ⚠️ This is for educational purposes only and not a substitute for professional medical advice.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
