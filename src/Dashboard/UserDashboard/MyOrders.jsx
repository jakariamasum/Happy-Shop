import { Input, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const MyOrders = () => {
    return (
        <div className="overflow-x-auto px-4 max-w-6xl py-7 mx-auto min-h-[500px]">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between p-5 bg-white rounded-xl gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<FaSearch></FaSearch>}
                    />

                </div>
                <span className="text-gray-600 mb-2">
                    {/* TODO: add dynamic orders number */}
                    Total 0 orders
                </span>
            </div>
            <Table aria-label="Example table with custom cells">
                <TableHeader>
                    <TableColumn>Order By</TableColumn>
                    <TableColumn>Customer Email / Number</TableColumn>
                    <TableColumn className="text-center">Total Products</TableColumn>
                    <TableColumn className="text-center">Total Quantity</TableColumn>
                    <TableColumn className="text-center">Total Price</TableColumn>
                    <TableColumn className="text-center">Order Status</TableColumn>
                    <TableColumn className="text-center">Details</TableColumn>
                </TableHeader>
                <TableBody>
                    {/* TODO: add order details here */}

                </TableBody>
            </Table>
        </div>
    );
};

export default MyOrders;