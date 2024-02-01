import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function HomePage(){
    return(

        <div className='bg-gray-50 min-h-screen'>
            <h1>Home Page</h1>
            <div className='flex flex-col md:lg:grid gap-3 my-5 mx-auto max-w-3xl grid-cols-3 '>
                <Card className='p-2'>
                    <CardBody>
                        <Typography color="gray">Total Sales</Typography>
                        <Typography size="xl"> $ 25,000 </Typography>
                    </CardBody>
                    <h1>Section 1</h1>
                </Card>
                <Card className='p-2'>
                    <CardBody>
                        <Typography color="gray">Total Sales</Typography>
                        <Typography size="xl"> $ 25,000 </Typography>
                    </CardBody>
                    <h1>Section 1</h1>
                </Card>
                <section className='flex-1 p-2 w-60 h-32 bg-white rounded-md border border-gray-400'>
                    <h1>Section 1</h1>
                </section>
                <section className='p-2 w-60 h-32 bg-white rounded-md border border-gray-400'>
                    <h1>Section 1</h1>
                </section>
                <section className='p-2 w-60 h-32 bg-white rounded-md border border-gray-400'>
                    <h1>Section 1</h1>
                </section>
                <section className='p-2 w-60 h-32 bg-white rounded-md border border-gray-400'>
                    <h1>Section 1</h1>
                </section>
                <section className='p-2 w-60 h-32 bg-white rounded-md border border-gray-400'>
                    <h1>Section 1</h1>
                </section>
            </div>

        </div>
    )
}