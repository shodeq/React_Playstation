import DashboardMainLayout from "../layout/dashboard/DashboardMainLayout"
import Product from "../elements/Product"
import Rekomendasi from "../elements/Rekomendasi"
import Imageblack from "../image/black.png"
import Imagepc from "../image/pc.png"
import Imageps from "../image/ps.png"
import { FaCheck, FaShoppingCart, FaStar } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

export default function App(){
    return(
        <DashboardMainLayout>
            <div className="kiri lg:w-[50%] w-full hidden lg:flex flex-col">
                <div className="atas1 w-[100%] flex lg:hidden justify-between items-center">
                    <i className="fa-solid fa-arrow-left h-[50px] aspect-square flex justify-center items-center text-[1.5rem] border rounded-full border-[2px] "></i>
                    <h1 className="font-extrabold ">Product Details</h1>
                    <i className="fa-solid fa-ellipsis h-[50px] aspect-square flex justify-center items-center text-[1.5rem] border rounded-full border-[2px]"></i>
                </div>
                <div className="atas2 w-full flex flex-col gap-[20px] items-center p-[10px]">
                    <h1 className="font-extrabold hidden lg:flex text-[2.5rem]">NEW AND SPECIAL PRODUCT</h1>
                    <img src={Imageps} alt="" className="w-[60%]"/>
                    <div className="inpo w-full flex flex-col items-center gap-[10px]" >
                        <h2 className="font-extrabold text-[1.5rem]">Solar Red JoyStick</h2>
                        <p className=" text-[1rem] font-semibold text-gray-400 ">Accesories</p>
                        <ul className="w-full flex items-center justify-center px-[20px] gap-[10px] lg:gap-[25px]">
                            <li className="font-semibold text-[1.3rem]">color : </li>
                            <li className="p-[15px] rounded-full bg-black"></li>
                            <li className="p-[15px] rounded-full bg-emerald-600"></li>
                            <li className="p-[15px] rounded-full bg-cyan-600"></li>
                            <li className="p-[15px] rounded-full bg-blue-500"></li>
                            <li className="p-[15px] rounded-full bg-rose-700"></li>
                        </ul>
                    </div>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo ipsam tempore corrupti.</p>
                    <div className="harga w-full flex items-center justify-between">
                        <h1 className="flex text-[2rem] font-extrabold items-end">$223 <p className="text-[1rem] font-semibold">/pcs</p></h1>
                        <button className="px-[25px] py-[10px] border rounded-[10px] bg-rose-800 text-white font-extrabold">add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="kanan w-full lg:w-[50%] lg:p-[20px]">
                <div className="product w-full flex flex-col gap-[10px]">
                    <div className="atas w-full flex justify-between items-center">
                        <h1 className="text-[1.5rem] font-extrabold">popular product</h1>
                        <p className="text-[1rem] font-semibold text-rose-800">view all</p>
                    </div>
                    <div className="barang w-full py-[30px] px-[20px] flex overflow-auto gap-[20px] ">
                        <Product>
                            <Product.Image image={Imageblack}/>
                            <Product.Deskripsi judul="Solar red joy" keterangan="Accessories" harga="$223" pcs="/Pcs" icon={<FaShoppingCart/>}/>
                            <Product.Aksi ikon1={<FaXmark/>} ikon2={<FaStar/>} ikon3={<FaCheck/>}/>
                        </Product>
                        <Product>
                            <Product.Image image={Imageps}/>
                            <Product.Deskripsi judul="Solar red joy" keterangan="Accessories" harga="$223" pcs="/Pcs" icon={<FaShoppingCart/>}/>
                            <Product.Aksi ikon1={<FaXmark/>} ikon2={<FaStar/>} ikon3={<FaCheck/>}/>
                        </Product>
                        <Product>
                            <Product.Image image={Imageps}/>
                            <Product.Deskripsi judul="Solar red joy" keterangan="Accessories" harga="$223" pcs="/Pcs" icon={<FaShoppingCart/>}/>
                            <Product.Aksi ikon1={<FaXmark/>} ikon2={<FaStar/>} ikon3={<FaCheck/>}/>
                        </Product>
                        <Product>
                            <Product.Image image={Imageps}/>
                            <Product.Deskripsi judul="Solar red joy" keterangan="Accessories" harga="$223" pcs="/Pcs" icon={<FaShoppingCart/>}/>
                            <Product.Aksi ikon1={<FaXmark/>} ikon2={<FaStar/>} ikon3={<FaCheck/>}/>
                        </Product>
                    </div>
                    <div className="lain w-full">
                        <div className="atas w-full flex justify-between items-center">
                            <h1 className="text-[1.5rem] font-extrabold">Recomended</h1>
                            <p className="text-[1rem] font-semibold text-rose-800">view all</p>
                        </div>
                        <div className=" bungkus w-full flex   py-[30px] flex overflow-auto gap-[20px] ">
                            <Rekomendasi>
                                <Rekomendasi.Image image={Imagepc}></Rekomendasi.Image>
                                <Rekomendasi.Deskripsi judul="Ps5 Solar Red" packages="Packages" harga="$788" pcs="/Pcs"></Rekomendasi.Deskripsi>
                            </Rekomendasi>
                            <Rekomendasi>
                                <Rekomendasi.Image image={Imagepc}></Rekomendasi.Image>
                                <Rekomendasi.Deskripsi judul="Ps5 Solar Red" packages="Packages" harga="$788" pcs="/Pcs"></Rekomendasi.Deskripsi>
                            </Rekomendasi>
                            <Rekomendasi>
                                <Rekomendasi.Image image={Imagepc}></Rekomendasi.Image>
                                <Rekomendasi.Deskripsi judul="Ps5 Solar Red" packages="Packages" harga="$788" pcs="/Pcs"></Rekomendasi.Deskripsi>
                            </Rekomendasi>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bawahl lg:hidden w-[90%] fixed bottom-[10px] bg-[white] p-[10px] rounded-t-[20px]">
            <div className="kanan w-full flex justify-between items-center">
                <button className="px-[10px] py-[7px] flex gap-[5px] rounded-[20px] bg-rose-800 text-[white]"><i className="fa-solid fa-compass text-[1.5rem] font-extrabold bg-rose-800 rounded-full text-[white]"></i> MEET ME </button>
                <i className="fa-solid fa-gamepad text-[2rem] text-gray-300"></i>
                <i className="fa-solid fa-comment text-[2rem] text-gray-300"></i>
                <i className="fa-solid fa-user text-[2rem] text-gray-300"></i>
            </div>
        </div>

        </DashboardMainLayout>
    )
}