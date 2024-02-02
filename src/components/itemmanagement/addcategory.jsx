import {
    Button,
    Card,
    CardBody,
    CardFooter, CardHeader,
    Collapse,
    Input,
    List,
    ListItem,
    Option,
    Select,
    Typography
} from "@material-tailwind/react";
import {useState} from "react";

const seed = [
    "Volvo",
    "Saab",
    "Mercedes",
    "Audi",
    "Mercedes",
    "Audi",
    "Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi","Mercedes",
    "Audi",
]
export default function AddCategoryCard (){
    // a dropdown to select the category
    // a text input to add a new category
    // a button to add the category
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <section>
            <Card className='h-full w-full px-3 py-3 border border-blue-gray-200'>
                <CardBody >

                    <div>
                        <Typography className='mt-2 -mb-3' variant='h6' htmlFor="newcategory">New Category</Typography>
                        <Input variant='static' type="text" id="newcategory" name="newcategory"></Input>
                    </div>
                </CardBody>
                <CardFooter className='-mt-6'>
                        <div  className='flex flex-col w-fit gap-2'>
                            <Button>Add Category</Button>
                            <Button onClick={() => {
                                console.log('clicked')
                                setIsCollapsed((cur) => !cur) }

                            } variant='text'>Show Categories</Button>
                        </div>

                </CardFooter>

            </Card>
            <Collapse open={isCollapsed}>
                <Card  className='mt-5 border border-blue-gray-200  w-full px-3 py-3  '>
                    <List className='h-72 overflow-auto'>
                            {seed.map((item) => (
                                <ListItem>{item}</ListItem>
                            ))}
                        </List>

                </Card>
            </Collapse>

        </section>

    )

}