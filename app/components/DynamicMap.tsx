"use client";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function DynamicMap() {
    return (
        <div className="min-h-screen w-full bg-gray-200">
            <MapContainer center={[42.3555, -71.0605]} zoom={14} scrollWheelZoom={false} className="min-h-screen">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="min-h-screen"
                />
            </MapContainer>
        </div>
    );
}