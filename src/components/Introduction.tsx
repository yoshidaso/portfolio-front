import React from "react";

const Introduction = () => {
  return (
    <section
      id="about"
      className="bg-yellow-100 p-6 rounded-lg shadow-md mb-6 text-center"
    >
      <h2 className="text-2xl font-bold border-b-4 border-yellow-500 pb-2 mb-4">
        私について
      </h2>
      <p className="text-lg">名前: Sota</p>
      <p className="text-lg">肩書き: フリーランスエンジニア</p>
      <p className="text-lg">スキルセット: Next.js, TypeScript, Golang など</p>
      <p className="text-lg">
        自己PR: 私は新しい技術を学ぶことが好きで、常に成長を目指しています。
      </p>
    </section>
  );
};

export default Introduction;
