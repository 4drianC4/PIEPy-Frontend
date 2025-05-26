import { useState } from "react";
import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";


export default function LearningPath(){
    const [selectedTopic, setSelectedTopic]= useState("Introduccion");

    return (
  <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar  onSelect={setSelectedTopic} />
    <div className="flex flex-col flex-1">
      <main className="flex flex-col p-6 overflow-y-auto">
        <TopicDetail topic={selectedTopic} />
      </main>

      <div className="p-4 border-t border-gray-300 dark:border-gray-700">
        <PythonEditor />
      </div>
    </div>
  </div>
  </div>
);

}