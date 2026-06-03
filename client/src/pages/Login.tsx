import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Lock, Mail } from "lucide-react";
import { toast } from "sonner";

/**
 * Premium Login Page Component
 * Design: Medical Technology Interface with dark navy background
 * Features: Custom styling matching provided design, professional animations
 */

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      if (email && password) {
        // Store auth state
        localStorage.setItem("cardio_auth", JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
        }));
        localStorage.setItem("cardio_user", email);
        if (rememberMe) {
          localStorage.setItem("cardio_remember", "true");
        }
        toast.success("Login successful! Redirecting...");
        setLoading(false);
        setLocation("/dashboard");
      } else {
        toast.error("Please enter both email and password");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1a1f3a] to-[#0F172A] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">CardioVision</h1>
                <p className="text-sm text-gray-400">AI Platform</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[#1E293B] to-[#1a1f3a] border border-[#334155] shadow-2xl">
            <div className="p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-400 mb-8">Enter your credentials to access your diagnostic tools</p>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-[#0F172A] border-[#334155] text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Secure Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-[#0F172A] border-[#334155] text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded bg-[#0F172A] border-[#334155] cursor-pointer"
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-red-500 hover:text-red-400 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Sign In
                      <span>→</span>
                    </span>
                  )}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#334155]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1E293B] text-gray-400">or</span>
                  </div>
                </div>

                {/* Demo Credentials */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">Demo Credentials:</p>
                  <p className="text-sm text-blue-300 font-mono">Email: admin@cardio.ai</p>
                  <p className="text-sm text-blue-300 font-mono">Password: CardioVision2024</p>
                </div>
              </form>

              {/* Sign Up Link */}
              <p className="text-center text-gray-400 text-sm mt-6">
                Don't have an account?{" "}
                <a href="#" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                  Sign up here
                </a>
              </p>
            </div>
          </Card>

          {/* Footer Info */}
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>🔒 Secure • End-to-End Encrypted • HIPAA Compliant</p>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* AI Assistant Image */}
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663719596572/Nb7epqFixhKu6oaDD9rkRf/login-side-visual-7acoWGyx9vesZM46wj6yQD.webp"
              alt="CardioVision AI Assistant"
              className="w-full max-w-md h-auto drop-shadow-2xl"
            />

            {/* Floating Cards */}
            <div className="absolute top-10 right-10 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-green-300">✓ AI Powered</p>
              <p className="text-xs text-green-200">Diagnostics</p>
            </div>

            <div className="absolute bottom-10 left-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-blue-300">🔐 Secure &</p>
              <p className="text-xs text-blue-200">Confidential</p>
            </div>

            <div className="absolute bottom-32 right-10 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-red-300">❤️ Smart Care</p>
              <p className="text-xs text-red-200">For Better Health</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
