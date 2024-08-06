import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const withAuth = (Component) => {
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/unauthorized");
      }
    }, [user, router]);

    // if (user === null) {
    //   return <div>Please Contact the Wedding Organizer</div>;
    // }

    return <Component {...props} />;
  };
};

export default withAuth;
