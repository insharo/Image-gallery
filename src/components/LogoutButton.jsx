import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const { setUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
