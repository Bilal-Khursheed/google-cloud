import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const GeneratePage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title="Generate" subtitle="Generate Album" />

      <section className="mt-10">
        <TransformationForm
          action="Create"
          type="fill"
          userId={user._id}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default GeneratePage;
