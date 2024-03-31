import dragonDogma from '../img/dragon-dogma.png'
import teamfightTactic from '../img/teamfight-tactic.png'
import pathofExile from '../img/pathofexile.png'
import gtaV from '../img/gtav.png'
import rocketLeague from '../img/rocketLeague.png'
import honkaiBanner from '../img/honkai-banner.png'
function Trending(){
    return(
        <>
       <section className="">
            <div className="p-4 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="titile flex items-center">
                        <ion-icon name="flame"></ion-icon>
                        <p className="text-2xl py-3 text-white px-1">เกมฮิตติดเทรนด์</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://www.dragonsdogma.com/2/en-us/">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200"  loading="lazy" src={dragonDogma} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Dragon's Dogma II</p>
                        </div>
                       </a>
                    </div>
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://teamfighttactics.leagueoflegends.com/th-th/">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200"  loading="lazy" src={teamfightTactic} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Teamfight Tactics</p>
                        </div>
                       </a>
                    </div>
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://www.pathofexile.com/">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200" loading="lazy" src={pathofExile} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Path of Exile</p>
                        </div>
                       </a>
                    </div>
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://www.rockstargames.com/gta-v">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200" loading="lazy" src={gtaV} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Grand Theft Auto V</p>
                        </div>
                       </a>
                    </div>
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://www.rocketleague.com/en">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200" loading="lazy" src={rocketLeague} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Rocket League</p>
                        </div>
                       </a>
                    </div>
                    <div className="my-9 md:my-0">
                       <a target='blank' href="https://hsr.hoyoverse.com/th-th/">
                        <img className="h-full rounded-2xl hover:scale-105 duration-200" loading="lazy" src={honkaiBanner} alt="" />
                        <div className="flex content-center items-center ">
                            <ion-icon name="game-controller"></ion-icon> <p className="text-center font-bold py-2 px-2">Honkai: Star Rail</p>
                        </div>
                       </a>
                    </div>
                    
                    
                </div>
            </div>
        </section>


        </>
    )
}
export default Trending