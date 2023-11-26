import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './App.css';
import treeData from "./test-data/tree-data.json"

function App() {

    // Get only actual tree points, not comments
  const treeItems = treeData.features.filter(tree => tree.geometry);

  return (
    <MapContainer center={[49.0852959397798, -117.793012400236]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {treeItems.map(tree => {
        return (
          <Marker 
          // className = {tree.properties.Type}
          key = {tree.id}
          position={[ tree.geometry.coordinates[1], tree.geometry.coordinates[0] ]}>
            <Popup
              position={[ tree.geometry.coordinates[1], tree.geometry.coordinates[0] ]}>
              <div>
                <h2>{"Tree type: " + tree.properties.Type}</h2>
              </div>
            </Popup>
          </Marker>
        );
        })}      
    </MapContainer>
  );
}

export default App;
