import { Tabs } from "flowbite-react";
import { NewsTab } from "../../components/tabs/NewsTab/NewsTab";
import EventsTab from "../../components/tabs/EventsTab/EventsTab";

export function DashboardPage() {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="Gérer les actualités">
        <NewsTab/>
      </Tabs.Item>
      <Tabs.Item title="Gérer les évènements">
        {<EventsTab />}
      </Tabs.Item>
      <Tabs.Item title="Gérer les utilisateurs">
        Contenu utilisateurs
      </Tabs.Item>
      <Tabs.Item title="Composition d'équipe">
        Contenu composition d'équipe
      </Tabs.Item>
      <Tabs.Item title="Résultat de match">
        Contenu résultat de match
      </Tabs.Item>
    </Tabs>
  );
}
