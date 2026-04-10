import BattleHistory from "../battleHistory/BattleHistory"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"


const Dashboard = () => {
    return (
        <div>

            <h1 className="text-4xl font-extrabold w-full text-black text-center p-5 m-5">Scoreboard!</h1>

            <div className="flex items-center justify-center w-full max-w-4xl">

                <Carousel 
                    className="w-full"
                    opts={{
                    align: "start",
                    loop: true,
                    }}
                    >
                    <CarouselContent >
                    <CarouselItem className="flex items-center justify-center w-full">
                        <BattleHistory />
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-full">
                        <BattleHistory />
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div> 
  )
}

export default Dashboard