import { MlCard, MlCard2 } from "./MlCard/MlCard"

export default function Ml() {
    return (
      <section id="online" className="min-h-screen pt-12 flex flex-col">
        <h1 className=" text-[80px] text-center font-bold">Compra Online</h1>
        <div className="flex justify-evenly pt-20 max-[1130px]:flex-col">
          <MlCard />
          <MlCard2 />
        </div>
      </section>
    )
}