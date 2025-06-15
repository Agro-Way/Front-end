// Importação dos componentes necessários do react-leaflet para renderizar o mapa
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Componentes do React-Leaflet
import 'leaflet/dist/leaflet.css'; // Importa o arquivo CSS do Leaflet para estilo do mapa

// Componente Map que renderiza o mapa
const MapComponent = () => {
  // Definindo a posição central do mapa usando latitude e longitude
  const position = [-8.839, 13.289]; // Coordenadas de Luanda (Latitude, Longitude)

  return (
    // MapContainer é o componente principal do Leaflet que contém o mapa
    <MapContainer 
      center={position} // Posição central do mapa, que será a coordenada de Luanda
      zoom={13} // Nível de zoom inicial do mapa (13 é um zoom moderado)
      style={{ height: "500px", width: "100%", maxWidth: "1200px" }} // Estilo do mapa, definindo altura de 400px e largura 100%
    >
      {/* TileLayer é o componente responsável por fornecer as imagens de fundo do mapa (tiles) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL do OpenStreetMap para obter os tiles do mapa
      />
      {/* Marker é o componente usado para colocar um marcador no mapa */}
      <Marker position={position}> {/* Coloca um marcador na posição de Luanda */}
        {/* Popup é a janela de informações que aparece quando o usuário clica no marcador */}
        <Popup>
          Luanda, a capital de Angola! {/* Texto do popup que aparecerá quando o usuário clicar no marcador */}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// Exportando o componente Map para ser usado em outros arquivos, como o App.js
export default MapComponent;
