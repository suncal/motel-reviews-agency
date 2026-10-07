# 90-Day Execution Plan — Patel Motel Reviews Agency

**Operator:** Solo Hindi-speaking founder + 1-2 part-time Hindi dialers (both in another Asian country, typically India)
**Goal:** 10 paying clients × $499/mo = **$5,000 MRR + $5,000 collected setup fees by Week 12**
**Total launch capital:** $1,355 (research-verified — see [tech-stack-setup.md](tech-stack-setup.md))

This plan tells you exactly what to do each day for the first 90 days. Open the dashboard ([dashboard.html](../dashboard.html)) every morning — it has the daily checklist embedded.

---

## Phase 0 — Pre-launch (Days -7 to 0)

Before you make a single sales call, get the foundation in. This is the part most operators skip and pay for later.

### Day -7 to -5: Entity + Banking
- [ ] **Apply for Wyoming LLC via Northwest Registered Agent** — $139 first year. Pick "anonymous" filing.
- [ ] **Get the EIN from IRS directly** — call +1-267-941-1099 (US business hours = late evening India time). EIN issued in ~45 min over the phone. Alternative: fax SS-4, wait 4-6 weeks (don't recommend).
- [ ] **Get a US mail-forwarding address** — iPostal1 ($10-20/mo) or Anytime Mailbox. Required because Mercury and Stripe will reject your registered agent address.
- [ ] **Apply for Mercury Bank** — free, but tightened in 2026. Use real mail-forwarding address + LLC docs + EIN.

### Day -4 to -3: Phone & SMS infrastructure
- [ ] **Sign up for JustCall Team plan** ($49/seat/mo).
- [ ] **Buy 6 US local numbers** ($10/mo extra) — one for the operator, 5 for area-code matching during cold calls.
- [ ] **Register CNAM** — display "[Agency Name]" on caller ID. Reduces "spam likely" flag.
- [ ] **Submit A2P 10DLC Standard Brand registration** through JustCall ($4 + $15 + $10/mo). Vetting takes 5-10 business days — start NOW.
- [ ] **Sign up for 360dialog WhatsApp Business API** (€49/mo). Activation in 2-7 days.

### Day -2 to 0: Software stack
- [ ] **Sign up for GoHighLevel Unlimited** ($297/mo). Order the **Reviews + Reputation snapshot** from the marketplace.
- [ ] **Sign up for Apollo Basic** ($49/mo) — for owner phone/email enrichment.
- [ ] **Sign up for Outscraper** — buy $40 in credits for Google Maps scraping.
- [ ] **Sign up for Calendly** (free tier OK) — for booking discovery calls.
- [ ] **Sign up for Dropbox Sign / DocuSign** ($15/mo) — for client MSA signing.
- [ ] **Stripe** — once LLC + EIN + Mercury are live, apply for Stripe. Set up the $497 setup + $499/mo subscription product.
- [ ] **Set up agency email** — Google Workspace ($6/user/mo) on a custom domain. Domain $12/yr at Namecheap.

### Day 0: Test the stack end-to-end
- [ ] Make 3 test calls FROM India TO US numbers via JustCall — verify local-presence caller ID works.
- [ ] Send 3 test WhatsApp messages via 360dialog.
- [ ] Send yourself a Stripe payment link for $1 — verify checkout works.
- [ ] Build the GoHighLevel review request workflow on a test sub-account. Make sure the 5-star → Google, 1-3 star → private form filter works.

---

## Week 1 — Build the lead list (Days 1-7)

**Don't dial yet. Build the cleanest possible list of 500 Indian-owned motels first.**

### Day 1-2: Scrape Google Maps
1. Open Outscraper → Google Maps Scraper.
2. Search: `"motel" OR "inn" OR "lodge"` in each high-density state — start with **Georgia, New Jersey, Texas, California, Illinois, Florida** (Patel-dense). Then **North Carolina, South Carolina, Virginia, Tennessee, Pennsylvania, Ohio**.
3. Pull data: name, phone, website, owner reply text on reviews, rating, review count, address, lat/long.
4. Cost: ~$40 for 5,000-10,000 records.

### Day 3-4: Filter for Indian-owned
Open the scraped CSV in Google Sheets / Excel. Apply these filters in order:

**Filter A — Surname match in owner replies/responses:**
- Patel, Shah, Mehta, Desai, Modi, Bhakta, Halai, Dhanani, Trivedi, Joshi, Amin, Bhatt, Naik, Chaudhary, Rana, Singh, Gupta, Sharma, Soni, Tandel
- Hint: filter "owner_reply" column → contains any surname above.

**Filter B — Motel name patterns:**
- Names containing: "Patel", "Shah", "Krishna", "Shiva", "Lakshmi", "Ganesh", "Ram", "Diwali", "Sai", "Om", "Jay" (e.g., "Krishna Inn", "Patel's Motor Inn", "Shiva Lodge")
- These almost always signal Indian-owned.

**Filter C — Property type:**
- Independent (no Marriott/Hilton/IHG/Choice/Wyndham flag in name)
- 15-80 rooms (sweet spot for $499/mo affordability without being a chain-flag committee)
- Rating between 2.8 and 4.2 (high enough to fix, low enough to NEED fixing — 4.5+ doesn't need you)

### Day 5: Enrich with Apollo
- Upload the filtered list to Apollo (target: ~500-800 motels).
- Enrich for: owner first name, owner email, owner mobile (if available).
- Cost: included in Apollo Basic.

### Day 6: Sort + segment
Sort the final list by:
1. **US Time zone** (Eastern → Central → Mountain → Pacific) — so you call in the right window
2. **Rating gap** vs nearest 3 competitors (biggest gap = strongest pitch)
3. **Rooms** (30-60 rooms = ideal target)

Import the top 200 into the dashboard's Leads tab (CSV import button).

### Day 7: Final prep
- [ ] Confirm A2P 10DLC has been approved (call JustCall support if delayed).
- [ ] Confirm Stripe is approved (call Stripe support if "Under review" for >5 days).
- [ ] Rehearse the cold-call script (in Hindi) 20 times. Record yourself. Listen. Fix the awkward parts.
- [ ] Build the **WhatsApp 1-page sample report PDF** — pre-built for "[Motel Name] vs Top 3 Competitors — Google Rating Gap Analysis". Use Canva.
- [ ] Send yourself a test of the entire flow: cold-call script → WhatsApp PDF → Stripe payment link → MSA signing → GHL onboarding. Time it. Should take <15 min.

---

## Week 2-4 — First dials, first 2 clients (Days 8-28)

### Daily rhythm (every weekday)
**Operator's day in India targeting US:**

| India time (IST) | US ET | US PT | Block | Activity |
|---|---|---|---|---|
| 5:00 PM – 7:30 PM | 7:30 AM – 10:00 AM | 4:30 AM – 7:00 AM | **Pre-call** | Refresh today's list (80 dials), review script, hot tea |
| 7:30 PM – 10:30 PM | 10:00 AM – 1:00 PM | 7:00 AM – 10:00 AM | **Block 1** | 80 dials — US East Coast prime time |
| 10:30 PM – 11:30 PM | 1:00 PM – 2:00 PM | 10:00 AM – 11:00 AM | **Demos** | Take any booked demos (15 min each) |
| 11:30 PM – 1:30 AM | 2:00 PM – 4:00 PM | 11:00 AM – 1:00 PM | **Block 2** | 60 dials — Central/Mountain US |
| 1:30 AM – 3:30 AM | 4:00 PM – 6:00 PM | 1:00 PM – 3:00 PM | **Block 3** | 60 dials — Pacific time zone |
| 3:30 AM – 4:30 AM | 6:00 PM – 7:00 PM | 3:00 PM – 4:00 PM | **Wrap** | Log calls, WhatsApp follow-ups, plan tomorrow |

Yes — this is night shift for the operator. Brutal but necessary. After Week 4, hire a 2nd dialer to share the load.

### Week 2 targets
- [ ] 200 dials/day × 5 days = 1,000 dials
- [ ] ~40 conversations with owners (4% rate)
- [ ] ~10 demos booked (25% of convs)
- [ ] **First signed client by Day 14** (realistic — 1 close out of first 10 demos)

### Week 3 targets
- [ ] 1,000 more dials
- [ ] **2nd signed client by Day 21**
- [ ] Both clients onboarded — GHL set up, first review request SMS batches sent

### Week 4 targets
- [ ] 1,000 more dials
- [ ] **3rd signed client by Day 28**
- [ ] First monthly report ready for Client #1 (Day 30)
- [ ] **Hire dialer #1** — post on OnlineJobs.ph or LinkedIn India for "Hindi-speaking outbound caller, US clients". Pay ₹400-600/hr (part-time, 4 hrs/day). Commission $250 per signed client.

### End of Week 4 status
- **3 active clients** = $1,497 MRR + $1,491 setup collected = $2,988 collected
- **Pipeline:** 60 contacted, 12 demos pending, 4 proposals out
- **Stack burn through week 4:** ~$1,250 (entity + first month tools)
- **Cash position:** roughly break-even

---

## Week 5-8 — Scale + activate referrals (Days 29-56)

### What changes
- Dialer #1 is now ramped. You + dialer = ~350 dials/day combined.
- First 3 clients are now reference customers — use their before/after Google screenshots in every pitch.
- Activate the **$250 referral program** with every signed client.

### Week 5 (Days 29-35)
- [ ] Dialer #1 doing 150 dials/day, you doing 200
- [ ] Target: 2 new clients this week (total 5)
- [ ] Send Client #1 their first monthly report (Day 30)
- [ ] Ask Client #1 for first referral: "Patel saab, koi cousin ya friend motel ma hoy je ne aa kaam ma rasso aave to mara number pass karo. $250 cash aapu chu signed client par."

### Week 6 (Days 36-42)
- [ ] Target: 2 more clients (total 7)
- [ ] First referral arrives — close at 50%+ rate (warm leads from Patel network)
- [ ] **Hire dialer #2** if pipeline supports it. Combined capacity now ~500 dials/day.

### Week 7 (Days 43-49)
- [ ] Target: 1-2 more clients (total 8-9)
- [ ] Start sending case studies on WhatsApp ahead of cold calls — Client #1's rating went from 3.2 → 4.1 in 60 days. Real screenshot.
- [ ] Refine the script based on what's NOT working. Track every objection.

### Week 8 (Days 50-56)
- [ ] Target: **Client #10 signed** → $5K MRR achieved
- [ ] First **upsell** opportunity — pitch Client #1 the Direct Booking Funnel add-on (+$300/mo). Conversion expected 30-40%.
- [ ] **Stack cost at 10 clients:** $1,666/mo. **Net to operator:** $3,300/mo (recurring) + setup fees.

### End of Week 8 status
- **10 active clients** = $5,000 MRR + $5,000 setup collected = **$10K cumulative cash**
- **Pipeline:** 200+ contacted, 20+ demos pending, 6 referrals incoming
- **Cash position:** profitable; reinvest in 1 more dialer + ads

---

## Week 9-12 — Compound + upsell (Days 57-84)

### What changes
- Stop fighting for new clients on cold dials alone — referrals are now 40%+ of new pipeline.
- Layer in **upsell #1: Direct Booking Funnel** ($300/mo) for existing clients.
- Begin attending **AAHOA regional town halls** (free or <$100) — see [AAHOA calendar](https://www.aahoa.com/events).

### Week 9 (Days 57-63)
- [ ] Target: 12 active clients (2 new + 0 churn)
- [ ] Pitch Direct Booking Funnel to Clients 1-3 (the trusted ones)
- [ ] 1-2 close on upsell = +$600/mo MRR

### Week 10 (Days 64-70)
- [ ] Target: 14 active clients
- [ ] Attend 1 AAHOA regional town hall in person if you can — operator hands out cards, dialer continues remote
- [ ] **Test cold email** as a second channel — Instantly.ai or Smartlead with 5 warmed-up domains. 200 emails/day at no per-conversation cost.

### Week 11 (Days 71-77)
- [ ] Target: 16 active clients
- [ ] 3rd upsell — pitch **AI Voice Receptionist** ($300/mo) to early clients. Synthflow white-label.
- [ ] Build the AI Voice demo agent. Test on 2 client motels for free first.

### Week 12 (Days 78-84)
- [ ] Target: **18-20 active clients** (recurring revenue + setup compounds)
- [ ] **ARPU climbing** as upsells stack: top quartile clients now $799-1,099/mo
- [ ] Total MRR target: **$9-12K**
- [ ] Total cash collected by Day 84: **$25K-35K**

---

## End-of-90-Day Summary (Target State)

| Metric | Target | Stretch |
|---|---|---|
| Active clients | 18 | 25 |
| MRR | $9,000 | $12,500 |
| Setup fees collected (cumulative) | $9,000 | $12,500 |
| Cumulative cash collected | $27,000 | $40,000 |
| Stack costs (cumulative) | $5,500 | $5,500 |
| **Net to operator (cumulative)** | **$21,500** | **$34,500** |
| Team size | 1 operator + 2 dialers | 1 operator + 2 dialers + 1 onboarder |
| Pipeline depth | 400+ leads | 700+ leads |

---

## Month 4-12 Trajectory

After Week 12 the business compounds:
- **Referrals dominate** — Patel cousin network compounds; 40-60% of new clients come from existing
- **Upsell ladder unlocks** — Reviews ($499) → Direct Booking (+$300) → AI Voice (+$300) → Compliance Shield ($1,500/yr) — top quartile ARPU reaches **$1,400/mo**
- **By Month 6:** 35-40 active clients × ~$650 ARPU = **~$25K MRR**
- **By Month 12:** 55-70 active clients × ~$800 ARPU = **~$50K MRR**, plus setup fees, plus compliance annual revenue
- **Realistic 18-month ceiling:** $36-54K MRR per [Agent #1 market research](../research/indian_motel_market_research.md). Beyond this you'd need to expand geography or add adjacent niches (gas stations, restaurants).

---

## Daily/Weekly Rhythms (After Week 4)

### Daily (every working day)
1. **Morning (operator)** — review yesterday's call log, plan today's 200-call list, refresh on script
2. **3 call blocks** — Block 1 (East), Block 2 (Central/Mountain), Block 3 (West)
3. **Evening** — log every dial in dashboard, send WhatsApp follow-ups, update pipeline stages
4. **Sleep**

### Weekly
- **Monday:** Refresh lead list, dial 5x harder
- **Wednesday:** Run upsell pitch with 2 existing clients
- **Friday:** Send monthly reports to any clients hitting their 30-day mark
- **Saturday:** No calls. Build assets (case studies, video testimonials, training videos for dialers)
- **Sunday:** Plan next week, review metrics, pay dialers

### Monthly
- 1st of month: Auto-charge MRR via Stripe. Send monthly reports to ALL clients.
- 15th: Calibration call with each client (15 min) — what's working, what's not
- End of month: Pay any referral fees due, run financial review

---

## When Things Go Wrong (Risk Playbook)

### "My call connect rate is 0%"
- Check JustCall caller ID — is it showing US local? Re-register CNAM.
- Are you on the spam list? Check spam-test services like Whitelist.cx.
- Rotate to a fresh US number ($1/mo) and burn the old one.

### "I'm getting through but the close rate is 0%"
- Record 10 calls (in two-party consent states announce recording). Listen.
- The issue is almost always: not enough urgency in problem agitation, OR price-shock before showing ROI.
- Fix the script: deliver the Cornell 11% number FIRST, price LAST.

### "The first client is unhappy / threatening cancellation"
- Get on a call within 2 hours. Hindi only — no English defensiveness.
- Listen first, fix second. Most issues = expectations mismatch, not delivery failure.
- Offer 30 days free if they stay — costs nothing, retains MRR.

### "I'm burning out from the night shift"
- Hire dialer #1 BY DAY 28 — non-negotiable.
- Move yourself to closer/manager role, not primary dialer, by Day 56.

### "A2P 10DLC was rejected"
- Common reasons: LLC docs don't match, EIN not verified, sample messages too sales-y.
- Resubmit with cleaner sample messages: "Hi {Name}, thanks for staying at {Motel}! Would you mind leaving a quick Google review? {link}" — neutral, transactional, no spammy CTAs.

### "Stripe held my account"
- Common when new LLC + Indian founder + first transaction is unusual.
- Submit: LLC docs, EIN letter, ID, 3 client invoices, MSA. Usually clears in 5-7 days.
- Backup: have a Wise Business account ready for ACH/wire from clients while Stripe sorts out.

---

## Files to read alongside this plan

- [dashboard.html](../dashboard.html) — your daily home base
- [operations/tech-stack-setup.md](tech-stack-setup.md) — complete tool setup walkthrough
- [operations/phone-system-setup.md](phone-system-setup.md) — JustCall + A2P 10DLC + compliance
- [scripts/sales-playbook.md](../scripts/sales-playbook.md) — every script, every objection, every WhatsApp message
- [research/indian_motel_market_research.md](../research/indian_motel_market_research.md) — market size, pain points, risks
- [research/indian_motel_competitive_landscape.md](../research/indian_motel_competitive_landscape.md) — who else is in the space
- [research/motel_agency_offer_and_playbook.md](../research/motel_agency_offer_and_playbook.md) — why reviews specifically

---

**Last note for the operator:** This plan is opinionated and aggressive. If you fall behind on Week 3 by 1-2 clients, that's normal — adjust forward. If you fall behind by Week 6, something is structurally wrong (script, list quality, or delivery). Fix the structure, don't grind harder.

The Patel motel market is a relationship game. Your superpower is language. Use it. **Jab tak owner phone pe na aaye, English. Jaise hi owner aaye — pura conversation Hindi mein. English ek bhi sentence nahi.** — Be Hindi-first, salesman second.
