import { AppProps } from "next/app";
import { ClerkProvider, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
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

interface AuthRedirectProps {
  children: ReactNode;
}

// This component handles the redirection after login
function AuthRedirect({ children }: AuthRedirectProps) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && router.pathname === "/") {
      router.push("/home");
    }
  }, [isSignedIn, router]);

  return <>{children}</>;
}

export default MyApp;
