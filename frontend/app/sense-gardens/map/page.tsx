"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const HUBS = [
  { id: 1, name: "South Phoenix Hub", neighborhood: "South Phoenix", zip: "85009", phase: 1, score: 94, lat: 33.4095, lng: -112.0990, population: "38,000", medianIncome: "$28,400", description: "Most documented food desert in Phoenix. No major grocery within 2 miles for most residents. Highest priority target." },
  { id: 2, name: "Maryvale Hub", neighborhood: "Maryvale", zip: "85031", phase: 1, score: 91, lat: 33.4800, lng: -112.1580, population: "42,000", medianIncome: "$31,200", description: "Largest majority-Hispanic neighborhood in Phoenix. High food bank utilization. Dense Valley Metro transit network." },
  { id: 3, name: "West Van Buren Hub", neighborhood: "West Van Buren", zip: "85035", phase: 1, score: 88, lat: 33.4720, lng: -112.1400, population: "28,000", medianIncome: "$29,800", description: "Historically underserved corridor. High concentration of families with no vehicle access to grocery stores." },
  { id: 4, name: "Downtown Central Hub", neighborhood: "Downtown / Central", zip: "85003", phase: 2, score: 82, lat: 33.4484, lng: -112.0740, population: "18,000", medianIncome: "$33,500", description: "USDA-designated food desert south of Roosevelt. Growing residential density with no nearby full-service grocery." },
  { id: 5, name: "Laveen Hub", neighborhood: "Laveen", zip: "85339", phase: 2, score: 78, lat: 33.3650, lng: -112.1660, population: "35,000", medianIncome: "$52,000", description: "Rapidly growing area with very limited grocery infrastructure. Nearest major store is 5+ miles for many residents." },
  { id: 6, name: "Alhambra Hub", neighborhood: "Alhambra / Encanto", zip: "85017", phase: 2, score: 75, lat: 33.4780, lng: -112.1020, population: "29,000", medianIncome: "$34,100", description: "High-density corridor with frequent food access gaps. Strong transit access makes distribution highly viable." },
  { id: 7, name: "Glendale Corridor Hub", neighborhood: "Glendale Corridor", zip: "85301", phase: 3, score: 67, lat: 33.5386, lng: -112.1860, population: "51,000", medianIncome: "$36,800", description: "Suburban food desert adjacent to Phoenix border. Large population in need with limited new grocery investment." },
  { id: 8, name: "South Mountain Hub", neighborhood: "South Mountain", zip: "85041", phase: 3, score: 63, lat: 33.3860, lng: -112.0560, population: "22,000", medianIncome: "$41,200", description: "Growing working-class neighborhood. Limited grocery options and rising food insecurity rates." },
];

const PHASE_COLORS: Record<number, string> = { 1: "#52B788", 2: "#FFCA0A", 3: "#E07B39" };
const PHASE_LABELS: Record<number, string> = { 1: "Phase 1 — 2026", 2: "Phase 2 — 2027", 3: "Phase 3 — 2028" };

