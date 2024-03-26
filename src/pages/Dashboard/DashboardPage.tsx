import { Tabs } from "flowbite-react";

export default function DashboardPage() {
    return (
        <>
            <Tabs aria-label="Tabs with icons" style="underline">
                <Tabs.Item active title="Gérer les actualités">
                    This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Gérer les évènements">
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Gérer les utilisateurs">
                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Composition d'équipe">
                    This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Résultats des matchs">
                    This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
            </Tabs>


        </>
    )
}