import Image from "next/image";

export default function AboutSection() {
  const skills = [
    "TypeScript",
    "Golang",
    "React",
    "Next.js",
    "Tailwind",
    "MySQL",
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
              alt="Profile"
              width={500}
              height={300}
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3 text-primary">About Me</h2>
            <p>Web系のフリーランスエンジニアとして活動しています。</p>
            <p>
              現在は少数精鋭のチームでGoやTypeScript（Next.jsなど）を中心に、フロントエンドからバックエンドまで幅広く担当しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
