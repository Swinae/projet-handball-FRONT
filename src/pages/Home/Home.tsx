import { ClubBanners } from "../../components/ClubBanners/ClubBanners";
import { NewsCarousel} from "../../components/Carousel/NewsCarousel";
import { EventsTable } from "../../components/tables/Events/eventsTable";

export default function HomePage() {
    return (
        <>
            <ClubBanners />
            <NewsCarousel />
            <div className="bg-gray-100">
                <EventsTable />
            </div>

        </>
    )
}