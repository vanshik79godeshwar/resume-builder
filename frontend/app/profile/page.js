"use client";

import { useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) return <div> User exist nahi karta </div>;

  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
