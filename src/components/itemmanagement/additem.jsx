import {Button, Card, Input, Typography} from "@material-tailwind/react";

export default function AddItemCard(){
    return(
        <section >
            <Card className='w-full px-3 py-3'>
                <form className='flex flex-col '>
                    <Typography variant="h6" color="blue-gray" className='-mb-4 mt-2'>Item Name</Typography>
                    <Input variant="static" className='flex-1 ' size="lg" type="text" color="lightBlue"/>
                    <Typography variant="h6" color="blue-gray" className='-mb-4 mt-2'>
                        Description
                    </Typography>
                    <Input variant="static" size="lg" type="text" color="lightBlue"
                    />
                    <div className='grid grid-cols-2 gap-2.5'>
                        <div className='flex-1'>
                            <Typography  variant="h6" color="blue-gray" className='-mb-4 mt-2'>Item Price</Typography>
                            <Input variant="static" size="lg" type="text" color="lightBlue"/>
                        </div>
                        <div className='flex-1'>
                            <Typography  variant="h6" color="blue-gray" className='-mb-4 mt-2'>Item Category</Typography>
                            <Input variant="static" size="lg" type="text" color="lightBlue"/>
                        </div>
                            </div>

                    <Typography variant="h6"  color="blue-gray" className='-mb-4 mt-2'>Item Image</Typography>
                    <Input variant="static" size="lg" type="file" color="lightBlue"/>
                    <Button className={'mt-3 ml-auto'} color="lightBlue" ripple="light">Submit</Button>
                </form>
            </Card>
        </section>
    )
}