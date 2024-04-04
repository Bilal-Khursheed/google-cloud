import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CreateAiInfluencer = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Create AI Influencer"
        subtitle="Customize Your Digital Influencer"
      />

      <section className="mt-10">
        <TransformationForm
          userId={user._id}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default CreateAiInfluencer;
