import { useState } from "react";
import { Sidebar } from "../sidebar";
import { TopicDetail } from "../learning-module/topic-detail";
import PythonEditor from "../python-runner";


export default function LearningPath(){
    const [selectedTopic, setSelectedTopic]= useState("Introduccion");

    return (
  <div className="flex min-h-screen bg-background dark:bg-darkBackground text-gray-900 dark:text-white">
    <Sidebar onSelect={setSelectedTopic} />

    <div className="flex flex-col flex-1">
      <main className="flex-1 p-6 overflow-y-auto">
        <TopicDetail topic={selectedTopic} />
      </main>

      <div className="p-4 border-t border-gray-300 dark:border-gray-700">
        <PythonEditor />
      </div>
    </div>
  </div>
);

}