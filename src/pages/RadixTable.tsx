import React from 'react';

function ExampleTable() {
    return (
        <div className="relative overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b bg-gray-800 border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-800 border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function RadixTable() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-cals tracking-wider leading-none">
                    Radix Table
                </h1>
                <h4 className="text-lg font-inter">
                    Simple React table using the UI library Radix with advanced functionality.
                </h4>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-1/2 bg-neutral-200 border-2 border-neutral-500 p-8 text-black flex justify-center items-center rounded-xl">
                    <ExampleTable />
                </div>
            </div>
            <div>
                <p>Some description about the component.</p>
            </div>
        </section>
    )
}

export default RadixTable;
