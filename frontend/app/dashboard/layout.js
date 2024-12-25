"use client";

import { ClerkProvider, SignedIn, SignedOut,SignOutButton, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardLayout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className="dashboard-layout min-h-screen flex flex-col bg-gray-100">
          <header className="bg-gray-500 text-white p-4 shadow-md flex items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <ul className="flex space-x-6 ml-auto">
              <li>
                <a href="/create-resume" className="text-gray-100 font-semibold hover:text-blue-900 transition">
                  Create Resume
                </a>
              </li>
              <li>
                <a href="/dashboard/view-resume" className="text-gray-100 font-semibold hover:text-blue-900 transition">
                  View Resumes
                </a>
              </li>
              <li>
                <SignOutButton>
                  <button className="text-gray-100 font-semibold hover:text-blue-900 transition">
                    Logout
                  </button>
                </SignOutButton>
              </li>

            </ul>
          </header>
          <main className="p-8 flex-grow">
            {children}
          </main>
          <footer className="bg-gray-500 text-gray-900 p-9 text-center">
            © {new Date().getFullYear()} Resume Builder. All Rights Reserved.
          </footer>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
