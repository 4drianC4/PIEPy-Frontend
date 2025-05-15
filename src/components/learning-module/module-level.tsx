import React from "react";
import { Topic } from "../../types/topic";
import TopicCard from "./topic-card";

interface Props{
    level: "Básico" | "Intermedio" | "Avanzado";
    topics: Topic[];
}

const ModuleLevel: React.FC<Props>=({level, topics})=>{
    const filtered = topics.filter((t)=>t.level===level);

    return(
        <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{level}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
    );
}

export default ModuleLevel;