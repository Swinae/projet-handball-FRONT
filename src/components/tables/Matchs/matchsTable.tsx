import { Button, CustomFlowbiteTheme, Flowbite, Table, TableBody, TableCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryTag from "../../CategoryTag/CategoryTag";
import IMatchInterface from "../../../services/interfaces/MatchInterface";
import { getMatchs } from "../../../services/api/Matchs";

export default function MatchTable() {
    const customTheme: CustomFlowbiteTheme = {
        button: {
            color: {
                default: "text-white bg-custom-FF7D00 my-4 mx-auto",
            },
        },

        table: {
            row: {
                base: "grid grid-rows-1 md:grid-cols-6 grid-cols-4 items-center "
            }
        }
    };

    const [matchs, setMatchs] = useState<any[]>([])

    useEffect(() => {
        async function loadMatchs() {
            const matchsList = await getMatchs()
            setMatchs(matchsList)
            console.log("🚀 ~ loadMatchs ~ matchsList:", matchsList)
        }

        loadMatchs()
    }, [])


    return (
        <>
            <Flowbite theme={{ theme: customTheme }}>
                <div className="flex justify-between pt-8">
                    <h2 className="text-4xl py-4 font-bold">Résultats des matchs</h2>
                    <Button className="mr-0" color="default"><NavLink to={'/résultats-des-matchs'}>Voir tous les résultats</NavLink></Button>
                </div>

                <Table>
                    <TableBody className="">
                        {matchs.sort((a, b) => b.id - a.id).slice(0, 5).map((match: IMatchInterface, index: number) => (
                            <TableRow key={index} className=" bg-custom-287581 text-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell >{match.created_at.toString().split("T")[0].split("-").reverse().join("/")}</TableCell>
                                <TableCell className="hidden md:block">Night Watch Handball</TableCell>
                                <TableCell className=""><img className="ml-auto max-h-14" src="../../../../public/logoClub.png" alt="Logo du club Night's Watch Handball" /></TableCell>
                                <TableCell className=""><div className="m-auto w-24 text-xl font-bold bg-custom-score text-center rounded-full py-2">{match.score_home} | {match.score_visitor}</div></TableCell>
                                <TableCell className="text-left">RIVAL TEAM LOGO</TableCell>
                                <TableCell className="hidden md:block">{match.rival_team}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Flowbite>
        </>
    );
}
