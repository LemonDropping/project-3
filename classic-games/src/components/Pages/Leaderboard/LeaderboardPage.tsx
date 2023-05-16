import React, { useState } from 'react';
import styles from './LeaderboardPage.module.css'



interface LeaderboardProps {}

const LeaderboardPage: React.FC<LeaderboardProps> = () => {
  const leaderboardData = [
    { rank: 1, name: 'John Doe', score: 100 },
    { rank: 2, name: 'Jane Doe', score: 90 },
    { rank: 3, name: 'Bob Smith', score: 80 },
    { rank: 4, name: 'Samantha Lee', score: 70 },
    { rank: 5, name: 'Samantha Lee', score: 70 },
    { rank: 6, name: 'Samantha Lee', score: 70 },
    { rank: 7, name: 'Samantha Lee', score: 70 },
    { rank: 8, name: 'Samantha Lee', score: 70 },
    { rank: 9, name: 'Samantha Lee', score: 70 },
    { rank: 10, name: 'Samantha Lee', score: 70 },
    { rank: 11, name: 'Samantha Lee', score: 70 },
    { rank: 12, name: 'Samantha Lee', score: 70 },
    { rank: 13, name: 'Samantha Lee', score: 70 },
    { rank: 14, name: 'Samantha Lee', score: 70 },
    { rank: 15, name: 'Samantha Lee', score: 70 },
    { rank: 16, name: 'Samantha Lee', score: 70 },
    { rank: 17, name: 'Samantha Lee', score: 70 },
    { rank: 18, name: 'Samantha Lee', score: 70 },
    { rank: 19, name: 'Samantha Lee', score: 70 },
    { rank: 20, name: 'Samantha Lee', score: 70 },
    { rank: 21, name: 'Samantha Lee', score: 70 },
    { rank: 22, name: 'Samantha Lee', score: 70 },
    { rank: 23, name: 'Samantha Lee', score: 70 },
    { rank: 24, name: 'Samantha Lee', score: 70 },
    // ... and so on for 21 more rows
  ];

  return (
    <div className="leaderboardContainer">
      <table className={styles.leaderboardTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((row) => (
            <tr key={row.rank}>
              <td >{row.rank}</td>
              <td >{row.name}</td>
              <td >{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;









































// interface LeaderboardProps {
//   data: {
//     name: string;
//     score: number;
//     rank: number;
//   }[];
// }

// const LeaderboardPage: React.FC<LeaderboardProps> = ({ data }) => {
//   const [sortBy, setSortBy] = useState<'name' | 'score' | 'rank'>('rank');
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

//   const sortData = (data: LeaderboardProps['data']) => {
//     return data.sort((a, b) => {
//       const aValue = a[sortBy];
//       const bValue = b[sortBy];

//       if (aValue < bValue) {
//         return sortDirection === 'asc' ? -1 : 1;
//       } else if (aValue > bValue) {
//         return sortDirection === 'asc' ? 1 : -1;
//       } else {
//         return 0;
//       }
//     });
//   };

//   const sortedData = sortData(data);

//   const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortBy(event.target.value as 'name' | 'score' | 'rank');
//   };

//   const handleSortDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortDirection(event.target.value as 'asc' | 'desc');
//   };

//   return (
//     <div>
//       <div>
//         <select value={sortBy} onChange={handleSortByChange}>
//           <option value="name">Name</option>
//           <option value="score">Score</option>
//           <option value="rank">Rank</option>
//         </select>
//         <select value={sortDirection} onChange={handleSortDirectionChange}>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>
//       <p>Some text to display above the leaderboard</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Name</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData.map((item) => (
//             <tr key={item.name}>
//               <td>{item.rank}</td>
//               <td>{item.name}</td>
//               <td>{item.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaderboardPage;
