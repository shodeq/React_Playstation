import Navbar from "../../fragments/Navbar";

export default function DashboardMainLayout({children}){
    return(
        <section className="w-full p-[20px] flex flex-col gap-[20px] items-center pb-[50px] lg:pb-[0]">
        <Navbar/>
        <div className="isi w-full lg:flex items-center">
            {children}
        </div>
    </section>
    )
}