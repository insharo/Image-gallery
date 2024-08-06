export default function unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Unauthorized</h1>
        <p className="text-gray-700 mb-6">
          Please contact the wedding organizer for access.
        </p>
        {/* <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back
        </button> */}
      </div>
    </div>
  );
}
