// src/app/data/racecards.ts

export interface Runner {
    number: number;
    horse: string;
    trainer: string;
    jockey: string;
    today: number;
    last: number;
    prev: number;
  }
  
  export interface RaceInfo {
    time: string;
    location: string;
    title: string;
    going: string;
    weather: string;
    prize: string;
    distance: string;
    runners: Runner[];
  }
  
  export const raceCardData: RaceInfo[] = [
    {
      time: "1:10",
      location: "Ayr (LH)",
      title: "Scotty Brand Handicap Chase (Premier Handicap)",
      going: "Good to Soft",
      weather: "Mostly Cloudy",
      prize: "£28k",
      distance: "16f",
      runners: [
        {
          number: 1,
          horse: "Tommy's Oscar",
          trainer: "Ann Hamilton",
          jockey: "Danny McMenamin",
          today: 172,
          last: 0,
          prev: 172,
        },
        {
          number: 2,
          horse: "Homme Public",
          trainer: "Oliver Greenall",
          jockey: "Henry Brooke",
          today: 169,
          last: 162,
          prev: 166,
        },
        // ...you can add the rest or copy existing
      ],
    },
    {
      time: "1:15",
      location: "Curragh (RH)",
      title: "Tote Never Beaten By SP Irish EBF Maiden",
      going: "Good",
      weather: "Mostly Cloudy",
      prize: "£11k",
      distance: "6f",
      runners: [
        {
          number: 1,
          horse: "Bobby McGee",
          trainer: "Noel Meade",
          jockey: "Colin Keane",
          today: 88,
          last: 0,
          prev: 0,
        },
        {
          number: 2,
          horse: "Extravagant",
          trainer: "A P O'Brien",
          jockey: "Ryan Moore",
          today: 91,
          last: 88,
          prev: 90,
        },
      ],
    },
  ];
  