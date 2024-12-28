import { useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="relative min-h-screen w-full bg-black/90">
      <div className="container px-4 py-20 mx-auto max-w-7xl relative z-10">
        <div className="max-w-xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            GET IN TOUCH
          </h2>
          <h1 className="text-6xl font-bold mb-8 text-white">Contact.</h1>

          <div className="space-y-6 mb-8">
            <a
              href="mailto:benjamintan1013@gmail.com"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>benjamintan1013@gmail.com</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>github.com/</span>
            </a>
            <a
              href="https://linkedin.com/in/benjamin-tan1013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>benjamin-tan1013</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white/80 mb-2 block">Your Name</label>
              <Input
                type="text"
                placeholder="What's your name?"
                className="w-full bg-white/5 border-white/10 text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-white/80 mb-2 block">Your email</label>
              <Input
                type="email"
                placeholder="What's your email?"
                className="w-full bg-white/5 border-white/10 text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-white/80 mb-2 block">Your Message</label>
              <textarea
                placeholder="What do you want to say?"
                className="w-full bg-white/5 border-white/10 text-white rounded-md h-32 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};