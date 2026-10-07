# Phone & Telecom Setup — US-Targeted Cold-Call Agency Operated From India

Last updated: 2026-05-17. Pricing verified against vendor pages and third-party reviews dated 2026. All USD unless noted.

---

## TL;DR — Recommended Stack (Under $200/mo at start)

For a 1-operator-bootstrap that grows to 2-3 dialers in India targeting US independent motel owners, the lowest-risk stack is:

| Component | Vendor | Cost |
|---|---|---|
| Primary VoIP + dialer + recording | **JustCall Sales Suite** (annual) | $49/user/mo (1 seat at start) |
| Bundled US local number | included (1 per seat) | $0 |
| Extra US local numbers for "local presence" pool | 5 numbers @ ~$2/mo | $10/mo |
| Outbound US calling (unlimited US/Canada on Pro) | included on JustCall Pro+ | $0 incremental |
| A2P 10DLC brand + campaign | via JustCall → TCR | ~$4 one-time + $10/mo campaign |
| WhatsApp Business API | **360dialog** (no per-message markup) | €49/mo (~$54) + Meta pass-through |
| US LLC for 10DLC + Stripe/Mercury banking | **Doola** (cheapest non-resident) | $297 setup + $297/yr |
| Call recording | included in JustCall Pro+ | $0 |
| CNAM display name registration | free via Twilio Trust Hub if you ever switch | $0 |
| **Monthly all-in (post-setup, 1 operator)** | | **~$130-$160/mo** |
| **One-time setup** | LLC + 10DLC | ~$310 |

When you scale to 3 dialers, the all-in monthly run-rate moves to roughly $280–$330 (3 JustCall Pro seats + 360dialog + a few extra local-presence numbers). Step up to JustCall's auto/predictive dialer ($89/seat/mo) only after the first cohort of dialers proves ROI.

