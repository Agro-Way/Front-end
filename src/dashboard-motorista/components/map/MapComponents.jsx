import React, { useState, useEffect } from 'react';
// Importa os componentes principais do mapa (folha de mapa, marcadores, linhas etc.)
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// Importa o estilo padrão do Leaflet (obrigatório para o mapa aparecer corretamente)
import 'leaflet/dist/leaflet.css';

// Esta função cria uma "rota" do ponto inicial até o ponto final
// Ela divide o caminho em várias etapas para simular o movimento suave
function gerarRotaInterpolada(inicio, destino, etapas = 100) {
  const latStep = (destino[0] - inicio[0]) / etapas; // Diferença da latitude dividida por etapas
  const lngStep = (destino[1] - inicio[1]) / etapas; // Diferença da longitude dividida por etapas

  const rota = [];
  for (let i = 0; i <= etapas; i++) {
    // Adiciona cada ponto intermediário à rota
    rota.push([inicio[0] + latStep * i, inicio[1] + lngStep * i]);
  }
  return rota; // Retorna um array com todos os pontos
}

const MapComponents = () => {
  const inicio = [-8.839, 13.289]; // Coordenadas de Luanda (ponto de partida)
  const destino = [-11.7833, 19.9167]; // Luena, Moxico
  //const destino = [-12.5783, 13.4072]; // Coordenadas de Benguela (destino final)

  // Gera uma rota com vários pontos intermediários (200 etapas para suavidade)
  const rotaCompleta = gerarRotaInterpolada(inicio, destino, 200);

  const [indiceAtual, setIndiceAtual] = useState(0); // Índice atual do motorista na rota

  const motoristaPosition = rotaCompleta[indiceAtual]; // Posição atual do motorista
  const trajeto = rotaCompleta.slice(0, indiceAtual + 1); // Caminho já percorrido até agora

  // Efeito que executa uma vez e depois atualiza a cada intervalo
  useEffect(() => {
    // Se o motorista já chegou ao destino, para o movimento
    if (indiceAtual >= rotaCompleta.length - 1) return;

    // Atualiza o índice a cada 200ms (faz o motorista "andar")
    const interval = setInterval(() => {
      setIndiceAtual((i) => i + 1); // Avança um ponto na rota
    }, 200); // Quanto menor, mais rápido o movimento

    // Limpa o intervalo quando o componente for desmontado ou o índice mudar
    return () => clearInterval(interval);
  }, [indiceAtual, rotaCompleta.length]);

  return (
    <MapContainer
      center={inicio} // Centro inicial do mapa (Luanda)
      zoom={6} // Zoom ajustado para ver uma grande área (Luanda até Benguela)
      style={{ height: '500px', width: '100%', maxWidth: '1200px' }} // Tamanho do mapa
    >
      {/* Camada base com os tiles do OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marcador no ponto de partida (Luanda) */}
      <Marker position={inicio}>
        <Popup>Início: Luanda</Popup>
      </Marker>

      {/* Marcador no destino final (Benguela) */}
      <Marker position={destino}>
        <Popup>Destino: Benguela</Popup>
      </Marker>

      {/* Marcador que representa o motorista se movendo ao longo da rota */}
      <Marker position={motoristaPosition}>
        <Popup>Motorista em rota</Popup>
      </Marker>

      {/* Linha azul que mostra o trajeto já percorrido pelo motorista */}
      <Polyline positions={trajeto} color="blue" />
    </MapContainer>
  );
};

export default MapComponents; // Exporta o componente para ser usado em outro lugar