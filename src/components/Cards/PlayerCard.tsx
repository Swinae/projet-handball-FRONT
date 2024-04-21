import { Card } from "flowbite-react";

export function PlayerCard() {
    return (
        <Card
            className="max-w-xs"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="../../../public/bannersClub.png"
        >
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                Jean-Michel Dupont
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Ailier
            </p>
        </Card>
    );
}
