// src/app/components/RaceCard.tsx

import { RaceInfo } from '../data/racecards';

interface RaceCardProps {
  race: RaceInfo;
}

export default function RaceCard({ race }: RaceCardProps) {
  return (
    <section className="bg-green-900 text-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-1">{race.time} {race.location}</h2>
      <p className="text-yellow-300 mb-2">{race.title}</p>
      <div className="text-sm text-gray-200 mb-4">
        <span>Going: {race.going}</span> · 
        <span> Weather: {race.weather}</span> · 
        <span> Prize: {race.prize}</span> · 
        <span> Distance: {race.distance}</span>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-sm border-collapse">
          <thead>
            <tr className="bg-green-700">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Horse</th>
              <th className="p-2 border">Trainer</th>
              <th className="p-2 border">Jockey</th>
              <th className="p-2 border">Today</th>
              <th className="p-2 border">Last</th>
              <th className="p-2 border">Prev</th>
            </tr>
          </thead>
          <tbody>
            {race.runners.map((runner, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-800' : 'bg-green-700'}>
                <td className="p-2 border text-center">{runner.number}</td>
                <td className="p-2 border">{runner.horse}</td>
                <td className="p-2 border">{runner.trainer}</td>
                <td className="p-2 border">{runner.jockey}</td>
                <td className="p-2 border text-center">{runner.today}</td>
                <td className="p-2 border text-center">{runner.last}</td>
                <td className="p-2 border text-center">{runner.prev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
