import React from "react";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="bg-green-100 p-6 rounded-lg shadow-md mb-6 text-center"
    >
      <h2 className="text-2xl font-bold border-b-4 border-green-500 pb-2 mb-4">
        ポートフォリオ
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">プロジェクト1</h3>
        <p className="text-lg">使用技術: Next.js, TypeScript</p>
        <p className="text-lg">概要: これはサンプルプロジェクトです。</p>
        <a
          href="https://github.com/yoshidaso"
          className="text-blue-600 hover:underline"
        >
          GitHub リンク
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold">プロジェクト2</h3>
        <p className="text-lg">使用技術: Golang, Docker</p>
        <p className="text-lg">概要: これは別のサンプルプロジェクトです。</p>
        <a
          href="https://github.com/yoshidaso"
          className="text-blue-600 hover:underline"
        >
          GitHub リンク
        </a>
      </div>
    </section>
  );
};

export default Projects;
