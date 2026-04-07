"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// ─── Sense Gardens Hub Data ────────────────────────────────────────────────

const HUBS = [
  {
    id: 1,
    name: "South Phoenix Hub",
    neighborhood: "South Phoenix",
    zip: "85009",
    phase: 1,
    score: 94,
    lat: 33.4095,
    lng: -112.0990,
    population: "38,000",
    medianIncome: "$28,400",
    description: "Most documented food desert in Phoenix. No major grocery within 2 miles for most residents. Highest priority target.",
  },
  {
    id: 2,
    name: "Maryvale Hub",
    neighborhood: "Maryvale",
    zip: "85031",
    phase: 1,
    score: 91,
    lat: 33.4800,
    lng: -112.1580,
    population: "42,000",
    medianIncome: "$31,200",
    description: "Largest majority-Hispanic neighborhood in Phoenix. High food bank utilization. Dense Valley Metro transit network.",
  },
  {
    id: 3,
    name: "West Van Buren Hub",
    neighborhood: "West Van Buren",
    zip: "85035",
    phase: 1,
    score: 88,
    lat: 33.4720,
    lng: -112.1400,
    population: "28,000",
    medianIncome: "$29,800",
    description: "Historically underserved corridor. High concentration of families with no vehicle access to grocery stores.",
  },
  {
    id: 4,
    name: "Downtown Central Hub",
    neighborhood: "Downtown / Central",
    zip: "85003",
    phase: 2,
    score: 82,
    lat: 33.4484,
    lng: -112.0740,
    population: "18,000",
    medianIncome: "$33,500",
    description: "USDA-designated food desert south of Roosevelt. Growing residential density with no nearby full-service grocery.",
  },
  {
    id: 5,
    name: "Laveen Hub",
    neighborhood: "Laveen",
    zip: "85339",
    phase: 2,
    score: 78,
    lat: 33.3650,
    lng: -112.1660,
    population: "35,000",
    medianIncome: "$52,000",
    description: "Rapidly growing area with very limited grocery infrastructure. Nearest major store is 5+ miles for many residents.",
  },
  {
    id: 6,
    name: "Alhambra Hub",
    neighborhood: "Alhambra / Encanto",
    zip: "85017",
    phase: 2,
    score: 75,
    lat: 33.4780,
    lng: -112.1020,
    population: "29,000",
    medianIncome: "$34,100",
    description: "High-density corridor with frequent food access gaps. Strong transit access makes distribution highly viable.",
  },
  {
    id: 7,
    name: "Glendale Corridor Hub",
    neighborhood: "Glendale Corridor",
    zip: "85301",
    phase: 3,
    score: 67,
    lat: 33.5386,
    lng: -112.1860,
    population: "51,000",
    medianIncome: "$36,800",
    description: "Suburban food desert adjacent to Phoenix border. Large population in need with limited new grocery investment.",
  },
  {
    id: 8,
    name: "South Mountain Hub",
    neighborhood: "South Mountain",
    zip: "85041",
    phase: 3,
    score: 63,
    lat: 33.3860,
    lng: -112.0560,
    population: "22,000",
    medianIncome: "$41,200",
    description: "Growing working-class neighborhood. Limited grocery options and rising food insecurity rates.",
  },
];

const PHASE_COLORS: Record<number, string> = {
  1: "#52B788",
  2: "#FFCA0A",
  3: "#E07B39",
};

const PHASE_LABELS: Record<number, string> = {
  1: "Phase 1 — 2026",
  2: "Phase 2 — 2027",
  3: "Phase 3 — 2028",
};

