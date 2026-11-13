import { useEffect, useState } from "react";
import axios from "axios"

export default function Fetchdata() {

    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log("data:", res.data)
            setdata(res.data)
        }
        fetchData()

    }, [])

    return (
        <div>
            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table class="w-full h-screen text-sm text-left rtl:text-right text-body">
                    <thead class="text-xl font-bold bg-blue-700 text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Phone Number
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Website
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Id
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((values) => (
                                <tr className="bg-green-600 border-2 text-white">
                                    <th scope="row" className="px-4 py-4 font-semibold">
                                        {values.name}
                                    </th>
                                    <th scope="row" className="px-4 py-4 font-semibold">
                                        {values.email}
                                    </th>
                                    <th scope="row" className="px-4 py-4 font-semibold">
                                        {values.phone}
                                    </th>
                                    <th scope="row" className="px-4 py-4 font-semibold">
                                        {values.website}
                                    </th>
                                    <th scope="row" className="px-4 py-4 font-semibold">
                                        {values.id}
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};
