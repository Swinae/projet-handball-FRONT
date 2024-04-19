import { PlayerCard } from "../../components/Cards/PlayerCard";

export function PlayersPage() {

    return (
        <>
            <section className="player-list my-4">
                <select name="Position" id="select-position">
                    <option value="Tous" selected>Tous</option>
                    <option value="Gardiens">Gardiens</option>
                    <option value="Ailiers">Ailiers</option>
                    <option value="Demi-centres">Demi-centres</option>
                    <option value="Arrières">Arrières</option>
                    <option value="Pivots">Pivots</option>
                </select>

                <div className="player-list grid grid-cols-[auto, 1fr] grid-rows-5 mt-4 gap-4">
                    <h4 className="col-start-1 row-start-1">GARDIENS</h4>
                    <div className="player-list--cards col-start-2 row-start-1 flex gap-4">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </div>
                    <h4 className="col-start-1 row-start-2">AILIERS</h4>
                    <div className="player-list--cards col-start-2 row-start-2 flex gap-4">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </div>
                    <h4 className="col-start-1 row-start-3">DEMI-CENTRES</h4>
                    <div className="player-list--cards col-start-2 row-start-3 flex gap-4">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </div>
                    <h4 className="col-start-1 row-start-4">ARRIERES</h4>
                    <div className="player-list--cards col-start-2 row-start-4 flex gap-4">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </div>
                    <h4 className="col-start-1 row-start-5">PIVOTS</h4>
                    <div className="player-list--cards col-start-2 row-start-5 flex gap-4">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </div>
                </div>
            </section>
        </>
    )
}