// ─── Component ────────────────────────────────────────────────────────────

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

  // ─── Init map after script loads ──────────────────────────────────────

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
      // ── Food desert shading layer ──────────────────────────────────
      // Using a semi-transparent red fill over known high-risk Phoenix zip code areas
      // These are approximate bounding polygons for the highest-need areas
      map.addSource("food-deserts", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            // South Phoenix 85009
            {
              type: "Feature",
              properties: { name: "South Phoenix", zip: "85009", severity: "critical" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.128, 33.428], [-112.070, 33.428], [-112.070, 33.390],
                  [-112.128, 33.390], [-112.128, 33.428]
                ]]
              }
            },
            // Maryvale 85031
            {
              type: "Feature",
              properties: { name: "Maryvale", zip: "85031", severity: "critical" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.175, 33.500], [-112.130, 33.500], [-112.130, 33.458],
                  [-112.175, 33.458], [-112.175, 33.500]
                ]]
              }
            },
            // West Van Buren 85035
            {
              type: "Feature",
              properties: { name: "West Van Buren", zip: "85035", severity: "critical" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.160, 33.488], [-112.120, 33.488], [-112.120, 33.456],
                  [-112.160, 33.456], [-112.160, 33.488]
                ]]
              }
            },
            // Downtown 85003/85004
            {
              type: "Feature",
              properties: { name: "Downtown Central", zip: "85003", severity: "high" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.090, 33.462], [-112.055, 33.462], [-112.055, 33.430],
                  [-112.090, 33.430], [-112.090, 33.462]
                ]]
              }
            },
            // Laveen 85339
            {
              type: "Feature",
              properties: { name: "Laveen", zip: "85339", severity: "high" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.200, 33.390], [-112.130, 33.390], [-112.130, 33.340],
                  [-112.200, 33.340], [-112.200, 33.390]
                ]]
              }
            },
            // Alhambra 85017
            {
              type: "Feature",
              properties: { name: "Alhambra", zip: "85017", severity: "high" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.120, 33.495], [-112.080, 33.495], [-112.080, 33.462],
                  [-112.120, 33.462], [-112.120, 33.495]
                ]]
              }
            },
            // Glendale 85301
            {
              type: "Feature",
              properties: { name: "Glendale Corridor", zip: "85301", severity: "moderate" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.210, 33.555], [-112.155, 33.555], [-112.155, 33.518],
                  [-112.210, 33.518], [-112.210, 33.555]
                ]]
              }
            },
            // South Mountain 85041
            {
              type: "Feature",
              properties: { name: "South Mountain", zip: "85041", severity: "moderate" },
              geometry: {
                type: "Polygon",
                coordinates: [[
                  [-112.085, 33.405], [-112.030, 33.405], [-112.030, 33.365],
                  [-112.085, 33.365], [-112.085, 33.405]
                ]]
              }
            },
          ]
        }
      });

      map.addLayer({
        id: "food-deserts-fill",
        type: "fill",
        source: "food-deserts",
        paint: {
          "fill-color": [
            "match", ["get", "severity"],
            "critical", "#E24B4A",
            "high", "#E07B39",
            "moderate", "#BA7517",
            "#888"
          ],
          "fill-opacity": 0.25,
        }
      });

      map.addLayer({
        id: "food-deserts-outline",
        type: "line",
        source: "food-deserts",
        paint: {
          "line-color": [
            "match", ["get", "severity"],
            "critical", "#E24B4A",
            "high", "#E07B39",
            "moderate", "#BA7517",
            "#888"
          ],
          "line-width": 1.5,
          "line-opacity": 0.6,
        }
      });

      // ── Hub markers ──────────────────────────────────────────────────
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
      const el = document.createElement("div");
      el.className = "hub-marker";
      el.style.cssText = `
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${PHASE_COLORS[hub.phase]};
        border: 2.5px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 11px;
        font-weight: 700;
        color: #1A1A1A;
        box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        transition: transform 0.15s;
      `;
      el.innerHTML = `${hub.id}`;
      el.addEventListener("mouseenter", () => { el.style.transform = "scale(1.2)"; });
      el.addEventListener("mouseleave", () => { el.style.transform = "scale(1)"; });
      el.addEventListener("click", () => {
        setSelectedHub(hub);
        map.flyTo({ center: [hub.lng, hub.lat], zoom: 13, duration: 800 });
      });

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([hub.lng, hub.lat])
        .addTo(map);

      markersRef.current.push(marker);
    });
  }

  // ── Phase filter ────────────────────────────────────────────────────────

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;
    addHubMarkers(mapRef.current, mapboxgl, activePhase);
  }, [activePhase, mapLoaded]);

  // ── Zip code search ─────────────────────────────────────────────────────

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

      if (!feature) {
        setSearchResult("Zip code not found. Please try another.");
        setSearching(false);
        return;
      }

      const [lng, lat] = feature.center;
      mapRef.current?.flyTo({ center: [lng, lat], zoom: 12.5, duration: 1000 });

      // Check if zip matches any of our hub targets
      const matchedHub = HUBS.find(h => h.zip === zip);
      if (matchedHub) {
        setSearchResult(`${zip} is a priority Sense Gardens target area — ${matchedHub.neighborhood}. Food security score: ${matchedHub.score}/100.`);
        setSelectedHub(matchedHub);
      } else {
        setSearchResult(`Zip code ${zip} located. Check the map for food desert zones in this area.`);
      }
    } catch {
      setSearchResult("Search failed. Please try again.");
    }
    setSearching(false);
  }

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <>
      <Script
        src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"
        onLoad={() => setScriptLoaded(true)}
      />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css"
        rel="stylesheet"
      />

      <div style={{ position: "relative", width: "100%", height: "100vh", background: "#0A0A0A", overflow: "hidden" }}>

        {/* ── Map container ── */}
        <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

        {/* ── Top bar ── */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 24px",
          display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          zIndex: 10,
        }}>
          {/* Title */}
          <div style={{ flex: "0 0 auto" }}>
            <p style={{ color: "#52B788", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>
              Sensible Living Foundation
            </p>
            <h1 style={{ color: "white", fontSize: 18, fontWeight: 700, fontFamily: "Georgia, serif", margin: 0 }}>
              Sense Gardens — Food Desert Map
            </h1>
          </div>

          {/* Zip search */}
          <form onSubmit={handleZipSearch} style={{ display: "flex", gap: 8, flex: "1 1 280px", maxWidth: 360 }}>
            <input
              type="text"
              value={searchZip}
              onChange={e => setSearchZip(e.target.value)}
              placeholder="Enter zip code to check food access"
              maxLength={5}
              style={{
                flex: 1, padding: "8px 14px", borderRadius: 8,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "white", fontSize: 13, outline: "none",
              }}
            />
            <button type="submit" disabled={searching} style={{
              padding: "8px 16px", borderRadius: 8, background: "#52B788",
              color: "#0A2010", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              {searching ? "..." : "Search"}
            </button>
          </form>

          {/* Search result */}
          {searchResult && (
            <div style={{
              background: "rgba(82,183,136,0.15)", border: "1px solid rgba(82,183,136,0.3)",
              borderRadius: 8, padding: "8px 14px", fontSize: 12, color: "#86EFAC",
              flex: "1 1 200px", maxWidth: 400,
            }}>
              {searchResult}
            </div>
          )}
        </div>

        {/* ── Left panel: legend + phase filter ── */}
        <div style={{
          position: "absolute", top: 90, left: 16,
          background: "rgba(10,10,10,0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: 16, zIndex: 10, width: 220,
        }}>
          <p style={{ color: "#6B7280", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Filter by phase
          </p>

          {/* Phase buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
            {[
              { label: "All Hubs", value: "all" as const },
              { label: "Phase 1 — 2026", value: 1 },
              { label: "Phase 2 — 2027", value: 2 },
              { label: "Phase 3 — 2028", value: 3 },
            ].map(opt => (
              <button key={String(opt.value)} onClick={() => setActivePhase(opt.value as any)}
                style={{
                  padding: "7px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                  cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                  background: activePhase === opt.value ? "rgba(82,183,136,0.2)" : "rgba(255,255,255,0.05)",
                  border: activePhase === opt.value ? "1px solid rgba(82,183,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  color: activePhase === opt.value ? "#86EFAC" : "#9CA3AF",
                }}>
                {opt.label}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12 }}>
            <p style={{ color: "#6B7280", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
              Food desert severity
            </p>
            {[
              { color: "#E24B4A", label: "Critical" },
              { color: "#E07B39", label: "High" },
              { color: "#BA7517", label: "Moderate" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: item.color, opacity: 0.8 }} />
                <span style={{ color: "#9CA3AF", fontSize: 12 }}>{item.label}</span>
              </div>
            ))}
            <div style={{ marginTop: 10 }}>
              {[1, 2, 3].map(phase => (
                <div key={phase} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: PHASE_COLORS[phase],
                    border: "2px solid white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, fontWeight: 700, color: "#1A1A1A",
                  }}>{phase}</div>
                  <span style={{ color: "#9CA3AF", fontSize: 11 }}>{PHASE_LABELS[phase]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hub detail panel ── */}
        {selectedHub && (
          <div style={{
            position: "absolute", bottom: 24, right: 16,
            background: "rgba(10,10,10,0.93)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: 20, zIndex: 10, width: 300,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: `rgba(${selectedHub.phase === 1 ? "82,183,136" : selectedHub.phase === 2 ? "255,202,10" : "224,123,57"},0.15)`,
                  border: `1px solid rgba(${selectedHub.phase === 1 ? "82,183,136" : selectedHub.phase === 2 ? "255,202,10" : "224,123,57"},0.3)`,
                  borderRadius: 6, padding: "3px 8px", marginBottom: 6,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: PHASE_COLORS[selectedHub.phase] }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: PHASE_COLORS[selectedHub.phase] }}>
                    {PHASE_LABELS[selectedHub.phase]}
                  </span>
                </div>
                <h3 style={{ color: "white", fontSize: 16, fontWeight: 700, fontFamily: "Georgia, serif", margin: 0 }}>
                  {selectedHub.name}
                </h3>
                <p style={{ color: "#6B7280", fontSize: 12, margin: "2px 0 0" }}>
                  {selectedHub.neighborhood} · {selectedHub.zip}
                </p>
              </div>
              <button onClick={() => setSelectedHub(null)} style={{
                background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 6,
                color: "#9CA3AF", cursor: "pointer", padding: "4px 8px", fontSize: 14,
              }}>✕</button>
            </div>

            <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
              {selectedHub.description}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
              {[
                { label: "Score", value: `${selectedHub.score}/100` },
                { label: "Population", value: selectedHub.population },
                { label: "Med. Income", value: selectedHub.medianIncome },
              ].map(item => (
                <div key={item.label} style={{
                  background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "8px 10px", textAlign: "center"
                }}>
                  <div style={{ color: "#6B7280", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ color: "white", fontSize: 13, fontWeight: 700 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <a href="/donate" style={{
              display: "block", textAlign: "center", padding: "10px 16px",
              background: "#52B788", borderRadius: 8, color: "#0A2010",
              fontSize: 13, fontWeight: 700, textDecoration: "none",
            }}>
              Support this hub →
            </a>
          </div>
        )}

        {/* ── Loading overlay ── */}
        {!mapLoaded && (
          <div style={{
            position: "absolute", inset: 0,
            background: "#0A0A0A",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 20,
          }}>
            <div style={{ color: "#52B788", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em" }}>
              Loading map...
            </div>
            <div style={{ color: "#4B5563", fontSize: 12, marginTop: 8 }}>
              Sensible Living Foundation · Sense Gardens
            </div>
          </div>
        )}
      </div>
    </>
  );
}
