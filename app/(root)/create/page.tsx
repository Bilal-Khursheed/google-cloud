import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

const CreateAiInfluencer = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  const hasCredits = user.creditBalance > 0;

  return (
    <>
      <Header
        title="Create AI Influencer"
        subtitle="Customize Your Digital Influencer"
      />

      {!hasCredits && (
        <p className="text-center text-red-500">
          You don&apos;t have any credits, please buy credits to get started.
        </p>
      )}

      <section className="mt-10">
        {hasCredits ? (
          <TransformationForm
            userId={user._id}
            creditBalance={user.creditBalance}
          />
        ) : (
          <div className="text-center mt-10">
            <Link href="/credits" passHref>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Credits
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default CreateAiInfluencer;
