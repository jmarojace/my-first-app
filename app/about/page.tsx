import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Welcome to Joshua Mari A. Aro&apos;s Site
      </h1>

      <p className="mb-6">
        Hello! I am a student learning web development using Next.js.
        This website introduces me and showcases my projects.
      </p>

      <Link
        href="/projects"
        className="text-blue-600 underline"
      >
        View My Projects
      </Link>
    </main>
  );
}
