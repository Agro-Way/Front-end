import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importando o Leaflet para manipulação do mapa

const MapComponente = () => {
  const produtoPosition = [-8.839, 13.289]; // Localização inicial do ponto de entrega

  // Estado para o motorista e o trajeto
  const [motoristaPosition, setMotoristaPosition] = useState(produtoPosition);
  const [trajeto, setTrajeto] = useState([produtoPosition, motoristaPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMotoristaPosition((prevPosition) => {
        const newLat = prevPosition[0] + 0.0001; // Movendo o motorista
        const newLng = prevPosition[1] + 0.0001;
        const newPosition = [newLat, newLng];
        setTrajeto((prevTrajeto) => [...prevTrajeto, newPosition]); // Adicionando a nova posição ao trajeto
        return newPosition;
      });
    }, 2000); // Atualiza a posição do motorista a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <MapContainer
      center={produtoPosition}
      zoom={13}
      style={{ height: "500px", width: "100%", maxWidth: "1200px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={produtoPosition}>
        <Popup>Ponto de entrega: Produto</Popup>
      </Marker>
      <Marker position={motoristaPosition}>
        <Popup>Motorista</Popup>
      </Marker>
      <Polyline positions={trajeto} color="blue" /> {/* Trajeto percorrido pelo motorista */}
    </MapContainer>
  );
};

export default MapComponente;