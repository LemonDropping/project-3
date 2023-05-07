 import { useState} from 'react';

 
type LeaderboardEntry = {
    rank: number | string;
    name: string;
    score: number;
};

type Props = {
    entries: LeaderboardEntry[];
};
       

const LeaderboardPage: React.FC<Props> = ({ entries }) => {
    const [sortedEntries, setSortedEntries] = useState<LeaderboardEntry[]>(entries);

    const handleSortByScore = () => {
        const sorted = [...sortedEntries].sort((a, b) => b.score - a.score);
        setSortedEntries(sorted);
      };

      const handleSortByName = () => {
        const sorted = [...sortedEntries].sort((a, b) => a.name.localeCompare(b.name));
        setSortedEntries(sorted);
      };

    return (
        <div className="leaderboard-container">
            <h1 className="leader-board-page-title">HighScores</h1>
            <select className="leader-board-options">
                <option>Tetris</option>
                <option>Tic-Tac-Toe</option>
                <option>Pong</option>
                <option>Memory</option>
                <option>Hangman</option>
                <option>MineSweeper</option>
            </select>
                <table className="leaderboard-table">
                    <thead className="leaderboard-head">
                        <tr className="leaderboard-row">
                            <th className="leaderboard-row-title">Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody className="leaderboard-content">
                        {sortedEntries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.rank}</td>
                                <td>{entry.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

export default LeaderboardPage;