import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AlbumsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title="Albums" subtitle="Albums" />
    </>
  );
};

export default AlbumsPage;
