import {ReactNode} from "react";
import {Sidebar} from "@/app/componentes";


export default function DashboardLayout({children}: {children: ReactNode}) {
    return(
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />
                <div className='p-3 w-full text-slate-500'>
                    {children}
                </div>
            </div>
        </div>
    )
}
