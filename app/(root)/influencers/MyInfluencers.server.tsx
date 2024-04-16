import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

export async function useInfluencerData() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/images`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          influencerId: "yourInfluencerId", // Ensure this ID is correctly determined based on your app's logic
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch signed URLs");
    }

    const { signedUrls } = await response.json();
    const hasCredits = user.publicMetadata?.creditBalance > 0;

    return {
      user,
      influencers: signedUrls.map((url) => ({ src: url })),
      linkHref: hasCredits ? "/create" : "/credits",
      hasCredits,
    };
  } catch (error) {
    console.error("Error fetching user data or signed URLs:", error);
    throw new Error("Internal Server Error");
  }
}