**Why this stack over alternatives:**
1. JustCall was founded in 2016 in India by SaaS Labs — Indian founders, Indian engineering, no signup friction for Indian residents, and they explicitly market to teams in India calling the US. ([SaaS Labs](https://www.saaslabs.co/justcall))
2. JustCall has built-in **Local Presence** dialing — the dialer auto-matches the area code of the prospect to one of your owned US numbers, which is the single biggest answer-rate lift for cold calls from a foreign IP. ([JustCall Local Presence docs](https://help.justcall.io/en/articles/7851731-local-presence-in-sales-dialer))
3. Call recording, power dialer, CRM (HubSpot/Pipedrive/GoHighLevel via Zapier or native) and STIR/SHAKEN signing are all baked in — you don't have to chain three vendors.
4. 360dialog is the cheapest WhatsApp BSP for an Indian operator because they bill in INR/USD with zero per-message markup over Meta's price. ([360dialog pricing](https://360dialog.com/pricing))
5. A Doola-formed Wyoming LLC is the cleanest legal path to register an A2P 10DLC Standard Brand from India, which is mandatory if you want to send SMS to US numbers.

---

## A. VoIP Comparison — India → US Cold-Calling

The four questions for each vendor: (1) Can you sign up from India? (2) Outbound US per-minute? (3) US local-area-code caller ID? (4) Real-world Indian-broadband call quality?

### Top tier for this use case

| Vendor | India signup | US local number | Outbound US (landline/mobile) | Monthly base | Local-presence pool | Auto/Power dialer | Notes |
|---|---|---|---|---|---|---|---|
| **JustCall** | Yes — India-based company (Palo Alto HQ, Indian founders/engineering) | Yes, 1 free per seat | Unlimited US/CA on Pro+, $0.02/min over plan after limits | $29 Essentials, **$49 Team, $89 Pro Plus (annual)** | Yes, native | Yes (Sales Dialer + Predictive on top plans) | Best overall fit; Hindi/Gujarati support staff |
| **CallHippo** | Yes — Ahmedabad, Gujarat-based company | Yes, 1 per seat on paid plans | $0.018/min outbound to US (Starter); unlimited US/CA on Pro+ | $0 Basic, $18 Starter, **$30 Professional**, $42 Ultimate | Yes (add-on on most plans) | Yes (Power Dialer add-on) | Cheaper than JustCall but Trustpilot reviews flag drops, credit drain, hidden add-ons |
| **CloudTalk** | Yes (160+ countries) | Yes | Unlimited US/CA on Essential+ | $25 Lite → $50 Essential → $80 Expert | Yes (Expert plan) | Yes (Power, Smart, Predictive on Expert) | Stronger for inbound + analytics than pure outbound cold calling |
| **Aircall** | Yes (100+ countries) but requires a paid business email and 3-seat minimum | Yes | Unlimited US/CA on most plans | **$30 Essentials (3-seat min)** = $90/mo floor | Yes | Power dialer only on Professional ($50/seat × 3) | 3-seat minimum kills the bootstrap plan |
| **Dialpad** | Yes | Yes | Unlimited US/CA | $15 Standard, $25 Pro, custom Enterprise | Yes (Pro+) | No native predictive; only outbound dialer | Solid quality, weaker for high-volume outbound |
| **Ringover** | Yes (110+ destinations) | Yes | Unlimited US/CA | €21 Smart, €44 Power | Yes | Yes (Power on top plan) | French company; works fine from India |

### Useful but not the primary pick

| Vendor | Verdict for India→US cold calling |
|---|---|
| **OpenPhone / Quo** | Will let you sign up from India but the product is built for US/CA small biz. They officially issue only US/CA numbers. India→US calls work but no local-presence dialing, no native power dialer. Starter $15, Business $23, Scale $35 per user/mo. India inbound rates to a US number $0.07-0.09/min. ([Quo pricing](https://www.quo.com/pricing)) |
| **MightyCall** | US-focused. Works from India but signup typically asks for a US payment method. STIR/SHAKEN built in. |
| **RingCentral** | Heavy-weight enterprise. Overkill and overpriced ($30-50+/seat) for a bootstrap. |
| **Vonage** | Same — enterprise-class, slow to provision for non-US accounts. |
| **Google Voice** | **Blocked.** Personal Google Voice requires US IP + US phone for verification. Google Workspace Voice is restricted to a fixed list of supported countries (India not among them). Workarounds (US VPN + a verified US number) are policy-violating and accounts get suspended. ([Google Voice supported countries](https://knowledge.workspace.google.com/admin/voice/google-voice-and-sip-link-supported-countries)) |
| **Skype** | **Retired May 5, 2025.** Microsoft moved everyone to Teams Free, but Teams Phone is not a viable cold-call dialer (no local presence, no recording at consumer tier, no CRM integration). ([Microsoft Skype retirement](https://support.microsoft.com/en-us/skype/how-do-i-dial-an-international-number-from-skype-on-desktop-1c6aa06d-d265-409c-bf97-37245f16b286)) |
| **Zoiper / 3CX / Linphone + Telnyx or VoIP.ms** | The cheapest option per minute if you self-host. Telnyx ~$0.007/min outbound to US local; VoIP.ms ~$0.005/min outbound + $1.10/mo per number; SIP channel fees $12/mo on Telnyx. But: you build your own dialer, your own recording, your own STIR/SHAKEN cert, and your own A2P 10DLC. Total dev/ops burden defeats the purpose for a bootstrap. Revisit when call volume justifies it (>50k mins/mo). ([Telnyx pricing](https://telnyx.com/pricing), [VoIP.ms pricing](https://voip.ms/pricing)) |

### Power/predictive dialers (specialty)

| Vendor | Monthly | India signup | Notes |
|---|---|---|---|
| **PhoneBurner** | $140-$215/seat + $35/seat ARMOR spam add-on | Yes but US-payment-method expected | Excellent for low-volume high-quality dial sessions; expensive |
| **CallTools** | ~$100-$120/seat | Yes | Predictive dialer + DNC scrubber; US-focused support |
| **Mojo Dialer** | $99-$149/seat | Yes | Real-estate-centric but works for any cold list |
| **Convoso** | ~$90/seat | Yes | Strong answer-rate reputation; sells to BPOs in India |
| **Five9** | Enterprise, talk to sales | Yes | Too expensive for bootstrap |
| **Kixie / Aloware** | $35-$95/seat | Yes | Good for HubSpot/Pipedrive workflows |

### Rank — top 3 by use case

**(a) Solo bootstrap from India with one US local number:**
1. **JustCall Team @ $49/seat** — built for this, Indian-founded, US number included, local presence ready.
2. **CallHippo Professional @ $30/seat** — cheapest viable option, India HQ in Ahmedabad, but accept the quality complaints.
3. **OpenPhone (Quo) Starter @ $15/seat** — cheapest of all and very clean UX, but you lose local-presence dialing and power-dialer features.

**(b) Operator + 1-2 dialers with shared queue, recording, power dialer:**
1. **JustCall Pro Plus @ $89/seat** — single product covers shared inbox, recording, auto/predictive dialer, CRM sync.
2. **Convoso** (custom quote, ~$90/seat) — best for pure outbound dialing volume.
3. **CallTools** (~$120/seat) — purpose-built US predictive dialer with DNC scrubbing.

---

## B. US Local-Presence Caller ID

The most important single thing. A motel owner in Texas will not pick up a call from a +91 Indian number or a flagged "Spam Likely" US number. They might pick up a 469 or 214 number that looks like another Dallas-area business.

### How to set it up

1. **Buy a pool of US local-area-code numbers** in the regions you target. Numbers cost $1-3/mo on most providers; on Telnyx local DIDs are ~$1/mo, VoIP.ms ~$0.85-$1.10/mo, JustCall ~$2/mo.
2. **Enable dynamic-area-code matching.** The dialer auto-selects an owned number whose area code matches the prospect's area code before placing the call. JustCall, CallHippo, CloudTalk Expert, PhoneBurner, CallTools, Convoso, and Kixie all support this natively. ([JustCall local presence](https://help.justcall.io/en/articles/7851731-local-presence-in-sales-dialer))
3. **Rotate numbers.** Never burn the same outbound number on more than ~50-75 dials per day per area code. Carriers' spam filters (Hiya, RoboKiller, T-Mobile Scam Shield, AT&T Call Protect, Verizon Call Filter) flag any number that hits a velocity/short-call-duration threshold.
4. **Keep average call duration high.** Aborted 3-second calls trigger spam scoring. If a prospect rejects the call, that's fine; if you hang up after a single ring, that's not.
5. **Monitor your reputation.** Free check sites: [freecallerregistry.com](https://www.freecallerregistry.com), [reportarobocall.com](https://www.reportarobocall.com). Paid: TNS Call Guardian, Hiya Connect, Numeracle Trusted Caller. JustCall and PhoneBurner have their own spam-monitoring dashboards.

### CNAM registration (the name that displays on landline caller ID)

CNAM is the 15-character name shown on caller-ID-enabled landlines. Most US mobile carriers do **not** read CNAM (they use their own crowd-sourced/algorithmic display). For landline-heavy motel owners, CNAM still matters.

- **Cost via Twilio:** free to register a CNAM display name through Twilio's Trust Hub Trust Product flow, but you must complete Trust Hub Business Profile verification first. ([Twilio CNAM docs](https://www.twilio.com/docs/voice/brand-your-calls-using-cnam))
- **Cost via JustCall / CallHippo:** included on paid plans.
- **Constraints:** max 15 characters, must be unique, can't be a generic city/state name. Suggested: `MOTEL REVIEWS` or your registered LLC short name.
- **Propagation:** 48-72 hours after approval.

### Branded Calling ID (BCID) — the modern upgrade

CTIA's Branded Calling ID delivers a verified business **name, logo, and call reason** to a mobile recipient before they answer. ([CTIA Branded Calling best practices](https://api.ctia.org/wp-content/uploads/2022/11/Branded-Calling-Best-Practices.pdf))

- Requires: USPTO-registered trademark (cost ~$350 + ~$250-500 attorney) and A-level STIR/SHAKEN attestation.
- BCID enrollment vendors: Numeracle, TransNexus, First Orion, Commio, Twilio Branded Calls. Pricing typically $100-500/mo + per-call surcharge.
- **Verdict for a bootstrap:** skip BCID for the first 6 months. Revisit once you have steady call volume and a registered trademark.

### STIR/SHAKEN — the carrier-trust certificate

- Calls originating outside the US receive **C-level (Gateway) attestation** by default, which carriers increasingly block or label "Spam Likely." ([TransUnion Attestation Levels](https://www.transunion.com/blog/what-are-the-attestation-levels-for-stir-shaken))
- To get **A-level attestation** (the carrier vouches that you own the number), your originating carrier must be the one signing the call. JustCall, OpenPhone, Twilio, Bandwidth, Telnyx all sign at A-level when you call from a number they issued and that's tied to a verified Trust Hub / Business Profile.
- Action: complete Trust Hub / Business Profile verification on day 1 of provisioning. This is what unlocks A-level signing on your outbound calls. Without it, your calls drop to B or C and you'll be flagged within 48 hours.

---

## C. A2P 10DLC — Mandatory For Any SMS To US Numbers

Since 2024 the US mobile carriers (T-Mobile, AT&T, Verizon) require **every** sender of business SMS to US numbers to register a Brand and at least one Campaign in The Campaign Registry (TCR). Unregistered messages are blocked outright.

### Can a non-US entity register?

Technically yes, but practically it's painful. TCR's Standard Brand path expects a US EIN. They will accept a non-US Tax ID, but the Brand will be scored lower, throughput limits will be tighter, and many TCR vetting agents reject foreign-only Brands.

**The realistic path:** form a US LLC, get an EIN, register the Brand against the LLC.

### LLC formation (cheapest options for an Indian founder)

| Provider | Setup | Year 2+ | EIN included | Bank account | India-resident support |
|---|---|---|---|---|---|
| **Doola** | $297 (Starter) | $297/yr | Yes | Mercury / Relay | Strong — explicitly markets to India |
| **Firstbase** | $399 | $399/yr (Agent) | Yes | Mercury | Yes |
| **Stripe Atlas** | $500 | $100/yr (Agent) | Yes | Stripe Treasury / Mercury | Yes, Indian-founder guide published |

State to choose: **Wyoming** (no state income tax, lowest annual fee, best privacy) or **Delaware** (most prestige, easier to raise funding later). Wyoming is the right pick for a one-person agency.

Bank account: **Mercury** (free, instant virtual debit card) — works for Indian founders with an EIN and a US LLC. ([Stripe Atlas Indian founder guide](https://docs.stripe.com/atlas/indian-founder-guide))

### Brand + Campaign fees (TCR, passed through by Twilio/JustCall/etc.)

| Item | Cost | Frequency |
|---|---|---|
| Standard Brand registration | $4 | One-time |
| Brand vetting (optional, lifts daily throughput from 2k → 200k SMS) | $40 | One-time |
| Campaign registration | $15 | One-time |
| Campaign monthly fee | $10/mo (Low Volume) or $10-15/mo (Standard) | Recurring |
| Per-message carrier surcharges | $0.001-$0.005 inbound, $0.0025-$0.0075 outbound | Per message |
| Twilio platform per-message | $0.0079 SMS, $0.0083 MMS | Per message |

Total fixed cost: ~$59 setup + ~$10/mo. ([Twilio A2P 10DLC pricing](https://help.twilio.com/articles/1260803965530-What-pricing-and-fees-are-associated-with-the-A2P-10DLC-service-))

### Best A2P 10DLC providers (2026)

| Provider | Brand fee passthrough | Per-message (US) | Best for |
|---|---|---|---|
| **Twilio** | $4 + $15 | $0.0079 + carrier | Maximum reliability |
| **Telnyx** | $4 + $15 | $0.004-$0.0065 + carrier | Lowest per-message |
| **Bandwidth** | $4 + $15 | Custom quote | Enterprise volume |
| **Plivo** | $4 + $15 | $0.0055 + carrier | Mid-market |
| **JustCall** (built on Plivo/Twilio) | $4 + $15 passthrough | Bundled into per-seat | Easiest for non-developers |

### Walkthrough for an India-based operator (no US presence yet)

1. **Form the LLC** via Doola Wyoming ($297). 1-2 weeks to get formation docs.
2. **Get EIN** (Doola files SS-4 with IRS). 4-6 weeks for India-resident founders because IRS requires fax/mail of SS-4.
3. **Open Mercury bank account** with EIN + LLC docs (instant approval if Doola onboards).
4. **Inside JustCall (or your VoIP provider):** open Trust Center → Business Profile → enter EIN, LLC name, US registered agent address.
5. **Register Brand** as Standard (not Sole Prop). Sole Prop is limited to US/CA residents only.
6. **Register Campaign** — pick `Marketing` or `Customer Care` use case. Draft your sample SMS and CTA.
7. **Wait 7-14 business days** for TCR vetting.
8. **Once approved**, you can text US numbers from any US local DID you own. Throughput starts at 2,000 SMS/day; jumps to 200,000/day if you pay the $40 vetting upgrade.

### WhatsApp as a workaround for SMS

WhatsApp Business API does **not** require A2P 10DLC. It is the fastest legal channel to message US business owners from India.

- **Setup time:** 2-7 days vs 3-6 weeks for 10DLC.
- **No 10DLC fees, no carrier surcharges, no throughput throttle.**
- **Caveat:** the prospect must have WhatsApp installed. In the US, WhatsApp penetration among small business owners is ~25% nationally but much higher (60%+) among Indian-, Gujarati-, Punjabi-, and Patel-owned motels — which is exactly your target.

### WhatsApp Business API providers (2026)

| BSP | Monthly platform fee | Markup on Meta rates | Best for |
|---|---|---|---|
| **360dialog** | €49/mo (~$54) | **$0** — pass-through at Meta cost | Lowest total cost; India-friendly billing in INR/USD |
| **Twilio WhatsApp** | $0 platform | $0.005-$0.010/message markup | Easiest if already on Twilio |
| **Gupshup** | Free tier exists | Markup varies | Indian company, INR billing |
| **Wati** | $39-$99/mo | Volume markup | No-code shared inbox |
| **MessageBird (Bird)** | $50+ | Markup | Multi-channel campaigns |
| **Meta direct (Cloud API)** | Free | $0 markup | Requires developer; 1,000 free service conversations/mo |

**US WhatsApp marketing-conversation rate (2026):** $0.025 per conversation (Meta's price). India business-initiated marketing: ₹0.78/conversation (~$0.0094). ([360dialog pricing](https://360dialog.com/pricing))

**Verification requirements (Meta Business Verification):**
- Legal business name (your Wyoming LLC works)
- Business website (single landing page is enough)
- Business address (the Wyoming registered-agent address works)
- Phone number for OTP verification (a US JustCall number works)

**Recommended choice for this agency:** **360dialog** at €49/mo + Meta pass-through. The €49 covers up to 1,000 conversations free, and you pay Meta's raw per-conversation price after. Total cost for ~5,000 US-marketing conversations: ~$54 platform + $125 Meta = ~$180/mo. Use only for follow-ups to interested motel owners, not cold blasts.

---

## D. Call-Recording Compliance — State-by-State

US federal law and 38 states are **one-party consent** — only one participant (you, the caller) needs to know about the recording. The remaining states require **all-party consent** ("two-party" is a misnomer when there are more than two people).

### All-party consent states (12 as of 2026)

1. California
2. Connecticut
3. Delaware
4. Florida
5. Illinois (with statutory exceptions for business calls expecting privacy)
6. Maryland
7. Massachusetts
8. Michigan (case law treats it as all-party in practice)
9. Montana
10. New Hampshire
11. Oregon (one-party for phone, all-party for in-person)
12. Pennsylvania
13. Washington

([Recording Law: 2-party consent states](https://www.recordinglaw.com/party-two-party-consent-states/))

Note: Nevada is contested (the courts treat it as one-party in practice, the statute reads like all-party). Treat Nevada as all-party to be safe. That gives a working list of **13 states**.

### Practical rule

You are calling from India to all 50 states. The strictest rule applies, so **announce recording on every call**. Standard script at the start:

> "This call may be recorded for quality and training purposes. Thanks for taking my call — my name is [X] and I'm calling from [Agency]."

If the prospect continues talking, that is implied consent. Keep the recording.

### FTC Telemarketing Sales Rule (TSR) and B2B

- TSR DNC obligations **do not apply** to pure B2B telemarketing calls placed to a clearly identified business landline. ([FTC: B2B exemption](https://www.dnc.com/faq/are-b2b-calls-exempt-tcpa-regulations))
- TSR's **anti-fraud / no-misrepresentation** provisions DO apply to B2B (expanded by the 2024 TSR amendments). You still cannot lie about who you are, what you're selling, or claim a fake affiliation. ([FTC press release 2024](https://www.ftc.gov/news-events/news/press-releases/2024/03/ftc-implements-news-protections-businesses-against-telemarketing-fraud-affirms-protections-against-ai))
- Calls to a small-business owner's **personal cell phone** are *not* B2B-exempt under the FCC's TCPA rule, even if the call is about their business. This is the #1 gotcha for motel-owner outreach because most motel owners use a personal cell as the front desk line.

### Practical compliance for your agency

1. Always announce recording.
2. Always identify yourself, the agency name, and the reason for the call within the first 15 seconds.
3. Maintain a written "do not call" list internal to your CRM and honor any verbal opt-out within 30 days across all agents.
4. Don't use a prerecorded message or ringless voicemail to a cell phone without prior express written consent — that's a TCPA strict-liability landmine ($500-$1,500 per call statutory damages).
5. Keep dial times within 8am-9pm prospect-local-time. This is the federal TSR rule and applies even to B2B in many states.

---

## E. TCPA & Regulatory Specifics — Foreign-Originated Calls

### TCPA follows the called party, not the caller

- TCPA jurisdiction attaches to any call placed **to** a US number, regardless of where the call originates. An Indian operator calling a Texas motel is subject to TCPA.
- US plaintiffs' lawyers routinely sue foreign callers via the US LLC / US agent-of-service that's the public-facing entity. This is one more reason to operate through a Wyoming LLC: it's the sue-able shell, and your personal liability stays insulated (assuming proper corporate hygiene).

### Statutory damages

- $500 per negligent violation
- $1,500 per willful violation (treble)
- Class actions are common. A single TCPA class action against a small caller can hit $1M+.

### DNC scrubbing

- **Federal DNC:** B2B exempt. But scrub anyway — the cost is negligible (~$0.001-$0.003/lookup via DNC.com or contact-center providers) and it protects you from edge cases where a listed motel number is actually the owner's cell.
- **State DNC:** 13 states maintain their own lists (Colorado, Florida, Indiana, Louisiana, Massachusetts, Mississippi, Missouri, Oklahoma, Pennsylvania, Tennessee, Texas, Wisconsin, Wyoming). Some of these state lists apply to B2B. Scrub.
- **Internal DNC:** required regardless. Honor opt-outs across all agents and all numbers for 5 years.

### STIR/SHAKEN for foreign-originated traffic

- A call placed from India through a US-licensed VoIP carrier (JustCall, Twilio, OpenPhone, etc.) using a US DID that they issued gets **A-level attestation**, indistinguishable from a US-originated call. This is the path you want.
- A call placed via VPN through a consumer service like Google Voice or Skype gets **C-level (Gateway)** at best, and is increasingly blocked at the terminating carrier. This is the path you don't want. ([FCC call authentication](https://www.fcc.gov/call-authentication))
- The Foreign Robocall Elimination Act (advancing in Congress in 2026) tightens scrutiny on foreign-originated calls further. Plan around it: stay with a US-licensed BSP, register your Brand, complete Trust Hub verification.

### Carrier-imposed limits to stay under

| Metric | Industry-safe threshold |
|---|---|
| Dials/day per outbound number | < 75 |
| Short-call rate (< 6 sec) | < 30% |
| Complaint rate (FTC/Hiya reports) | < 0.05% |
| Average call duration | > 30 sec |
| Daily unique-numbers-called per dialer | < 250 |

Cross any of these and you'll see "Spam Likely" labels appear on your numbers within 24-72 hours.

---

## F. The Recommended Stack — Step-By-Step

### Phase 0: Pre-launch legal (week 1-6)

1. Form **Wyoming LLC via Doola Starter** — [doola.com](https://www.doola.com) — $297.
2. File for **EIN** — Doola files SS-4 with IRS; expect 4-6 weeks for India-resident founders.
3. Open **Mercury bank account** — [mercury.com](https://www.mercury.com) — free.
4. (Optional but recommended) Buy a **single-page website** ([motelreviewsagency.com](https://carrd.co/) on Carrd, $19/yr) and a Google Workspace email ($7/mo) — both are required for Meta Business Verification and TCR Brand vetting.

### Phase 1: Voice infrastructure (week 4-5, parallel to EIN wait)

1. Sign up for **JustCall Team plan** ($49/seat × 1 = $49/mo, annual) — [justcall.io/pricing](https://justcall.io/pricing).
2. Buy **6 US local numbers** in your top target area codes (motel-cluster states: Texas, California, Florida, New Jersey, Georgia, Pennsylvania). 1 included + 5 extras @ ~$2/mo = $10/mo.
3. Enable **Local Presence dialing** in JustCall Sales Dialer settings — automatic area-code matching.
4. Enable **call recording** at the account level. Set the global pre-call announcement to: *"This call may be recorded for quality and training purposes."*
5. Submit JustCall **Trust Hub Business Profile** with your Wyoming LLC details once EIN arrives. Wait 5-7 business days for A-level STIR/SHAKEN signing.
6. Register **CNAM display name** — "MOTEL REVIEWS" (15 chars) — free through JustCall.

### Phase 2: SMS (week 6-8)

1. In JustCall, navigate to **Compliance → A2P 10DLC**.
2. Register **Standard Brand** with your Wyoming LLC + EIN. Pay $4.
3. Register **Campaign** — use case `Customer Care` or `Marketing`. Pay $15 + $10/mo. Submit 2-3 sample messages.
4. Wait 7-14 business days for approval.
5. Once approved, you can SMS from any of your JustCall US numbers.

### Phase 3: WhatsApp (week 6-8, parallel to SMS)

1. Sign up for **360dialog** — [360dialog.com](https://360dialog.com) — €49/mo plan.
2. Complete **Meta Business Verification** using LLC docs (incorporation cert from Doola + Wyoming registered agent address + LLC website + Mercury bank statement).
3. Apply for **WhatsApp Business Account** (WABA) — Meta approval 24-48 hours.
4. Submit **Display Name** (e.g., "Motel Reviews Agency") — Meta approval 1-3 days.
5. Submit message templates for review (Meta approves marketing/utility templates in 1-24 hours).
6. Once live, you can send WhatsApp-initiated marketing conversations to opted-in US prospects at $0.025/conv.

### Phase 4: Dialer + CRM (week 8-10)

1. **GoHighLevel** (single sub-account, $97/mo) or **HubSpot Free CRM** for contact management.
2. Connect JustCall ↔ GoHighLevel via the native integration (call log + recording auto-sync).
3. Import your motel lead list. Tag by state to drive area-code-matching.
4. Set daily dial cap: 75 dials per number per day.

### Phase 5: Scale to 2-3 dialers (month 2-3)

1. Add JustCall seats at $49/mo each (or upgrade to Pro Plus at $89/mo each for predictive dialing).
2. Add 2-3 more US local numbers per dialer for pool depth.
3. Pay TCR Brand vetting upgrade ($40 one-time) to lift SMS throughput from 2k → 200k/day.

### Monthly cost summary (mature, 1 operator + 2 dialers)

| Item | Monthly |
|---|---|
| JustCall Team × 3 seats | $147 |
| US local numbers × 12 | $24 |
| A2P 10DLC campaign | $10 |
| 360dialog WhatsApp | $54 |
| Meta WhatsApp conversations (~5k/mo) | $125 |
| Doola registered agent (amortized) | $25 |
| Mercury bank | $0 |
| GoHighLevel | $97 |
| **Total** | **~$482/mo** |

For the leanest 1-operator launch month: **JustCall ($49) + 5 extra numbers ($10) + 360dialog ($54) + 10DLC campaign ($10) + Doola amortized ($25) = $148/mo**. Add WhatsApp message volume on top once you start sending.

---

## Key references (verified May 2026)

- [JustCall pricing](https://justcall.io/pricing/)
- [JustCall Local Presence dialing docs](https://help.justcall.io/en/articles/7851731-local-presence-in-sales-dialer)
- [SaaS Labs / JustCall company](https://www.saaslabs.co/justcall)
- [CallHippo pricing](https://callhippo.com/pricing/)
- [CallHippo outbound calling charges](https://callhippo.com/outbound-calling-charges/)
- [OpenPhone/Quo pricing](https://www.quo.com/pricing)
- [OpenPhone India calling rates](https://www.quo.com/rate/india)
- [Telnyx pricing](https://telnyx.com/pricing)
- [VoIP.ms pricing](https://voip.ms/pricing)
- [Twilio A2P 10DLC overview](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc)
- [Twilio A2P 10DLC fees](https://help.twilio.com/articles/1260803965530-What-pricing-and-fees-are-associated-with-the-A2P-10DLC-service-)
- [Twilio CNAM docs](https://www.twilio.com/docs/voice/brand-your-calls-using-cnam)
- [Twilio Branded Calling overview](https://www.twilio.com/docs/voice/branded-calling)
- [360dialog pricing](https://360dialog.com/pricing)
- [Twilio WhatsApp pricing](https://www.twilio.com/en-us/whatsapp/pricing)
- [Stripe Atlas Indian founder guide](https://docs.stripe.com/atlas/indian-founder-guide)
- [Doola country page for India](https://www.firstbase.io/country-specific/india) (comparison)
- [Recording Law: 2-party states 2026](https://www.recordinglaw.com/party-two-party-consent-states/)
- [FCC Call Authentication / STIR/SHAKEN](https://www.fcc.gov/call-authentication)
- [TransUnion: STIR/SHAKEN attestation levels](https://www.transunion.com/blog/what-are-the-attestation-levels-for-stir-shaken)
- [FTC TSR Q&A](https://www.ftc.gov/business-guidance/resources/qa-telemarketers-sellers-about-dnc-provisions-tsr-0)
- [DNC.com: B2B exemption FAQ](https://www.dnc.com/faq/are-b2b-calls-exempt-tcpa-regulations)
- [FTC 2024 TSR updates / B2B fraud rule](https://www.ftc.gov/news-events/news/press-releases/2024/03/ftc-implements-new-protections-businesses-against-telemarketing-fraud-affirms-protections-against-ai)
- [CTIA Branded Calling Best Practices](https://api.ctia.org/wp-content/uploads/2022/11/Branded-Calling-Best-Practices.pdf)
- [Google Voice supported countries](https://knowledge.workspace.google.com/admin/voice/google-voice-and-sip-link-supported-countries)
- [Microsoft Skype retirement notice](https://support.microsoft.com/en-us/skype/how-do-i-dial-an-international-number-from-skype-on-desktop-1c6aa06d-d265-409c-bf97-37245f16b286)
