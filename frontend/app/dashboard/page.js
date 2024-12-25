"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useUser();
  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="text-3xl font-bold text-gray-600 mb-4">Welcome to your dashboard!</div>
      <p className="text-xl font-thin mb-6">Manage your resumes!</p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/create-resume"
          className="w-40 h-40 bg-blue-600 text-white rounded-lg flex items-center justify-center text-lg font-bold shadow-md hover:bg-blue-700 transition">
          + Create Resume
        </Link>

        <Link
          href="/dashboard/view-resume"
          className="w-40 h-40 bg-green-600 text-white rounded-lg flex items-center justify-center text-lg font-bold shadow-md hover:bg-green-700 transition">
          View Resumes
        </Link>
      </div>
    </div>
  );
}

