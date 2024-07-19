const Rekomendasi = ({children}) =>{
    return(
        <div className="card w-full lg:w-[60%] flex items-center justify-between border border-[3px] p-[15px] rounded-[20px] shrink-0">
                                {children}
                            </div>
    )
}

const Image = ({image}) =>{
    return(
        <div className="mbar w-[40%]">
                                    <img src={image} alt="" className="h-[80px]"/>
                                </div>
    )
}

const Deskripsi = ({judul, packages, harga, pcs})=>{
    return(
        <div className="hooh w-[60%] flex justify-between">
        <h1 className="font-extrabold ">{judul} <p className=" font-normal text-[gray]">{packages}</p></h1>
        <h1 className="flex font-extrabold text-rose-800">{harga}<p className="font-normal text-[gray]">{pcs}</p></h1>
    </div>
    )
}

Rekomendasi.Image = Image
Rekomendasi.Deskripsi = Deskripsi

export default Rekomendasi
