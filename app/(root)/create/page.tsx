import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

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
        <>
          <p className="text-center text-red-500">
            You don&apos;t have any credits, please buy credits to get started.
          </p>
          <div className="flex justify-center mt-5">
            <Link href="/credits" passHref>
              <Button
                type="submit"
                role="link"
                className="w-full max-w-xs rounded-full bg-purple-gradient bg-cover"
              >
                Buy Credit
              </Button>
            </Link>
          </div>
        </>
      )}

      {hasCredits && (
        <section className="mt-10">
          <TransformationForm
            userId={user._id}
            creditBalance={user.creditBalance}
          />
        </section>
      )}
    </>
  );
};

export default CreateAiInfluencer;
