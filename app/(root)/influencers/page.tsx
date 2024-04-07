import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
          // Use the determined href for the Link component
          <div className="text-center mt-10">
            <Link href={linkHref} passHref>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create AI Influencer
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default MyInfluencersPage;
