"use client"

import * as z from "zod";
import { store } from "@prisma/client"
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";





interface SettingsFormProps{
    initialData: store;
}

const fromSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValue = z.infer<typeof fromSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<SettingsFormValue>({
    resolver: zodResolver(fromSchema),
    defaultValues: initialData
  });

  const onSubmit = async(data: SettingsFormValue) =>{
    console.log(data)
  }

  return (
    <>
    <div className="flex items-center justify-between">
      <Heading 
      title= "Settings"
      description= "Manage store preferences"
      />
      <Button
      variant="destructive"
      size="icon"
      onClick={() => {}}
      >
      <Trash className="h-4 w-64"/>
      </Button>
    </div>
     <Separator/>
      <Form {...form}>
        <form onSubmit = {form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="grid grid-cols-3 gap-8">
        <FormField
        control={form.control}
        name = "name"
        render={({field}) =>(
          <FormItem>
           <FormLabel>Name</FormLabel>
           <FormControl>
            <Input disabled={loading} placeholder="Store name" {...field}/>
           </FormControl>
           <FormMessage/>
          </FormItem>
        )}
        />
        </div>
        <Button disabled={loading} className="ml-auto" type="submit">
          Save Changes
        </Button>
        </form>

      </Form>
    </>
  )
}

