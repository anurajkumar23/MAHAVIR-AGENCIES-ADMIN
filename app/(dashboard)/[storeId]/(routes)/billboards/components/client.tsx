"use client"
import { useParams, useRouter } from "next/navigation"; 
import { Plus } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


export const BillboardClient = () => {

    const router = useRouter();
    const params = useParams();



    return (
        <>
        <div className='flex items-center justify-between'>
            <Heading
            title="Billboard (0)"
            description="Manage billboards for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 h-4 w-4"/>
            Add New
            </Button>
        </div>
        <Separator/>
        </>
    )
};
