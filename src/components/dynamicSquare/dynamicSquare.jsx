import { useEffect, useState } from 'react';
import './DynamicSquare.scss';

export default function DynamicSquare() {
    const [columns, setColumns] = useState(() => {
        // Initialisation avec un nombre de carrés aléatoire entre 1 et 6 pour chaque colonne
        return Array.from({ length: 20 }, () => Math.floor(Math.random() * 6) + 1);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Mise à jour des colonnes pour créer un effet de vague en utilisant l'état précédent
            setColumns((prevColumns) => prevColumns.map((_, i) => {
                // Utilisation d'une onde sinusoïdale avec un multiplicateur ajusté pour une plage entre 1 et 6 carrés
                return Math.floor((Math.sin((Date.now() / 300) + i) + 1) * 3) + 1; 
                // L'onde sinusoïdale oscille entre -1 et 1, donc * 2.5 + 1 donnera une plage entre 1 et 6
            }));
        }, 100); // Met à jour l'animation toutes les 100ms pour un mouvement fluide

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    const renderColumns = () => {
        return columns.map((numSquares, i) => (
            <div key={i} className="column">
                {Array.from({ length: numSquares }).map((_, j) => (
                    <div key={j} className="square"></div>
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
