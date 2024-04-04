import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const MyInfluencersPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title="My AI Influencers" subtitle="Albums" />
    </>
  );
};

export default MyInfluencersPage;
