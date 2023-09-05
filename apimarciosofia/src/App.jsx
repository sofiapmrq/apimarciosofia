import { useState, useEffect } from 'react';
import './App.css';
import MusicData from './components/Fixture'; // Importa o componente MusicData

function App() {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [estilo, setEstilo] = useState('pop'); // Inicialmente, definimos o estilo como 'pop'

  function handleChangeTab(tabName) {
    setActiveTab(tabName);
    // Atualize o estilo com base na guia ativa
    switch (tabName) {
      case 'Tab 1':
        setEstilo('pop');
        break;
      case 'Tab 2':
        setEstilo('sertanejo');
        break;
      case 'Tab 3':
        setEstilo('trap');
        break;
      default:
        setEstilo('pop'); // Defina um valor padrão caso necessário
    }
  }

  return (
    <>
      <h1 className="lbltitulo">Músicas</h1>

      <section className='knockout_table'>
        <div className='tabs'>
          <button
            className={activeTab === 'Tab 1' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 1')}
          >
            Pop
          </button>
          <button
            className={activeTab === 'Tab 2' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 2')}
          >
            Sertanejo
          </button>
          <button
            className={activeTab === 'Tab 3' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 3')}
          >
            Trap
          </button>
        </div>

        <div className='tab_content'>
          <MusicData estilo={estilo} /> {/* Passe o estilo como propriedade */}
        </div>
      </section>
    </>
  );
}

export default App;