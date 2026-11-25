
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Joshua Mari A. Aro",
};

const projects = [
  {
    id: 1,
    name: "Mini Store Inventory",
    description:
      "A mobile app for a small store to add, update, and delete products and track stock levels.",
  },
  {
    id: 2,
    name: "StyleHub",
    description:
      "An online clothing store for browsing and purchasing products.",
  },
  {
    id: 3,
    name: "JobTrack",
    description:
      "An application for tracking job applications and interviews.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">
        My Projects
      </h1>

      <p className="mb-8 text-gray-600">
        Here are some of my programming projects.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="mb-3 text-xl font-bold">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
