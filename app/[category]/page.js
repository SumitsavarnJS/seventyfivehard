import ProblemCard from "@/components/ProblemCard";


export default async function CategoryPage({ params }) {
  const { category } = params; // Unwrapping params
  const problems = await import("../../data/problems.json").then((mod) => mod.default);
  
  const filteredProblems = problems.filter((problem) => problem.category === category);

  return (
    <div>
      <h1>{category.toUpperCase()} Problems</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))
        ) : (
          <p>No problems found in this category.</p>
        )}
      </div>
    </div>
  );
}
