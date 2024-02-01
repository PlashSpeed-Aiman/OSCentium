import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Tab,
    Tabs,
    TabsHeader,
    TabsBody,
    TabsItem, TabPanel,
} from "@material-tailwind/react";
import AddItemCard from "./additem";

const headers = [
    "Add Item",
    "Edit Item",]



export default function ItemManagementPage() {
    return (
        <>
            <section className='min-h-screen bg-gray-50'>
                <h1>Item Management Page</h1>
                <Tabs value='html' className='flex flex-col mt-5'>
                    <TabsHeader className='max-w-3xl mx-auto'>
                        {headers.map((header) => (
                            <Tab value={header}>{header}</Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value='Add Item'>
                            <AddItemCard/>
                        </TabPanel>
                        <TabPanel value='Edit Item'>
                            <h1>Edit Item</h1>
                        </TabPanel>
                    </TabsBody>
                </Tabs>

            </section>

        </>
    )
}