export default function Navbar() {

    return (

        <div className="h-16 bg-white shadow flex justify-between items-center px-8">

            <h2 className="text-2xl font-bold">

                Dashboard

            </h2>

            <button
                className="bg-red-500 text-white px-4 py-2 rounded">

                Logout

            </button>

        </div>

    )

}