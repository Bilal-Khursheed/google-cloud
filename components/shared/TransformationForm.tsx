"use client";

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
  defaultValues,
} from "@/constants";
import { useState } from "react";

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
  height: z.enum(["dwarf", "petite", "normal", "tall"]),
});

const TransformationForm = ({
  action,
  data = null,
  userId,
  type,
  creditBalance,
}: TransformationFormProps) => {
  const [Image, setImage] = useState(data);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const initialValues =
    data && action === "Update"
      ? {
          ...defaultValues,
          ...data,
        }
      : defaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
