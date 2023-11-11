import { Home, Receipt } from "lucide-react";
import Link from "next/link";


export default function NavBar() {

    return (
        <>
            <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                <Home />
                                <span className="ms-3">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faturas" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                <Receipt />
                                <span className="ms-3">Faturas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}