"use client";

import React from "react";
import {
  Rocket,
  Globe,
  Github,
  User,
  GraduationCap,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function DeploymentPage() {
  const deploymentUrl =
    "https://your-app-url.streamlit.app";

  const githubUrl =
    "https://github.com/mdanish1212/heart-disease-prediction-ml";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto p-8">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold flex items-center gap-3">
            <Rocket className="text-cyan-400" size={40} />
            Deployment Center
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Heart Disease Prediction Using Artificial Intelligence,
            Machine Learning & Deep Learning
          </p>
        </div>

        {/* Status Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Activity className="text-green-400 mb-3" size={30} />
            <h3 className="text-xl font-semibold">
              Application Status
            </h3>
            <p className="text-green-400 mt-2">
              ● Online
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <ShieldCheck className="text-cyan-400 mb-3" size={30} />
            <h3 className="text-xl font-semibold">
              Model Type
            </h3>
            <p className="text-slate-300 mt-2">
              Deep Learning (TensorFlow)
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Globe className="text-purple-400 mb-3" size={30} />
            <h3 className="text-xl font-semibold">
              Platform
            </h3>
            <p className="text-slate-300 mt-2">
              Streamlit Cloud
            </p>
          </div>

        </div>

        {/* Main Deployment Card */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-4">
            Live Application
          </h2>

          <p className="text-slate-400 mb-6">
            Access the deployed Heart Disease Prediction Platform.
          </p>

          <a
            href={deploymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            <Globe size={20} />
            Open Live Application
          </a>

        </div>

        {/* Project Information */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Project Information
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <User className="text-cyan-400" />
                <span>Danish Zahoor</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <span>
                  The Islamia University of Bahawalpur
                </span>
              </div>

              <div>
                <span className="font-semibold">
                  Supervisor:
                </span>
                <br />
                Mam Rubab Sheikh
              </div>

              <div>
                <span className="font-semibold">
                  Project Type:
                </span>
                <br />
                Individual Final Year Project
              </div>

            </div>

          </div>

          {/* GitHub */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Source Code
            </h2>

            <p className="text-slate-400 mb-6">
              View complete project source code,
              documentation and model files.
            </p>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl font-semibold"
            >
              <Github size={20} />
              View GitHub Repository
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}