const FOOD_DESERT_ZONES = {
  type: "FeatureCollection" as const,
  features: [
    // Phoenix / West Valley
    { type: "Feature" as const, properties: { name: "South Phoenix", zip: "85009", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.128, 33.428], [-112.070, 33.428], [-112.070, 33.390], [-112.128, 33.390], [-112.128, 33.428]]] } },
    { type: "Feature" as const, properties: { name: "Maryvale", zip: "85031", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.175, 33.500], [-112.130, 33.500], [-112.130, 33.458], [-112.175, 33.458], [-112.175, 33.500]]] } },
    { type: "Feature" as const, properties: { name: "West Van Buren", zip: "85035", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.160, 33.488], [-112.120, 33.488], [-112.120, 33.456], [-112.160, 33.456], [-112.160, 33.488]]] } },
    { type: "Feature" as const, properties: { name: "Downtown Central", zip: "85003", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.090, 33.462], [-112.055, 33.462], [-112.055, 33.430], [-112.090, 33.430], [-112.090, 33.462]]] } },
    { type: "Feature" as const, properties: { name: "Laveen", zip: "85339", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.200, 33.390], [-112.130, 33.390], [-112.130, 33.340], [-112.200, 33.340], [-112.200, 33.390]]] } },
    { type: "Feature" as const, properties: { name: "Alhambra", zip: "85017", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.120, 33.495], [-112.080, 33.495], [-112.080, 33.462], [-112.120, 33.462], [-112.120, 33.495]]] } },
    { type: "Feature" as const, properties: { name: "Glendale Corridor", zip: "85301", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.210, 33.555], [-112.155, 33.555], [-112.155, 33.518], [-112.210, 33.518], [-112.210, 33.555]]] } },
    { type: "Feature" as const, properties: { name: "South Mountain", zip: "85041", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.085, 33.405], [-112.030, 33.405], [-112.030, 33.365], [-112.085, 33.365], [-112.085, 33.405]]] } },
    // East Valley
    { type: "Feature" as const, properties: { name: "West Mesa", zip: "85201", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.870, 33.435], [-111.820, 33.435], [-111.820, 33.400], [-111.870, 33.400], [-111.870, 33.435]]] } },
    { type: "Feature" as const, properties: { name: "Central Mesa", zip: "85204", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.840, 33.420], [-111.790, 33.420], [-111.790, 33.390], [-111.840, 33.390], [-111.840, 33.420]]] } },
    { type: "Feature" as const, properties: { name: "East Mesa / Apache Junction", zip: "85208", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.720, 33.420], [-111.660, 33.420], [-111.660, 33.375], [-111.720, 33.375], [-111.720, 33.420]]] } },
    { type: "Feature" as const, properties: { name: "South Tempe", zip: "85282", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.950, 33.405], [-111.910, 33.405], [-111.910, 33.370], [-111.950, 33.370], [-111.950, 33.405]]] } },
    { type: "Feature" as const, properties: { name: "South Chandler", zip: "85225", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.870, 33.310], [-111.820, 33.310], [-111.820, 33.270], [-111.870, 33.270], [-111.870, 33.310]]] } },
    { type: "Feature" as const, properties: { name: "SW Gilbert", zip: "85233", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.810, 33.360], [-111.760, 33.360], [-111.760, 33.320], [-111.810, 33.320], [-111.810, 33.360]]] } },
    { type: "Feature" as const, properties: { name: "Apache Junction", zip: "85120", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.590, 33.430], [-111.530, 33.430], [-111.530, 33.385], [-111.590, 33.385], [-111.590, 33.430]]] } },
    // North Valley
    { type: "Feature" as const, properties: { name: "Peoria South", zip: "85345", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.240, 33.590], [-112.180, 33.590], [-112.180, 33.545], [-112.240, 33.545], [-112.240, 33.590]]] } },
    { type: "Feature" as const, properties: { name: "El Mirage / Surprise", zip: "85335", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-112.340, 33.620], [-112.250, 33.620], [-112.250, 33.570], [-112.340, 33.570], [-112.340, 33.620]]] } },
    // Statewide AZ
    { type: "Feature" as const, properties: { name: "Tucson South", zip: "85706", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-110.990, 32.200], [-110.920, 32.200], [-110.920, 32.150], [-110.990, 32.150], [-110.990, 32.200]]] } },
    { type: "Feature" as const, properties: { name: "Tucson West", zip: "85745", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.060, 32.245], [-110.990, 32.245], [-110.990, 32.195], [-111.060, 32.195], [-111.060, 32.245]]] } },
    { type: "Feature" as const, properties: { name: "Yuma", zip: "85364", severity: "high" }, geometry: { type: "Polygon" as const, coordinates: [[[-114.660, 32.730], [-114.590, 32.730], [-114.590, 32.680], [-114.660, 32.680], [-114.660, 32.730]]] } },
    { type: "Feature" as const, properties: { name: "Flagstaff South", zip: "86001", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-111.680, 35.195], [-111.610, 35.195], [-111.610, 35.145], [-111.680, 35.145], [-111.680, 35.195]]] } },
    { type: "Feature" as const, properties: { name: "Kingman", zip: "86401", severity: "moderate" }, geometry: { type: "Polygon" as const, coordinates: [[[-114.070, 35.210], [-113.990, 35.210], [-113.990, 35.160], [-114.070, 35.160], [-114.070, 35.210]]] } },
    { type: "Feature" as const, properties: { name: "Nogales", zip: "85621", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-110.960, 31.360], [-110.890, 31.360], [-110.890, 31.310], [-110.960, 31.310], [-110.960, 31.360]]] } },
    { type: "Feature" as const, properties: { name: "San Luis / Somerton", zip: "85349", severity: "critical" }, geometry: { type: "Polygon" as const, coordinates: [[[-114.730, 32.495], [-114.650, 32.495], [-114.650, 32.445], [-114.730, 32.445], [-114.730, 32.495]]] } },
  ]
};

