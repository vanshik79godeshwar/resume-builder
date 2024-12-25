"use client";

export default function ViewResumePage() {
    //random data for now
    const resumes = [
        { id: 1, name: "John Doe", title: "Software Engineer" },
        { id: 2, name: "John Doe", title: "Product Manager" },
       
      ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Your Resumes</h1>
      <p className="text-gray-600 text-center mb-6">
        Here are the resumes you have created:
      </p>

      {resumes.length > 0 ? (
        <div className="space-y-4">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="border border-gray-300 p-4 rounded-md shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{resume.name}</h2>
              <p className="text-gray-600">{resume.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No resumes found. Please create one!</p>
      )}
    </div>
  );
}
