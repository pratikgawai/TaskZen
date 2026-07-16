import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout({ children }) {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-slate-100 min-h-screen">

                <Navbar />

                <div className="p-8">

                    {children}

                </div>

            </div>

        </div>

    )

}