export default function SenseGardensMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [selectedHub, setSelectedHub] = useState<(typeof HUBS)[0] | null>(null);
  const [searchZip, setSearchZip] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [activePhase, setActivePhase] = useState<number | "all">("all");

  useEffect(() => {
    if (!scriptLoaded || !mapContainer.current || mapRef.current) return;
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-112.074, 33.448],
      zoom: 10.5,
      minZoom: 3,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.addControl(new mapboxgl.FullscreenControl(), "top-right");

    map.on("load", () => {
      map.addSource("food-deserts", { type: "geojson", data: FOOD_DESERT_ZONES });
      map.addLayer({
        id: "food-deserts-fill", type: "fill", source: "food-deserts",
        paint: {
          "fill-color": ["match", ["get", "severity"], "critical", "#E24B4A", "high", "#E07B39", "moderate", "#BA7517", "#888"],
          "fill-opacity": 0.22,
        }
      });
      map.addLayer({
        id: "food-deserts-outline", type: "line", source: "food-deserts",
        paint: {
          "line-color": ["match", ["get", "severity"], "critical", "#E24B4A", "high", "#E07B39", "moderate", "#BA7517", "#888"],
          "line-width": 1.5, "line-opacity": 0.55,
        }
      });

      addHubMarkers(map, mapboxgl, "all");
      setMapLoaded(true);
    });

    mapRef.current = map;
    return () => {
      markersRef.current.forEach(m => m.remove());
      map.remove();
      mapRef.current = null;
    };
  }, [scriptLoaded]);

  function addHubMarkers(map: any, mapboxgl: any, phase: number | "all") {
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const filtered = phase === "all" ? HUBS : HUBS.filter(h => h.phase === phase);

    filtered.forEach(hub => {
      const color = PHASE_COLORS[hub.phase];

      // Clean circular pin with S logo — no label attached
      const el = document.createElement("div");
      el.style.cssText = `
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: ${color};
        border: 2.5px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 15px;
        font-weight: 800;
        font-family: Georgia, serif;
        color: #0A2010;
        box-shadow: 0 2px 10px rgba(0,0,0,0.55);
        transition: transform 0.15s, box-shadow 0.15s;
        user-select: none;
      `;
      el.textContent = "S";

      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.7)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.55)";
      });
      el.addEventListener("click", () => {
        setSelectedHub(hub);
        map.flyTo({ center: [hub.lng, hub.lat], zoom: 13, duration: 800 });
      });

      const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat([hub.lng, hub.lat])
        .addTo(map);
      markersRef.current.push(marker);
    });
  }

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;
    addHubMarkers(mapRef.current, mapboxgl, activePhase);
  }, [activePhase, mapLoaded]);

  async function handleZipSearch(e: React.FormEvent) {
    e.preventDefault();
    const zip = searchZip.trim();
    if (!zip || zip.length !== 5) return;
    setSearching(true);
    setSearchResult(null);

    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${zip}.json?country=us&types=postcode&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
      );
      const data = await res.json();
      const feature = data.features?.[0];
      if (!feature) { setSearchResult("Zip code not found. Please try another."); setSearching(false); return; }
      const [lng, lat] = feature.center;
      mapRef.current?.flyTo({ center: [lng, lat], zoom: 12.5, duration: 1000 });

      const matchedHub = HUBS.find(h => h.zip === zip);
      const matchedZone = FOOD_DESERT_ZONES.features.find(f => f.properties.zip === zip);
      if (matchedHub) {
        setSearchResult(`${zip} is a Sense Gardens target — ${matchedHub.neighborhood}. Score: ${matchedHub.score}/100.`);
        setSelectedHub(matchedHub);
      } else if (matchedZone) {
        setSearchResult(`${zip} is a ${matchedZone.properties.severity} food access risk area.`);
      } else {
        setSearchResult(`Zip code ${zip} located. Review the map for nearby food desert zones.`);
      }
    } catch { setSearchResult("Search failed. Please try again."); }
    setSearching(false);
  }

  return (
    <>
      <Script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js" onLoad={() => setScriptLoaded(true)} />
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet" />

      {/*
        The site header is fixed at z-50 and ~72px tall.
        We use padding-top on the outer wrapper to push content below it.
        The map itself fills the remaining viewport height.
      */}
      <div style={{ paddingTop: "72px", height: "100vh", display: "flex", flexDirection: "column", background: "#0A0A0A" }}>

        {/* ── Controls bar — sits below site header ── */}
        <div style={{
          background: "rgba(10,10,10,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          flexShrink: 0,
          zIndex: 10,
        }}>
          <div style={{ flex: "0 0 auto" }}>
            <p style={{ color: "#52B788", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 1 }}>Sensible Living Foundation</p>
            <p style={{ color: "white", fontSize: 15, fontWeight: 700, fontFamily: "Georgia, serif", margin: 0 }}>Sense Gardens — Food Desert Map</p>
          </div>

          <form onSubmit={handleZipSearch} style={{ display: "flex", gap: 8, flex: "1 1 240px", maxWidth: 340 }}>
            <input
              type="text"
              value={searchZip}
              onChange={e => setSearchZip(e.target.value)}
              placeholder="Search any zip code..."
              maxLength={5}
              style={{
                flex: 1, padding: "7px 12px", borderRadius: 8,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "white", fontSize: 13, outline: "none",
              }}
            />
            <button type="submit" disabled={searching} style={{
              padding: "7px 14px", borderRadius: 8, background: "#52B788",
              color: "#0A2010", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer",
            }}>
              {searching ? "..." : "Search"}
            </button>
          </form>

          {searchResult && (
            <div style={{
              background: "rgba(82,183,136,0.15)", border: "1px solid rgba(82,183,136,0.3)",
              borderRadius: 8, padding: "7px 12px", fontSize: 12, color: "#86EFAC",
              flex: "1 1 180px", maxWidth: 380,
            }}>
              {searchResult}
            </div>
          )}
        </div>

        {/* ── Map area ── */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

          {/* Left panel */}
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(10,10,10,0.88)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 14, zIndex: 10, width: 200,
          }}>
            <p style={{ color: "#6B7280", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Filter by phase</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
              {[
                { label: "All Hubs", value: "all" as const },
                { label: "Phase 1 — 2026", value: 1 },
                { label: "Phase 2 — 2027", value: 2 },
                { label: "Phase 3 — 2028", value: 3 },
              ].map(opt => (
                <button key={String(opt.value)} onClick={() => setActivePhase(opt.value as any)}
                  style={{
                    padding: "6px 10px", borderRadius: 7, fontSize: 12, fontWeight: 600,
                    cursor: "pointer", textAlign: "left",
                    background: activePhase === opt.value ? "rgba(82,183,136,0.2)" : "rgba(255,255,255,0.05)",
                    border: activePhase === opt.value ? "1px solid rgba(82,183,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    color: activePhase === opt.value ? "#86EFAC" : "#9CA3AF",
                  }}>
                  {opt.label}
                </button>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 10 }}>
              <p style={{ color: "#6B7280", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Severity</p>
              {[{ color: "#E24B4A", label: "Critical" }, { color: "#E07B39", label: "High" }, { color: "#BA7517", label: "Moderate" }].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                  <div style={{ width: 11, height: 11, borderRadius: 3, background: item.color, opacity: 0.8 }} />
                  <span style={{ color: "#9CA3AF", fontSize: 11 }}>{item.label}</span>
                </div>
              ))}
              <div style={{ marginTop: 8 }}>
                {[1, 2, 3].map(phase => (
                  <div key={phase} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%",
                      background: PHASE_COLORS[phase], border: "2px solid white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, fontWeight: 800, fontFamily: "Georgia, serif", color: "#0A2010",
                      flexShrink: 0,
                    }}>S</div>
                    <span style={{ color: "#9CA3AF", fontSize: 10 }}>{PHASE_LABELS[phase]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hub detail panel */}
          {selectedHub && (
            <div style={{
              position: "absolute", bottom: 20, right: 12,
              background: "rgba(10,10,10,0.93)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14, padding: 18, zIndex: 10, width: 285,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    background: `rgba(${selectedHub.phase === 1 ? "82,183,136" : selectedHub.phase === 2 ? "255,202,10" : "224,123,57"},0.15)`,
                    border: `1px solid rgba(${selectedHub.phase === 1 ? "82,183,136" : selectedHub.phase === 2 ? "255,202,10" : "224,123,57"},0.3)`,
                    borderRadius: 5, padding: "2px 7px", marginBottom: 5,
                  }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: PHASE_COLORS[selectedHub.phase] }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: PHASE_COLORS[selectedHub.phase] }}>{PHASE_LABELS[selectedHub.phase]}</span>
                  </div>
                  <h3 style={{ color: "white", fontSize: 15, fontWeight: 700, fontFamily: "Georgia, serif", margin: 0 }}>{selectedHub.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: 11, margin: "2px 0 0" }}>{selectedHub.neighborhood} · {selectedHub.zip}</p>
                </div>
                <button onClick={() => setSelectedHub(null)} style={{
                  background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 5,
                  color: "#9CA3AF", cursor: "pointer", padding: "3px 7px", fontSize: 13,
                }}>✕</button>
              </div>
              <p style={{ color: "#9CA3AF", fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>{selectedHub.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginBottom: 12 }}>
                {[{ label: "Score", value: `${selectedHub.score}/100` }, { label: "Population", value: selectedHub.population }, { label: "Med. Income", value: selectedHub.medianIncome }].map(item => (
                  <div key={item.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 7, padding: "7px 8px", textAlign: "center" }}>
                    <div style={{ color: "#6B7280", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ color: "white", fontSize: 12, fontWeight: 700 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <a href="/donate" style={{
                display: "block", textAlign: "center", padding: "9px 14px",
                background: "#52B788", borderRadius: 7, color: "#0A2010",
                fontSize: 12, fontWeight: 700, textDecoration: "none",
              }}>
                Support this hub →
              </a>
            </div>
          )}

          {/* Click anywhere hint */}
          {mapLoaded && !selectedHub && (
            <div style={{
              position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
              background: "rgba(10,10,10,0.75)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "6px 14px", fontSize: 11, color: "#6B7280",
              pointerEvents: "none", whiteSpace: "nowrap",
            }}>
              Click any S pin to see hub details
            </div>
          )}

          {/* Loading overlay */}
          {!mapLoaded && (
            <div style={{
              position: "absolute", inset: 0, background: "#0A0A0A",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20,
            }}>
              <div style={{ color: "#52B788", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em" }}>Loading map...</div>
              <div style={{ color: "#4B5563", fontSize: 12, marginTop: 8 }}>Sensible Living Foundation · Sense Gardens</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
