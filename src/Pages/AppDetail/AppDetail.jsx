import { Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { IoMdStar } from 'react-icons/io';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList,
} from 'recharts';
import { addToStoredDB } from '../../Component/AddToDB/AddToDB';

const AppDetail = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const app = data.find(app => app.id === appId);
    const [installed, setInstalled] = useState(false)

    const { image, title, downloads, ratingAvg, reviews, companyName, size, description, ratings } = app;


    const formattedRatings = ratings.map(r => {
        let count = r.count.toLowerCase().includes('k')
            ? parseFloat(r.count) * 1000
            : parseFloat(r.count);
        return { ...r, count };
    }).reverse();


    const handleInstall = id => {
        console.log(` installing app with id: ${id}`)
        if (!installed) {
            toast("✅ Installed");
            setInstalled(true)
            addToStoredDB(id)
        }
    }

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installed')) || [];
        if (stored.includes(appId)) {
            setInstalled(true);
        }
    }, [appId]);

    return (
        <div className="p-4">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 mt-4 mb-4">
                <div>
                    <img src={image} alt="App Icon" className="w-72 object-contain" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-1">{title}</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Developed by <a href="#" className="text-purple-600 underline">{companyName}</a>
                    </p>
                    <div className="divider divider-start"></div>

                    <div className="grid grid-cols-3 gap-4 text-center mb-4 items-center">
                        <div>
                            <Download className="mx-auto text-green-500" />
                            <p className="text-xs text-gray-500">Downloads</p>
                            <p className="text-4xl font-bold">{downloads}</p>
                        </div>
                        <div>
                            <IoMdStar size={28} className="mx-auto text-yellow-400" />
                            <p className="text-xs text-gray-500">Average Rating</p>
                            <p className="text-4xl font-bold">{ratingAvg}</p>
                        </div>
                        <div>
                            <BiSolidLike size={30} className="mx-auto text-purple-500" />
                            <p className="text-xs text-gray-500">Total Reviews</p>
                            <p className="text-4xl font-bold">{reviews}</p>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button onClick={() => handleInstall(appId)} className=" bg-green-500 text-white py-2 px-2 rounded-lg font-semibold hover:bg-green-600 transition"
                        disabled={installed} >

                        {installed ? "Installed" : `Install Now (${size})`}

                    </button>
                </div>
            </div>

            <div className="divider divider-start"></div>

            {/* Rating Chart */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Ratings</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={formattedRatings}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
                        <Bar dataKey="count" fill="#FF8811">
                            <LabelList dataKey="count" position="right" formatter={(value) => new Intl.NumberFormat().format(value)} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="divider divider-start"></div>

            {/* Description */}
            <div className="mt-4 mb-4">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="text-[#627382]">{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;
