import base from "@/helper/airtable";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage({ codeExists, code }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  // console.log("entered here");
  useEffect(() => {
    if (!codeExists) {
      router.push("/unauthorized");
    }
  }, [codeExists, router]);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        password,
      }),
    });
    const result = await response.json();

    if (response.ok) {
      setUser(result);
      router.push("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // context;
  const { code } = context.params;
  let codeExists = false;

  if (code) {
    const records = await base("Weddings")
      .select({
        filterByFormula: `{Code} = '${code}'`,
      })
      .firstPage();

    if (records.length > 0) {
      if (
        records[0].fields.AdminPassword &&
        records[0].fields.AttendeePassword
      ) {
        codeExists = true;
      }
    }
  }

  return {
    props: {
      codeExists,
      code: code || "",
    },
  };
}
