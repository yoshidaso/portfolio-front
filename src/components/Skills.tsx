import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-blue-100 p-6 rounded-lg shadow-md mb-6 text-center"
    >
      <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
        スキル一覧
      </h2>
      <ul className="list-disc pl-5 text-lg inline-block text-left">
        <li>Next.js - 熟練度: ★★★★☆</li>
        <li>TypeScript - 熟練度: ★★★★☆</li>
        <li>Golang - 熟練度: ★★★☆☆</li>
        <li>インフラ - 熟練度: ★★★☆☆</li>
      </ul>
    </section>
  );
};

export default Skills;
