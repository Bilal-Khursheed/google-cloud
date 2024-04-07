import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";

const Home = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const username = user.username;
  const welcomeMessage = `Welcome ${username} !`;

  const numberOfAIInfluencers = user.influencers.length;

  return (
    <>
      <Header title={welcomeMessage} />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">AI INFLUENCERS</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="photo"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{numberOfAIInfluencers}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
