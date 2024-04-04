// pages/_app.tsx
import { ClerkProvider, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      {/* Render the component conditionally based on the user's sign-in status */}
      <SignedIn>
        <AuthRedirect>
          <Component {...pageProps} />
        </AuthRedirect>
      </SignedIn>
      <SignedOut>
        <Component {...pageProps} />
      </SignedOut>
    </ClerkProvider>
  );
}

// This component handles the redirection after login
function AuthRedirect({ children }) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If the user is signed in and we're on the landing page, redirect to the dashboard
    if (isSignedIn && router.pathname === "/") {
      // Make sure '/home' is the correct path to your dashboard page
      router.push("/home");
    }
  }, [isSignedIn, router]);

  // If the logic has passed, render the children components
  return children;
}

export default MyApp;
