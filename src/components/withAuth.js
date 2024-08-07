import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        // router.push("/unauthorized");
        router.push("/welcome");
      }
    }, [user, router]);

    // if (user === null) {
    //   return <div>Please Contact the Wedding Organizer</div>;
    // }

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return AuthenticatedComponent;
};

export default withAuth;
