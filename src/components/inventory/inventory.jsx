import React from "react";
import {useQuery,useMutation} from "@tanstack/react-query";
import InventoryService from "../../application/InventoryService";
import {Button} from "@material-tailwind/react";
import {toast} from "react-hot-toast";

let headers = [
    "Name",
    "Description",
    "Price",
    "Quantity",
    "Category",
    "Image",
    "Actions",
];
let seedData = {
    name: "Apple",
    description: "A fruit",
    price: 1.99,
    quantity: 100,
    category: "Fruit",
    actions: "",
    image: "",
}
function Loading() {
    return (
        // Loading spinner
        <div className="flex mt-10 items-center justify-center w-full h-full">
            <div className="w-24 h-24 border-2 border-b-4 border-gray-700 rounded-full animate-spin"></div>
        </div>
    )
}

function Error() {
    return (
        <div className="flex mt-10 items-center justify-center w-full h-full">
            <p className="text-lg text-center">Error : No Data Has Been Loaded</p>
        </div>
    )
}

export default function InventoryPage(){

    const result = useQuery({
        queryKey: ['inventory'],
        queryFn: async () => await fetch(InventoryService.API_URL+'/GetInventory').then(res => res.json()),
    })
    const mutation = useMutation({
        mutationKey: ['inventory'],
        mutationFn: async (data) => InventoryService.deleteInventory(data),
        onSuccess: () => {
            result.refetch()
            toast.success('Item Deleted') 
        }
    })

    return (
        <>
            <section className='min-h-screen bg-gray-50'>
                <section className='pt-10 min-h-screen'>
                    <div className='flex gap-2 mx-4  border rounded-md px-2 py-3 bg-gray-300'>
                        {headers.map((header) => (
                            <h2 className='flex-1 text-center'>{header}</h2>
                        ))}
                    </div>
                    {result.isError ? <Error/> : null}
                    {result.isFetching ? <Loading/> : result.data?.map((data) => (
                        <>
                            <div className='flex mx-4 border' key={data.id}>
                                <h2 className='flex-1 text-center'>{data.name}</h2>
                                <h2 className='flex-1 text-center'>{data.description}</h2>
                                <h2 className='flex-1 text-center'>{data.price}</h2>
                                <h2 className='flex-1 text-center'>{data.quantity}</h2>
                                <h2 className='flex-1 text-center'>{data.category}</h2>
                                <h2 className='flex-1 text-center'>{data.image}</h2>
                                <Button onClick={ () =>  mutation.mutateAsync(data.id)} className='flex-1  text-center hover:bg-red-500'>Delete</Button>

                            </div>
                        </>
                    ))}

                </section>
            </section>

        </>
    )
}