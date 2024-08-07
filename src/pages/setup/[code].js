import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import base from "@/helper/airtable";
import { useWedding } from "@/contexts/WeddingContext";

export default function Setup({ codeExists, code, passwordExists }) {
  // console.log("code", code);
  const router = useRouter();
  const [attendeePassword, setAttendeePassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const { setCode } = useWedding();

  useEffect(() => {
    setCode(code);
    if (codeExists && passwordExists) {
      // alert("Wedding already exists");
      router.push(`/login/${code}`);
    }
    if (!codeExists && !passwordExists) {
      // alert("Wedding already exists");
      router.push(`/unauthorized`);
    }
  }, [codeExists, code, router, setCode, passwordExists]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const code = await generateUniqueCode();

      const response = await fetch("/api/setup", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attendeePassword,
          adminPassword,
          code: code,
        }),
      });

      if (response.ok) {
        // alert("Wedding setup successfully");
        router.push(`/login/${code}`);
      } else {
        const result = await response.json();
        setError(result.error);
      }
    } catch (error) {
      console.error("Error setting up wedding:", error);
      setError("Error setting up wedding");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-3/6 m-auto mt-44">
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Create Admin Access Password:
        </label>
        <input
          type="password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Create Attendees Access Password:
        </label>
        <input
          type="password"
          value={attendeePassword}
          onChange={(e) => setAttendeePassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Set Passwords
      </button>
    </form>
  );
}

export async function getServerSideProps(context) {
  const { code } = context.params;
  let codeExists = false;
  let passwordExists = false;

  if (code) {
    const records = await base("Weddings")
      .select({
        filterByFormula: `{Code} = '${code}'`,
      })
      .firstPage();
    // console.log("records", records[0].fields);
    if (records[0].fields.Code) {
      codeExists = true;
    }
    if (records[0].fields.AdminPassword && records[0].fields.AttendeePassword) {
      codeExists = true;
      passwordExists = true;
    }
  }

  return {
    props: {
      codeExists,
      passwordExists,
      code: code || "",
    },
  };
}
