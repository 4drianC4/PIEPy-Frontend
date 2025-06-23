import { useState } from "react";
import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";

export default function LearningPath() {
    const [selectedTopic, setSelectedTopic] = useState("Introduccion");

    return (
        <div className="flex h-screen">
            <Sidebar onSelect={setSelectedTopic} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <div className="flex-1 overflow-y-auto">
                    <main className="flex flex-col p-6">
                        <TopicDetail topic={selectedTopic} />
                    </main>
                    <div className="p-4 border-t border-gray-300">
                        <PythonEditor />
                    </div>
                </div>
            </div>
        </div>
    );
}