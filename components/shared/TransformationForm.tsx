"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomField } from "./CustomField";
import {
  eyesOptions,
  skinOptions,
  hairOptions,
  bustOption,
  bodyOptions,
  heightOptions,
  ageOptions,
  defaultValues,
} from "@/constants";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById, updateCredits } from "@/lib/actions/user.actions";
import { sendContactForm } from "../../lib/api";

export const formSchema = z.object({
  title: z.string(),
  eyes: z.enum(["Brown", "Blue", "Black", "Green", "Grey"]),
  skin: z.enum(["White", "Tan", "Black"]),
  hair: z.enum([
    "Blonde",
    "Platinum Blond",
    "Brown",
    "Black",
    "Red",
    "Grey",
    "Blue",
    "Green",
    "Purple",
    "Pink",
    "Orange",
    "Multicolored",
  ]),
  bust: z.enum(["Small", "Medium", "Large"]),
  body: z.enum(["Slim", "Normal", "Fit", "Muscular", "Curvy", "Fat"]),
  height: z.enum(["Dwarf", "Petite", "Normal", "Tall"]),
  age: z.enum(["25", "30", "35", "40", "Milf", "Gilf"]),
});

interface AIInfluencerFormProps {
  userId: string;
  creditBalance: number;
}

const TransformationForm: React.FC<AIInfluencerFormProps> = ({
  userId,
  creditBalance,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (creditBalance <= 0) {
      alert("You do not have enough credits.");
      return;
    }

    setSubmitting(true);

    try {
      const creditDeduction = -1;
      const updatedBalance = await updateCredits(userId, creditDeduction);

      console.log(`Updated balance: ${updatedBalance}`);

      const formData = {
        userId,
        ...values,
      };
      await sendContactForm(formData);

      alert(
        "Your AI influencer creation request has been submitted. You will be notified via email once the images are generated."
      );
    } catch (error) {
      console.error("Error submitting AI influencer form:", error);
      alert(
        "There was a problem with your submission. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField
          control={form.control}
          name="title"
          formLabel="Name"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />

        {/* Age Select Field */}
        <CustomField
          control={form.control}
          name="age"
          formLabel="Age"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Age" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(ageOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Skin Select Field */}
        <CustomField
          control={form.control}
          name="skin"
          formLabel="Skin Color"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Skin Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(skinOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Height Select Field */}
        <CustomField
          control={form.control}
          name="height"
          formLabel="Height"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Height" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(heightOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Body Select Field */}
        <CustomField
          control={form.control}
          name="body"
          formLabel="Body Type"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Body Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(bodyOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Bust Select Field */}
        <CustomField
          control={form.control}
          name="bust"
          formLabel="Bust Size"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Bust Size" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(bustOption).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Hair Select Field */}
        <CustomField
          control={form.control}
          name="hair"
          formLabel="Hair Color"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Hair Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(hairOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {/* Eyes Select Field */}
        <CustomField
          control={form.control}
          name="eyes"
          formLabel="Eyes Color"
          className="w-full"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Eyes Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(eyesOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="select-item">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <Button
          type="submit"
          className="submit-button capitalize"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default TransformationForm;
