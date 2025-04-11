type Skill = {
  name: string;
  icon: string; // public 폴더 경로 (e.g. "/icons/java.svg")
};

export default function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            </div>
            <span className="text-sm text-gray-700 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
