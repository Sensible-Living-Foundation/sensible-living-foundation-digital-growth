export const metadata = {
  title: "Garden Map | Sensible Living Foundation",
};

export default function GardenMap() {
  return (
    <div className="pt-16 min-h-screen bg-brand-cream flex items-center justify-center">
      <div className="text-center px-6">
        <span className="text-6xl mb-6 block">🗺️</span>
        <h1 className="text-4xl font-extrabold text-brand-green-dark mb-4">
          Interactive Garden Map
        </h1>
        <p className="text-gray-600 max-w-md mx-auto text-lg">
          Coming soon — an interactive map showing Sense Garden locations and
          communities where new gardens are needed most.
        </p>
      </div>
    </div>
  );
}
