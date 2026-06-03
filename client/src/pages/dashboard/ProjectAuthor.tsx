import { Card } from "@/components/ui/card";
import { Users, Github, Mail, Linkedin } from "lucide-react";

export default function ProjecrAuthor() {
  const team = [
    {
      name: "Danish Zahoor",
      role: "Project Lead & Developer",
      degree: "BS Software Engineering",
      university: "The Islamia University of Bahawalpur",
      bio: "Full-stack developer with expertise in AI/ML and web development. Led the design and implementation of CardioVision AI platform.",
      expertise: ["Deep Learning", "React", "Python", "Data Science"],
      github: "#",
      email: "danish@cardio.ai",
      linkedin: "#",
    },
    {
      name: "Mam Rubab Sheikh",
      role: "Project Supervisor",
      university: "The Islamia University of Bahawalpur",
      bio: "Academic supervisor providing guidance on AI methodology, research approach, and clinical validation.",
      expertise: ["AI/ML", "Healthcare IT", "Research Methodology"],
      github: "#",
      email: "rubab@uibu.edu.pk",
      linkedin: "#",
    },
  ];

  const contributors = [
    { name: "Data Science Team", contribution: "Dataset preparation and statistical analysis" },
    { name: "Medical Consultants", contribution: "Clinical validation and medical insights" },
    { name: "UI/UX Designers", contribution: "Interface design and user experience" },
    { name: "QA Engineers", contribution: "Testing and quality assurance" },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Users className="w-8 h-8 text-pink-500" />
          Team Members
        </h1>
        <p className="text-gray-300">Meet the talented team behind CardioVision AI</p>
      </div>

      {/* Core Team */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Core Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-2"></div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-400 font-semibold text-sm">{member.role}</p>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <p><span className="text-gray-500">Degree:</span> {member.degree}</p>
                  <p><span className="text-gray-500">University:</span> {member.university}</p>
                </div>

                <p className="text-gray-300 text-sm mb-6">{member.bio}</p>

                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-2 font-semibold">EXPERTISE</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, sidx) => (
                      <span key={sidx} className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[#334155]">
                  <a href={member.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-xs">GitHub</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">Email</span>
                  </a>
                  <a href={member.linkedin} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span className="text-xs">LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contributors */}
      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Contributors & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contributors.map((contributor, idx) => (
            <div key={idx} className="bg-[#0F172A] rounded-lg p-4 border border-[#334155] hover:border-[#445566] transition-colors">
              <p className="font-semibold text-white mb-2">{contributor.name}</p>
              <p className="text-sm text-gray-400">{contributor.contribution}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Acknowledgments */}
      <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Acknowledgments</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            We would like to extend our gratitude to <strong>The Islamia University of Bahawalpur</strong> for providing the resources and support necessary to complete this project.
          </p>
          <p>
            Special thanks to the <strong>medical professionals</strong> who provided clinical insights and validated our model's predictions, ensuring the platform's reliability in healthcare applications.
          </p>
          <p>
            We also acknowledge the <strong>open-source community</strong> for providing excellent tools and libraries (TensorFlow, React, Plotly, SHAP) that made this project possible.
          </p>
          <p>
            Finally, we thank all <strong>beta testers and reviewers</strong> who provided valuable feedback to improve the platform's usability and accuracy.
          </p>
        </div>
      </Card>

      {/* Contact & Collaboration */}
      <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <p className="text-white font-semibold">contact@cardiovision.ai</p>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm text-gray-400 mb-2">University</p>
            <p className="text-white font-semibold">UIBU, Bahawalpur</p>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#334155]">
            <p className="text-sm text-gray-400 mb-2">Project Repository</p>
            <p className="text-white font-semibold">GitHub</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
