import { useEffect, useState } from 'react';
import '../../card.css';


function MusicData({ estilo }) {
  const [musicData, setMusicData] = useState([]);
  const apiUrl = `https://raw.githubusercontent.com/sofiapmrq/projetodemusicas/main/${estilo}.json`;

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da música');
        }
        const data = await response.json();
        setMusicData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusicData();
  }, [apiUrl]);

  return (
    <div>
      <h2 className="lbltitulo">Dados da Música</h2>
      <div className="music-cards">
        {musicData.map((music, index) => (
          <div key={index} className="music-card">
            <h3>Nome da Música: {music.nome_musica}</h3>
            <p>Autor: {music.autores.join(', ')}</p>
            <p>Interprete: {music.interpretes.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MusicData;