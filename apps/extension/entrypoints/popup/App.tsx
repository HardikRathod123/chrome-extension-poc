import { useState } from "react";
import { Home, SmilePlus, FileText, BarChart3, Send } from "lucide-react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [askInput, setAskInput] = useState("");

  const weekDays = [
    { day: "M", completed: true, color: "bg-green-400" },
    { day: "T", completed: true, color: "bg-red-400" },
    { day: "W", completed: true, color: "bg-purple-400" },
    { day: "T", completed: true, color: "bg-teal-400" },
    { day: "F", completed: true, color: "bg-yellow-400" },
    { day: "S", completed: false, color: "bg-gray-200" },
    { day: "S", completed: false, color: "bg-gray-200" },
  ];

  return (
    <div className="w-[400px] h-[600px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm flex items-center justify-center">
        <img src="/logo.png" alt="" className="w-20 h-auto" />
      </div>
      {/* Streak Section */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center justify-between gap-2">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="flex gap-1.5">
            {weekDays.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500 font-medium">
                  {item.day}
                </span>
                <div
                  className={`w-6 h-6 rounded-full ${item.color} ${
                    !item.completed && "border-2 border-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Streak</div>
            <div className="text-xl font-semibold">12 Days</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 rounded-full border-3 border-gray-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl text-gray-400 font-light mb-6">
            How is trading going?
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5 mb-2.5">
            <div className="flex gap-2.5">
              <button className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Check In
              </button>
              <button className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Personality Test
              </button>
            </div>
            <div className="flex gap-2.5">
              <button className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Log Trade
              </button>
              <button className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Log Mood
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ask Anything Input */}
      <div className="px-4 pb-3">
        <div className="bg-white rounded-full shadow-md border border-gray-200 px-4 py-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Ask anything"
            value={askInput}
            onChange={(e) => setAskInput(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-600 placeholder-gray-400"
          />
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t px-2 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 ${
              activeTab === "home" ? "text-black" : "text-gray-400"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("mood")}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 ${
              activeTab === "mood" ? "text-black" : "text-gray-400"
            }`}
          >
            <SmilePlus className="w-5 h-5" />
            <span className="text-xs font-medium">Mood</span>
          </button>
          <button
            onClick={() => setActiveTab("journal")}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 relative ${
              activeTab === "journal" ? "text-black" : "text-gray-400"
            }`}
          >
            <div className="relative">
              <FileText className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-lime-400 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </div>
            <span className="text-xs font-medium">Journal</span>
          </button>
          <button
            onClick={() => setActiveTab("insight")}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 ${
              activeTab === "insight" ? "text-black" : "text-gray-400"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs font-medium">Insight</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
