# SewaMato 🔧  
**Hyperlocal Service Marketplace for Nepal**  
*Next.js Frontend Application*

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## 🌐 Live Demo
https://sewamato.netlify.app *(Demo coming soon)*

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running Locally](#-running-locally)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Features
### Core Functionality
- 📍 Location-based service discovery (Kathmandu Valley focused)(in v2)
- 🔍 Advanced search with Nepali service categories
- 📱 Mobile-first responsive design
- 🌐 Nepali/English language support

### User Experience
- ✅ Service provider verification badges
- ⭐ Rating and review system
- 💬 Real-time chat with providers(in v2)
- 📅 Booking and scheduling system(in v2)

## 💻 Tech Stack
**Frontend**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui (Component Library)
- React Query (Data Fetching)
- Zustand (State Management)

**Services**
- Mapbox (Nepal Maps)(in v2)
- Nepali Date Converter (Bikram Sambat)
- Nepal-Phone-Number (Validation)
- Khalti/eSewa SDKs

## 📥 Installation
```bash
# Clone repository
git clone git@github.com:parbatsubedi/sewa_mato_frontend.git

cd sewa_mato_frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local