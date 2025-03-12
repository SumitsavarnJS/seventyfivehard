import problemsData from "@/data/problems.json"; // ✅ Ensure correct import

export default function ProblemDetail({ params }) {
  const { problemId } = params;

  if (!Array.isArray(problemsData)) {
    return <p>Error: Problems data is not loaded correctly.</p>;
  }

  const problem = problemsData.find((p) => p.id === problemId);

  if (!problem) {
    return <p>Error: Problem not found.</p>;
  }

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
    </div>
  );
}
