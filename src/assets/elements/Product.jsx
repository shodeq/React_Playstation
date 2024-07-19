const Product =({children})=>{
    return(
        <div className="card shadow-[0px_0px_20px_10px_#00000024] border px-[15px] py-[25px] w-[70%] lg:w-[40%] gap-[15px] relative shrink-0 rounded-[20px]">
                            {children}
                     </div>

    )
}

const Image = ({image})=>{
    return(
        <div className="mbar w-full">
            <img src={image} alt="" className="w-full"/>
        </div>
    )
}

const Deskripsi = ({judul, keterangan, harga, pcs, icon})=>{
    return(
        <div className="inpo w-full flex flex-col items-center gap-[10px]">
        <h1 className="font-extrabold">{judul}</h1>
        <div className="harga w-full flex items-center justify-between">
            <div className="hooh">
                <p className="font-semibold text-[gray]">{keterangan}</p>
                <h3 className="flex font-extrabold text-rose-800">{harga} <p className="font-normal text-[gray]">{pcs}</p></h3>
            </div>
            <button className="bg-gray-500 h-[40px] aspect-square rounded-[10px] flex justify-center items-center">{icon}</button>
        </div>
    </div>
    )
}

const Aksi = ({ikon1, ikon2, ikon3}) =>{
    return(
        <div className="ikon w-full flex items-center justify-center gap-[20px] absolute bottom-[-25px] left-[0]">
        {<i className="fa-solid fa-xmark h-[30px] border aspect-square flex items-center justify-center rounded-full border-[4px]">{ikon1}</i>}
        <i className="fa-solid fa-star h-[50px] aspect-square flex justify-center items-center text-rose-800 text-[1.5rem] border border-[4px] rounded-full"> {ikon2}</i>
        <i className="fa-solid fa-check h-[30px] border aspect-square flex items-center justify-center rounded-full border-[4px]" >{ikon3}</i>
    </div>
    )
}

Product.Image = Image
Product.Deskripsi = Deskripsi
Product.Aksi = Aksi

export default Product