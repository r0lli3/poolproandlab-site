# Pool Pro&Lab — Site Map

**Source:** https://poolproandlab.com (https://www.poolproandlab.com/en/)  
**Crawled:** 2026-05-06  
**Original tech:** WordPress + WooCommerce (dated ~2017–2018 design)

---

## Design Language

- **Primary color:** Cyan/blue (`#00b4d8` approx) on white  
- **Accent:** Orange/gold for CTAs  
- **Footer:** Dark navy  
- **Fonts:** System fonts (Helvetica/Arial) — dated, modernize with distinctive display+body pair  
- **Layout:** Classic grid, mostly centered, not responsive enough  
- **Logo:** Pool Pro&Lab wordmark with droplet/flask icon  
- **Top bar:** Call Center + Email + Language flag (EN/TH)

---

## Navigation Structure

```
HOME | SHOP | WATER LAB | SERVICES | NEWS/ACTIVITIES | FRANCHISE ▾ | CONTACT US
                                                         ├─ Franchise Concept
                                                         ├─ Benefits
                                                         ├─ How to Apply
                                                         ├─ FAQs
                                                         └─ Business Contact
```

---

## Routes & Pages

### `/` → `/en/` — Home
**Purpose:** Main landing page showcasing all business pillars  
**Key content blocks:**
- Hero slider (3 slides): Pool Equipment & Supplies, Cleaning Robot, Pool Water Lab
- Product Category grid (12 categories with images)
- Recommended Products (featured items)
- Our Services section (3 cards: Lab, Pool Water Treatment, Pool Care & Cleaning)
- News & Activity (latest posts)
- PPL Blog
- Newsletter signup
- Footer with branch info + QR code

**Stale flags:** Blog posts from 2017–2018 (very outdated)

---

### `/shop` — Shop
**Purpose:** E-commerce product catalog (WooCommerce, 124 products)  
**Key content blocks:**
- Product grid with sorting
- Categories sidebar
- 124 products total

**Rebuild approach:** Static product showcase page (no WooCommerce), link to contact for purchase, or redirect to a clean catalog

---

### `/lab` — Pool Water Testing Lab
**Purpose:** Explains the computerized water analysis service  
**Key content blocks:**
- Hero: "Pool Water Testing Lab — The first computerized water analysis laboratory in ASEAN"
- Tagline: "Because you never know what lies beneath the sparkling blue water in your swimming pool…"
- "Is your pool water Health Enough to swim?" — risks: damaged hair, skin problems, tooth decay, respiratory infection, pink eye
- "Pool Water Check Up" — checks 11 parameters
- "Easy way to get the water test":
  1. Bring water sample to Pool Pro&Lab
  2. Team experts collect and provide results within 7 days
- Newsletter signup

---

### `/service` — Our Services
**Purpose:** Lists all services offered  
**Key content blocks:**
- Hero: "Our Services — Purity your swimming pool"
- 5 services:
  1. **Computerized pool water lab** — 11-variable analysis, recommendations
  2. **Advance water treatment** — Australian products (Sanitizer, pH Buffer, Clarifier, Pool Protection)
  3. **Pool Care & Cleaning** — full vacuum, water balancing, equipment checks
  4. **Pool maintenance, Equipment and repair** — Filter, Salt Chlorinator, Robot parts, Pumps, Lights
  5. **Water Problem Eliminator** — Algae, Cloudy water, Flocking, Stains, Discoloration

---

### `/news` — News & Activities
**Purpose:** Blog/news posts  
**Key content blocks:** Latest posts (mostly 2017–2018)
**Stale flags:** All content is 5–8 years old — note as placeholder, keep page structure

---

### `/franchise-concept` — Franchise Concept
**Purpose:** B2B franchise opportunity pitch  
**Key content blocks:**
- "1st Pool Service Franchise in ASIA"
- Thailand has highest pool ownership in Asia
- "A Complete Support Structure"
- Pool equipment store + Water testing lab + Treatments
- Company Profile: J.D. Pools — 20 years, 14,000+ pools built in Thailand, first to export pools, 20 showrooms

---

