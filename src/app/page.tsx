import RaceCard from './components/RaceCard';
import { raceCardData } from './data/racecards';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Today&apos;s Racecards</h1>
      {raceCardData.map((race, index) => (
        <RaceCard key={index} race={race} />
      ))}
    </main>
  );
}
