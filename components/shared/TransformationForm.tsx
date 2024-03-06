"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CustomField } from "./CustomField"
import { aspectRatioOptions, defaultValues, transformationTypes } from "@/constants"
import { useState } from "react"
import { AspectRatioKey } from "@/lib/utils"

export const formSchema = z.object({
  title: z.string(),
  AspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})

const TransformationForm = ({action, data = null, userId, type, creditBalance}: TransformationFormProps) => {
    const transformationType = transformationTypes[type];
    const [Image, setImage] = useState(data)
    const [newTransformation, setNewTransformation] = useState<Transformations | null >(null);
    const [isSubmitting, setSubmitting] = useState(false);

    const initialValues = data && action === 'Update' ? {

        title: data?.title,
        AspectRatio: data?.AspectRatio,
        color: data?.color,
        prompt: data?.prompt,
        publicId: data?.publicId,

    } : defaultValues
    
     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,})
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const onSelectFieldHandler = (value: string, onChangeField: (value: string) => void) => {}

    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField
        control={form.control}
        name="title"
        formLabel="Image Title"
        className="w-full"
        render={({ field }) => <Input {...field}
        className="input-field" />}
        />
        {type === 'fill' && (
            <CustomField
            control={form.control}
            name="AspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field}) => (
            <Select
            onValueChange={(value) => 
            onSelectFieldHandler(value, field.
            onChange)}
            >
                <SelectTrigger className="select-field">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                {Object.keys(aspectRatioOptions).map((key) => (
                <SelectItem key={key} value={key}
                className="select-item">
                    {aspectRatioOptions[key as 
                        AspectRatioKey].label}
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              )}
            />
        )}
        <Button 
        type="submit"
        className="submit-button capitalize"
        disabled={isSubmitting}
        >Submit</Button>
              </form>
    </Form>
    )
}



export default TransformationForm