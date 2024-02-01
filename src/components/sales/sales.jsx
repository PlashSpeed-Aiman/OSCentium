import {Button, Card, CardFooter, Input, Select, Typography} from "@material-tailwind/react";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption.js";

export default function SalesPage(){
    // a page to record sales data
    // has a form to record sales data
    // in the form, there are fields for:
    // item name (dropdown)
    // quantity
    // price but it's fixed unless the user has a special discount
    // discount (which can be a percentage or a fixed amount)
    // total price
    // date
    // time
    // the form has a submit button
    // the form has a reset button
    return (
        <>
            <section className='min-h-screen bg-gray-50'>
                <h1>Sales Page</h1>
                <Card className='px-4 py-4 mx-4'>
                    <form>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Item Name</Typography>
                            <Select variant='static'>
                                <SelectOption value='apple'>Apple</SelectOption>
                                <SelectOption value='banana'>Banana</SelectOption>
                                <SelectOption value='orange'>Orange</SelectOption>
                                <SelectOption value='grape'>Grape</SelectOption>
                            </Select>
                        </div>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Quantity</Typography>
                            <Input variant='static' type="number"/>
                        </div>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Discount</Typography>
                            <Input variant='static' type="number"/>
                        </div>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Date</Typography>
                            <Input variant='static' type="date"/>
                        </div>
                        {/*<div>*/}
                        {/*    <Typography className='-mb-3' variant='h6'>Time</Typography>*/}
                        {/*    <Input variant='static' type="time"/>*/}
                        {/*</div>*/}
                        <Card className='bg-gray-100 p-1.5 mt-2.5 -mx-1'>
                            <Typography className='' variant='h6'>Total Price</Typography>
                            <Typography className='mx-1' variant='paragraph' type="number">RM 0.00</Typography>
                        </Card>
                        <CardFooter className='flex justify-end gap-3 '>
                        <Button >Reset</Button>
                        <Button >Submit</Button>
                        </CardFooter>
                    </form>
                </Card>

            </section>
        </>
    )
}