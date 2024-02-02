import {Button, Card, CardFooter, Input, Select, Typography, Option, CardBody} from "@material-tailwind/react";
import {useState} from "react";

const items =[
    {
        id: 1,
        name: 'apple',
        price: 2.50
    },
    {
        id: 2,
        name: 'banana',
        price: 3.50
    },
    {
        id: 3,
        name: 'orange',
        price: 4.50
    },

]

export default function SalesPage(){
    // a method that watches for changes in quantity and discount and updates the total price in React
    const [quantity, setQuantity] = useState(1)
    const [discount, setDiscount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [selectedItemPrice, setSelectedItemPrice] = useState('')

    const handleSelectChange = (e) => {
        console.log(e) // this will log the selected item
        setSelectedItemPrice(e)
        setTotalPrice(formula(quantity, discount, e))
    }
    const formula = (quantity, discount,price) => {
        return (quantity * price) - discount
    }
    function handleQuantityChange(e){
        console.log(e.target.value)
        setQuantity(e.target.value)
        if (e.target.value < 0){
            setQuantity(0)
            setTotalPrice(formula(0, discount, selectedItemPrice))
            return;
        }
            setTotalPrice(formula(e.target.value, discount, selectedItemPrice))

    }
    function handleDiscountChange(e){
        console.log(e.target.value)
        setDiscount(e.target.value)
        if (e.target.value < 0 || e.target.value === ''){
            setDiscount(0)
            setTotalPrice(formula(quantity, 0, selectedItemPrice))
            return;
        }
        setTotalPrice(formula(quantity, e.target.value, selectedItemPrice))
    }





    return (
        <>
            <section className='min-h-screen bg-gray-50'>
                <h1>Sales Page</h1>
                <Card className='px-4 py-4 mx-4'>
                    <CardBody>
                    <section>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Item Name</Typography>
                            <Select onChange={e => handleSelectChange(e)}  value={selectedItemPrice} variant='static'>
                                {items.map((item) => (
                                    <Option  key={item.id} value={item.price}>{item.name}</Option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Quantity</Typography>
                            <Input value={quantity} onInput={e => handleQuantityChange(e)} variant='static' type="number"/>
                        </div>
                        <div>
                            <Typography className='-mb-3' variant='h6'>Discount</Typography>
                            <Input value={discount} onInput={e => handleDiscountChange(e)} variant='static' type="number"/>
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
                            <Typography className='mx-1' variant='paragraph' type="number">RM {totalPrice}</Typography>
                        </Card>
                    </section>
                    </CardBody>
                    <CardFooter className='flex justify-end gap-3 '>
                        <Button >Reset</Button>
                        <Button >Submit</Button>
                    </CardFooter>
                </Card>

            </section>
        </>
    )
}