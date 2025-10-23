# 🌍 OpenRoute

**OpenRoute** is a full-stack **mapping and routing web application** built using **React**, **Spring Boot**, and **OpenStreetMap (OSM)**.  
It enables users to get real-time directions, estimate travel time and distance, and visualize routes directly on an interactive map.

---

## ✨ Features

- 🧭 **Live Location Access** – Detects your current location with one click  
- 🔍 **Smart Destination Search** – Fetches destination coordinates using the OSM API  
- 🗺️ **Route Visualization** – Displays routes between two locations  
- 🚘 **Travel Estimation** – Calculates distance and estimated travel time  
- 🔄 **Real-Time Updates** – Automatically updates routes when your position changes  

---

## 🧰 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React, React-Leaflet, Leaflet.js |
| **Backend** | Spring Boot, OpenStreetMap (Nominatim API) |
| **Containerization** | Docker |
| **API Communication** | REST |

---

## ⚡ Setup & Installation

### 🧩 Prerequisites

Ensure the following tools are installed:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) *(optional for local frontend testing)*
- [Java JDK 17+](https://adoptium.net/) *(optional for local backend testing)*

---

## 🐳 Running with Docker

You can easily run both the **frontend** and **backend** using Docker.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vishal20csu/OpenRoute.git
cd OpenRoute


###  Build Docker Images
docker build -t backend ./MapperFunctionality
docker build -t frontend ./bootReact

### Run the Images
docker run -d -p 8080:8080 --name backend backend
docker run -d -p 3000:3000 --name frontend frontend


### You should see:

🟢 Backend → http://localhost:8080
🟢 Frontend → http://localhost:3000

