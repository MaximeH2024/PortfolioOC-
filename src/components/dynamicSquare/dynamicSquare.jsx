import { useEffect, useState } from 'react';
import './DynamicSquare.scss';

export default function DynamicSquare() {
    const [columns, setColumns] = useState(() => {
        return Array.from({ length: 20 }, () => Math.floor(Math.random() * 6) + 1);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setColumns((prevColumns) => prevColumns.map((_, i) => {
                return Math.floor((Math.sin((Date.now() / 300) + i) + 1) * 3) + 1;
            }));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const generateColor = (baseColor, index) => {
        const hueShift = (index * 10) % 360; // Moins de décalage de teinte pour conserver les nuances de bleu
        return `hsl(${200 + hueShift}, 100%, 60%)`; // Modifie la teinte pour un bleu clair
    };

    const renderColumns = () => {
        return columns.map((numSquares, i) => (
            <div key={i} className="column">
                {Array.from({ length: numSquares }).map((_, j) => (
                    <div
                        key={j}
                        className="square"
                        style={{
                            background: `linear-gradient(45deg, ${generateColor('#0095FF', j)}, ${generateColor('#00D4FF', j)})`,
                            boxShadow: `0 0 8px ${generateColor('#0095FF', j)}, 0 0 15px ${generateColor('#00D4FF', j)}`
                        }}
                    ></div>
                ))}
            </div>
        ));
    };

    return (
        <div className="dynamicSquare">
            {renderColumns()}
        </div>
    );
}