### `/benefits` — Benefits (Franchise)
**Purpose:** What franchisees get  
**Key content blocks:**
- Trade name/logo/format rights
- Products at special price
- Showroom design assistance
- Staff training + operations manuals
- Support in: outlet management, operations, marketing, procurement, accounting, R&D
- **Training Program:** Phase 1 at head office, Phase 2 in outlets

---

### `/howtoapply` — How to Apply (Franchise)
**Purpose:** Step-by-step franchise application guide  
**Key content blocks:**
- 6 steps:
  1. Complete franchise application form → kanlaya.fci@jdpools.com / Tel. 087-670 2991
  2. Franchise initial meeting
  3. Financial verification
  4. Franchise agreement signed
  5. Training program
  6. Branch setup and opening

**Stale flags:** Email kanlaya.fci@jdpools.com may be outdated — flag

---

### `/faqs` — FAQs (Franchise)
**Purpose:** Franchise Q&A  
**Key content blocks:**
- How long does decoration take? ~4 months
- What does initial investment include? Shop decoration, equipment, signage, marketing support, staff training, operation support
- Minimum order? Depends on location
- Location selection assistance? Yes, team of experts

---

### `/business-contact` — Business Contact (Franchise)
**Purpose:** Contact form for franchise inquiries  

---

### `/contactus` — Contact Us
**Purpose:** Branch locations and contact info  
**Key content blocks:**
- 4 branches:

| Branch | Address | Phone | Email |
|--------|---------|-------|-------|
| Bangkok | 2184-2186 New Petchaburi Rd., Bangkapi, Huaykwang, Bangkok 10310 | 081-844-5564 | info@poolproandlab.com |
| Chiang Mai | 209/19 Wualai Road, Haiya, Muang, Chiangmai 50100 | 052-011788, 095-2044332 | chiangmai.ppl@gmail.com |
| Chiang Rai | 139/2, 139/5 Moo. 12, Rob Waing, Muang Chiang Rai, 57000 | 082-4961477, 095-3712689 | poolproandlab.cr@gmail.com |
| Hua Hin | 60/30 Phet Kasem, Hua Hin, Prachuap Khiri Khan 77110 | 095-424-4888 | ppl.huahin@gmail.com |

- Contact form

---

## Product Categories (from homepage grid)

1. Pool Cleaning Robot → `/poolcleanigrobot`
2. Pool Cleaning Equipment → `/poolcleaning`
3. Pool Chemicals → `/poolchemical`
4. Premium Pool Chemicals → `/poolchemical-premium`
5. Pool Pump → `/poolpump`
6. Pool Filter System → `/poolfilter`
7. Salt Chlorinator → `/saltchlorinator`
8. Mineral Swim → `/mineralswim`
9. Underwater Light → `/light`
10. Filter Components → `/filter-components`
11. Pool Fitting → `/pool-fitting-2`
12. Valve → `/pool-valve`
13. Pool Water Testing → `/water-testing`
14. FastLane → `/fastlane`

---

## Stale / Flagged Content

| Issue | Location | Recommendation |
|-------|----------|----------------|
| Blog posts all from 2017–2018 | `/news` | Keep structure, note content is placeholder |
| Franchise email kanlaya.fci@jdpools.com | `/howtoapply` | Flag as potentially outdated |
| "Year-End Shock Price" promo 2018 | Various | Do not include in rebuild |
| Thai-language-only some pages | Multiple | English-only rebuild for now |
| WooCommerce shop (124 products) | `/shop` | Rebuild as static showcase with contact CTA |
| reCAPTCHA errors in console | Multiple | Implement modern form handling |
| Copyright "© 2017 Pool Pro&Lab" | Footer | Update to current year |

---

## Color Palette (Extracted)

```css
--color-primary:    #00b4d8;  /* Main cyan/blue */
--color-primary-dk: #0077b6;  /* Darker blue */
--color-accent:     #ff6b35;  /* Orange CTA */
--color-bg:         #ffffff;  /* White */
--color-footer:     #1a2332;  /* Dark navy */
--color-text:       #333333;  /* Body text */
--color-muted:      #666666;  /* Secondary text */
```
