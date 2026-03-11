# Sense Gardens Interactive Map — Plan of Action

## Project Overview
Building an interactive map for Sensible Living Foundation that identifies communities
where Sense Gardens can have the greatest impact (food deserts, vulnerable communities).

## Repository Structure
Everything lives inside this forked repo under two folders:

```
sensible-living-foundation-digital-growth/   ← this repo (your fork)
├── backend/                                  ← Go API lives here
├── frontend/                                 ← Next.js app lives here
└── docs, planning files...                   ← already exists
```

- One repo, one PR to the client when done
- Client reviews the full solution in one place
- No repo transfers needed at delivery

## GitHub
- User: areja1 (Abhinav Reja)
- Repo: sensible-living-foundation-digital-growth (this forked repo — docs + code)
- Original client repo: https://github.com/areja1/sensible-living-foundation-digital-growth

---

## Tech Stack
- Backend:   Go 1.22+ with Fiber framework
- API Layer: GraphQL via gqlgen
- Frontend:  Next.js 14 + TypeScript + Tailwind CSS
- Map:       Mapbox GL JS + react-map-gl
- UI:        shadcn/ui components
- Data:      Flat GeoJSON files (no database — zero cost)
- Deploy:    Railway (Go API, free tier) + Vercel (Next.js, free tier)

---

## Folder Structure

### backend/
```
backend/
├── cmd/
│   └── server/
│       └── main.go
├── graph/
│   ├── schema.graphqls
│   ├── resolver.go
│   └── generated/
├── data/
│   ├── food_deserts.geojson
│   ├── social_vulnerability.geojson
│   ├── poverty.geojson
│   └── environmental_justice.geojson
├── go.mod
├── go.sum
└── .env
```

### frontend/
```
frontend/
├── app/
│   ├── page.tsx
│   ├── map/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── Map/
│   │   ├── MapContainer.tsx
│   │   ├── LayerToggle.tsx
│   │   └── CommunityPopup.tsx
│   ├── ui/
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/
│   ├── graphql/
│   │   └── queries.ts
│   └── mapbox/
│       └── layers.ts
├── public/
├── .env.local
└── next.config.js
```

---

## Data Sources (all free)
- USDA Food Access Research Atlas  → food deserts GeoJSON
- CDC Social Vulnerability Index   → vulnerable communities GeoJSON
- U.S. Census API                  → poverty data (free key)
- EPA EJScreen                     → environmental justice GeoJSON
- OpenStreetMap Overpass API       → schools and community centers (free)

---

## Environment Variables Needed
- NEXT_PUBLIC_MAPBOX_TOKEN  → mapbox.com (free account)
- CENSUS_API_KEY            → api.census.gov (free)

---

## Plan of Action

### PHASE 1 — Backend (backend/ folder)

- [ ] Step 1  — Create backend/ folder, init Go module, install Fiber + gqlgen, create folder structure
               COMMIT: chore: initialize Go API with Fiber and gqlgen

- [ ] Step 2  — Define GraphQL schema for foodDeserts query
               COMMIT: feat: add GraphQL schema for food deserts query

- [ ] Step 3  — Download USDA GeoJSON, write Go resolver to read and return it
               COMMIT: feat: add food deserts resolver with USDA GeoJSON data

- [ ] Step 4  — Run locally, verify data returns in GraphQL playground
               COMMIT: feat: verify food deserts GraphQL endpoint working

### PHASE 2 — Frontend (frontend/ folder)

- [ ] Step 5  — Create frontend/ folder, init Next.js + TypeScript + Tailwind, install Mapbox + shadcn
               COMMIT: chore: initialize Next.js app with Mapbox and Tailwind

- [ ] Step 6  — /map route renders blank Mapbox map centered on USA
               COMMIT: feat: add basic Mapbox map centered on USA

- [ ] Step 7  — Set up GraphQL client (urql), fetch food deserts data from Go API
               COMMIT: feat: connect map to GraphQL API for food deserts data

- [ ] Step 8  — Render food deserts as choropleth layer (green to red color scale)
               COMMIT: feat: render food desert choropleth layer on map

- [ ] Step 9  — Click any area, popup shows community data
               COMMIT: feat: add community data popup on map click

- [ ] Step 10 — Toggle button to show/hide food desert layer
               COMMIT: feat: add layer toggle control for food deserts

### PHASE 3 — Remaining Layers (one commit per layer)

- [ ] Step 11 — Social Vulnerability layer (CDC SVI)
- [ ] Step 12 — Poverty layer (Census API)
- [ ] Step 13 — EPA Environmental Justice layer
- [ ] Step 14 — Schools and community centers layer (OpenStreetMap)

### PHASE 4 — Impact Score + Garden Pins

- [ ] Step 15 — Algorithm in Go scores each census tract using all 4 data sources
               COMMIT: feat: add impact score algorithm and garden location pins

### PHASE 5 — Deploy + Deliver

- [ ] Step 16 — Deploy Go backend to Railway
- [ ] Step 17 — Deploy Next.js frontend to Vercel
               COMMIT: chore: add production environment configuration
- [ ] Step 18 — Open single Pull Request from your fork to client's original repo
               PR includes backend/ + frontend/ — full solution delivered in one review

---

## Rules
- Every step is reviewed before execution
- Commit message provided before every commit
- One step at a time — no skipping
- All work stays in this repo (backend/ and frontend/ folders)
- Final delivery = one PR to the client's original repo
