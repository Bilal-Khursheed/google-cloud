import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

interface InfluencerImage {
  src: string;
}

interface Influencer {
  influencerId: string;
  images: InfluencerImage[];
}

const MyInfluencersPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  const linkHref = user.creditBalance > 0 ? "/create" : "/credits";

  return (
    <>
      <Header title="My AI Influencers" subtitle="Albums" />
      <section className="profile">
        {user.influencers.length > 0 ? (
          user.influencers.map((influencer: Influencer, index: number) => (
            <div key={index} className="profile-influencer-box">
              <p className="p-14-medium md:p-16-medium">
                INFLUENCER {index + 1}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src={`/assets/icons/photo.svg`}
                  alt="influencer"
                  width={50}
                  height={50}
                />
                {influencer.images.length > 0 ? (
                  influencer.images.map(
                    (image: InfluencerImage, idx: number) => (
                      <Image
                        key={idx}
                        src={image.src}
                        alt={`Influencer ${index + 1} Image ${idx + 1}`}
                        width={100}
                        height={100}
                      />
                    )
                  )
                ) : (
                  <p className="text-lg text-center w-full">PROCESSING</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="mt-10 w-full flex flex-col items-center">
            <p className="text-center mb-5">
              You currently have no AI Influencers. Start creating one now!
            </p>
            <Link href={linkHref} passHref>
              <Button
                role="link"
                className="w-full max-w-xs rounded-full bg-purple-gradient bg-cover"
              >
                Create AI Influencer
              </Button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default MyInfluencersPage;
