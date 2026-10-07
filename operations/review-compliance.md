# Review Compliance Playbook — 2026

**Audience:** Motel reputation agency owner. We sell a $499/mo service to independent US motels.
**Question:** Is the SMS rating gate (1–3 → private form, 4–5 → Google) still viable? If not, what is?
**Verdict:** No. The classic "smart-routing" gate is now a meaningful suspension risk in 2026. The defensible model is "soft routing" — same invitation to everyone, both paths visible on one page, sentiment-blind.

This document quotes the actual policies, summarizes 2025–26 enforcement, and ends with the exact wording our agency will use.

---

## A. Google's policy in 2026 — what is actually prohibited

### A.1 The primary policy page

The governing document is **Google Maps Prohibited & Restricted Content** at `https://support.google.com/contributionpolicy/answer/7400114` and the companion **Incentivized or Biased Reviews** page at `https://support.google.com/contributionpolicy/answer/16597558`. Verbatim from the policy text returned by Google:

> "Discourage or prohibit negative reviews, or selectively solicit positive reviews."

> "Offer incentives — such as payment, discounts, free goods and/or services — in exchange for posting any review or revision or removal of a negative review."

> "Merchants should not require or pressure users to leave ratings or write reviews while on the premises."

> "We do allow merchants to: Solicit or encourage the posting of content that does represent a genuine experience, without offering incentives."

The phrase **"selectively solicit positive reviews"** is the operative ban. The "smart-routing" SMS flow (1–3 stars → private form; 4–5 → Google) is the textbook example of selective solicitation. Every compliance article I sampled — SEOlogist, SocialPilot, Three Chapter Media, ALM Corp, Launchcodex — calls this out by name as a violation.

### A.2 What changed in April 2026

Two consecutive policy updates landed in April 2026 (sources: Launchcodex, Three Chapter Media, ReviewBuzz, FSAgency, New Frame Digital). The headline additions:

1. **Staff-name solicitation banned.** Asking the customer to mention an employee by name (or any specific content) is now an explicit violation. "Tell us how Alex did!" is dead.
2. **On-premises kiosk reviews banned.** Tablets at checkout, "scan and review before you leave" QR walls, in-room iPads that solicit reviews — all prohibited.
3. **Staff review quotas banned.** The merchant cannot instruct staff to hit a number ("ten 5-stars a week"). This catches the agency that pays its motel-side coordinator per review pulled.
4. **Review gating remains banned and is now actively enforced** rather than passively listed in policy.

Note: I could not independently verify the exact April 16 / April 17 dates by fetching the Google support page directly — Google's support center redirected to navigation chrome rather than the policy text when fetched. The dates come from third-party SEO blogs (Launchcodex, Three Chapter Media) which I'd label as **likely accurate but secondary sourcing**.

### A.3 Penalties — the escalation ladder

Drawing from the policy page, the ALM Corp / Launchcodex enforcement writeups, and Sterling Sky's suspension playbook, the documented penalty stack is:

1. **Silent removal.** Individual offending reviews are deleted. No notification.
2. **Posting freeze.** Temporary loss of the ability to receive new reviews on the profile — existing ones remain, but the funnel is closed for a period.
3. **Bulk historical wipe.** All historical reviews on the profile are unpublished while Google re-evaluates. ALM Corp documents one restaurant losing 76 reviews spanning four years in a single action.
4. **Public warning banner.** A consumer-facing label appears on the GBP saying "fake reviews were detected and removed." This is the reputational worst case — every searcher sees it.
5. **Profile suspension.** Soft (listing visible but unverified) or hard (removed from Maps and local search entirely). Sterling Sky tracks this as the standard endgame for repeat violators.

Google's 2025 Trust and Safety Report (cited in multiple sources) reports **292 million reviews removed in 2025 out of ~1 billion submitted**. Review-deletion rates reportedly rose ~600% Jan–Jul 2025 once Gemini was integrated into review moderation.

### A.4 The federal layer — FTC Consumer Review Rule

This sits on top of Google's TOS and adds real financial risk.

- **Rule:** Federal Trade Commission 16 CFR Part 465, finalized August 2024, effective **October 21, 2024**. Source: `https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials`.
- **What it prohibits relevant to us:** review suppression, buying positive or negative reviews, insider reviews, incentivizing reviews to express a particular sentiment.
- **Civil penalty:** up to **$53,088 per violation**.
- **Enforcement started:** December 22, 2025 — FTC issued the first round of warning letters to 10 unidentified companies (Covington's Inside Privacy alert).

The FTC's "review suppression" provision is broad enough to capture the 1–3 star gate. If the private form is being used to deflect what would otherwise have been a public 1-star review, that is suppression of a negative review under the rule. We treat the FTC angle as a real risk, not theoretical.

---

## B. Enforcement in practice, 2025–2026

### B.1 How aggressive is Google?

Aggressive, and the curve steepened in mid-2025. Evidence:

- **Volume of removals:** 292M reviews removed in 2025 (Google's own number).
- **Detection method:** AI-driven (Gemini) plus statistical pattern matching, not primarily competitor complaints anymore. ALM Corp lists the detection signals as volume anomalies, generic short-language reviews ("good", "great"), selective solicitation patterns, staff name mentions, and incentive language inside the review body.
- **Industry skew:** Medical and home-services see the heaviest 5-star removal rates; restaurants see broader removal across all star bands. Hospitality sits in the middle.
- **Case studies cited in reporting:** Multiple business owners reporting 20–100 review wipes in a single sweep; the restaurant losing 76 reviews over four years is the most-cited example.

### B.2 Is anyone still doing it openly?

Yes, but the marketing language has shifted. GoHighLevel still ships templates with "rating gate" workflows, and there is a documented June 2025 Google Business Profile Community thread (`support.google.com/business/thread/349166900`) about GHL-managed profiles being suspended after automated review posting. I could not extract the original-post detail directly — the thread page returned only navigation chrome — but the existence of the thread and its title are confirmed.

The agencies still selling it openly fall into three camps:
1. **Re-branders** — calling the same 1-to-5-star gate a "feedback survey" or "guest pulse check" while keeping the conditional redirect. Same risk.
2. **NPS-routers** — using Net Promoter Score (0–10) and routing detractors (0–6) to a private channel. Functionally identical to star gating. Still violates the policy, just dressed up.
3. **Soft-routers** — surveys that present both options to all guests. This is the defensible model. Section C.

### B.3 Algorithmic vs manual detection

Both, but the balance flipped in 2025. The current pipeline appears to be:

- **AI screen at submission** — Gemini checks review text for templated language, incentive references, staff names, and the submitting account's pattern across other listings.
- **Statistical pattern flagging** — sudden spikes in 5-star count, abnormal positive/negative ratio relative to category baseline, geographic IP clustering, identical device fingerprints.
- **Competitor / consumer reporting** — still exists, still triggers human review, but it's now the slower path.

The practical implication: a 30-room motel that historically averaged a 3.6-star rating and suddenly produces 40 consecutive 5-star reviews over six weeks **will** trip the pattern detector. The 1–3 → private gate guarantees this exact signature.

---

## C. The compliant alternative — "soft routing"

### C.1 What it is

A single landing page invites every guest to share feedback. The page presents **two coequal options visible together**:

- **"Share thoughts privately with the owner"** — opens internal form
- **"Post a public review on Google / TripAdvisor / etc."** — opens the GBP review link

The guest picks. No star rating is collected first. No conditional redirect based on sentiment. No filter. Both options are equally prominent (same font size, same button weight, same vertical position).

### C.2 Why this survives

It satisfies the verbatim policy language across platforms:

- **Google:** does not "selectively solicit positive reviews" — the same invitation goes to everyone with the same options.
- **TripAdvisor** (`tripadvisor.com/Trust-lvBd3L1aU38Y.html`): *"If any survey or external website ultimately directs users to submit a review on Tripadvisor, the user interface and experience for submitting positive and negative reviews must be identical."* Same page, same buttons, identical UI = compliant.
- **Trustpilot** (`corporate.trustpilot.com/legal/for-businesses/guidelines-for-businesses/feb-2026`): *"Businesses must invite consistently and fairly — meaning they must invite everyone in the same way, regardless of whether they had a positive or negative experience."* Soft routing matches this.
- **Yelp** (separate problem — Yelp's `Don't Ask for Reviews` policy bans solicitation entirely; we exclude Yelp from any solicitation flow).
- **FTC Rule:** no suppression of negative reviews because both paths lead to publicly possible reviews; the private path is offered as a service-recovery option, not as a deflector.

### C.3 Who is doing this defensibly

Of the platforms surveyed:

- **GuestRevu, Revinate, TrustYou** — operate on the post-stay-survey-first model where the survey is internal and review prompts are pushed separately to all guests. Internal survey data feeds operational improvement; review prompts are not gated by survey response. None of these vendors documents a sentiment-based redirect to public review sites.
- **Birdeye** — Birdeye's hotel article (`birdeye.com/blog/hotel-review-management/`) explicitly recommends timing-based requests, not sentiment-based filtering. They suggest branching logic *inside the survey* to gather more context on negative responses, but they don't gate the public-review CTA.
- **Podium, NiceJob** — neither explicitly disavows gating in marketing, but their compliant templates send the review request to all customers without pre-screening. **Caveat:** NiceJob's own "How to ask for a review" page (`get.nicejob.com/resources/how-to-ask-for-a-review`) lists an example template that offers a discount in exchange for a review — that template violates current Google policy. Do not copy NiceJob's Template 3.
- **GuestTouch** — recommends real-time in-stay pulse checks (catch the problem before checkout via SMS during the stay), then a clean review invitation after checkout. This is the model I most recommend for motels because it captures dissatisfaction privately *during* the stay, before the checkout-time invitation is sent.

### C.4 Signals that matter to Google

From the enforcement writeups, these are the metrics that move detection probability:

- **Ratio of positive to negative public reviews vs category baseline.** A motel category averages roughly 3.8–4.2 stars. If we push a client from 3.6 to 4.9 in 60 days, that's a flag.
- **Velocity.** Sustained 5–10 reviews/week from a 30-room motel that historically got 1/month is suspicious.
- **Reviewer account quality.** New Google accounts with one review each = flag. Local-guide accounts with diverse history = safe.
- **Content templating.** Reviews that share phrases ("clean room, friendly staff, would stay again") trigger Gemini's templating detector.
- **Device / IP clustering.** Reviews posted from inside the property Wi-Fi (kiosk pattern) get flagged.
- **Reverse drop-off.** A property that historically attracts ~10% 1-star reviews and suddenly attracts ~0% is a classic gating signature.

Operationally we target: keep new-review velocity below 3x historical baseline, keep the 5-star share below 75% of new reviews (some 3s and 4s look natural), spread review posts across days and devices.

---

## D. Booking.com and Expedia — why this matters more now

### D.1 Booking.com 2025–2026 recency shift

Source: Shiji Insights, MARA Solutions, Hospitality Net (`insights.shijigroup.com/booking-coms-new-review-scoring-explained-what-hoteliers-need-to-know-in-2026/`).

Booking.com moved from a flat 36-month average to a **36-month recency-weighted model**, more closely aligned with the industry-standard Guest Review Index. Concrete operational facts:

- The window is still 36 months but weighting inside it is uneven.
- Reviews from the **last 3 months** carry the highest weight.
- A review from the last 3 months is reported to influence the score **2–3x more** than a review from 24 months ago (Shiji's number; treat as directional rather than exact).
- Reviews 24–36 months old contribute "minimal" influence.

One case study Shiji cites: a hotel moved from 8.8 to 9.3 in eight months post-transition. Under the old flat-average model this was effectively impossible.

**Operational implication for our agency:** the value of consistent fresh reviews just went up. A motel that lets review cadence lapse for two quarters now actively damages its ranking, where previously a four-year-old reputation buffered against a temporary dip. This is the strongest sales hook for the agency offer in 2026 — not "we'll boost your score" (gating language) but "we'll keep your score current under Booking.com's new weighting."

### D.2 Expedia / Hotels.com

No public algorithm announcement at the same scale as Booking's 2025 shift. Existing Expedia documentation (per Smart Order, Hotelogix) already factored recency, volume, and management response rate into the Guest Experience Score. The 2025–2026 Expedia movement is more about AI customer-service integration than ranking math. **I'd label any specific Expedia weighting numbers as uncertain.**

### D.3 Google Hotel

Google Hotel pulls from the same GBP review pool as local search. The April 2026 GBP review policy changes apply identically. No separate hotel-specific algorithm announcement found in this research.

---

## E. Reputable alternatives to the gate

For each option, the touchpoint sequence:

### E.1 Volume-only (blast)

Send the same review request to every guest 18–36 hours post-checkout. Math: even a 4.3-star motel converts maybe 5–8% of guests to public reviewers, so volume alone produces a roughly representative distribution. Pros: lowest compliance risk. Cons: leaves money on the table when a fixable complaint becomes a public 1-star.

**Sequence:** SMS at 24h after checkout → 1 email at 5 days if no response → stop.

### E.2 Service recovery (in-stay capture)

GuestTouch model. Identify dissatisfaction during the stay so the manager can recover before checkout. Only then send a review invitation post-checkout.

**Sequence:** SMS day 1 of stay ("How is everything?") → manager intervention if negative → standard review invitation 24h post-checkout to all guests regardless of in-stay feedback.

This is the strongest model. Compliant because the post-checkout invitation is identical for every guest. It works because the dissatisfied guest's complaint was handled in person while they were still on property.

### E.3 Survey-first (decoupled)

Send a generic post-stay survey ("Tell us how we did, 5 questions, 90 seconds") with no review link. Use the data internally. Separately, on a different cadence, send review invitations to all guests.

**Sequence:** Survey at 12h post-checkout → review invitation at 72h post-checkout to all guests → no logic linking the two.

Compliant. Works for motels with strong operational discipline that will actually use the survey data.

### E.4 Multi-platform spread

Rotate which platform each guest's invitation prioritizes — Google for one guest, TripAdvisor for the next, Facebook for a third. The motel's GBP doesn't show a suspicious uniform spike, and the reputation profile diversifies.

**Sequence:** Single SMS that links to a landing page; landing page randomizes which platform is featured first while keeping all options visible.

Compliant if the platform selection is random or round-robin, not sentiment-based.

---

## F. The agency recommendation

**Adopt option E.2 (service recovery) layered with E.4 (multi-platform spread). Drop any star-rating gate immediately on every client account.**

Here is the exact wording we will deploy.

### F.1 In-stay SMS (sent at 9:00 AM local on day 1 of stay)

> Hi [first name], welcome to [Motel Name]. I'm [Manager First Name]. If anything isn't right — room, Wi-Fi, anything — just reply to this text and I'll fix it personally. Enjoy your stay. Reply STOP to opt out.

Purpose: capture dissatisfaction privately during the stay so problems are resolved on property, not in a public review. No review CTA in this message.

### F.2 Post-checkout SMS (sent 18–24 hours after checkout time)

> Hi [first name], thanks for staying at [Motel Name]. We'd love your honest feedback — good or bad. Tap here: [shortlink]. Reply STOP to opt out.

Three things to note: (1) "honest feedback — good or bad" is the explicit fairness signal; (2) no star rating mentioned; (3) sent to **every guest** regardless of in-stay messages or NPS.

### F.3 Landing page copy (the shortlink lands here)

```
Thank you for staying at [Motel Name].

Your feedback helps us improve and helps other travelers
choose the right place to stay.

Please pick whichever feels right:

[ Post a public review on Google → ]   button to GBP write-review URL
[ Post a public review on TripAdvisor → ]   button to TripAdvisor write-review URL
[ Post a public review on Booking.com → ]   button to Booking review URL (if applicable)
[ Share feedback privately with the owner → ]   button to internal form

All options are voluntary. Whatever you choose, thank you.
```

Critical UI rules: all four buttons identical in size, color, and vertical order. The private-feedback button is **last**, not first, so the design does not nudge unhappy guests toward it. No star rating, slider, smiley face, or sentiment selector appears anywhere on the page. The choice of platform (Google / TA / Booking) rotates per guest via deterministic hash so no single platform dominates.

### F.4 Private feedback form (if guest clicks the last button)

Single open-text field plus optional contact checkbox:

> Tell us what we should know. We read every message and the owner responds personally if you'd like a reply.
>
> [ ] I'd like the owner to follow up with me

No claim, implicit or explicit, that this replaces a public review. The form does not say "instead of posting publicly" or "this won't go on Google." That kind of language is what makes the gate legally indefensible under both Google's policy and the FTC rule.

### F.5 Disclaimers / soft text

On the landing page footer:

> [Motel Name] does not offer discounts, gifts, or any incentive in exchange for reviews. We invite every guest, whether their stay was great or not, to share honest feedback.

That sentence does two jobs: (a) it documents incentive-free solicitation in case of a Google policy review, and (b) it satisfies the FTC's spirit-of-the-rule on transparency.

### F.6 Cadence guardrails

- No more than **one** review-invitation touch per guest per stay (one SMS + the landing page; no email follow-up to the same guest).
- Cap new reviews per property at **3x the property's trailing 12-month monthly average**. If a 30-room motel averaged 4 reviews/month, cap at 12/month in agency-driven volume.
- Stagger sends across the day; avoid 9 AM Monday bursts that look automated.
- Never send from a kiosk, never collect a review on the property Wi-Fi, never have staff watch a guest type a review.

### F.7 What we tell the motel owner during onboarding

> "We're not running a 5-star filter. We invite every guest. The math still works because most guests don't bother to review at all — the ones who do, lean positive, and the negative ones who would have posted publicly will mostly choose the private path on their own. That keeps your Google profile clean, your TripAdvisor badge safe, and your Booking.com score current under the new recency weighting."

That conversation handles the inevitable "but the other agency I talked to said they could guarantee only 5-stars get posted" objection. The honest answer: that agency will work for six months and then lose the client's listing.

---

## Sources

Policy primary:
- Google Maps Prohibited & Restricted Content — `https://support.google.com/contributionpolicy/answer/7400114`
- Google Maps Incentivized or Biased Reviews — `https://support.google.com/contributionpolicy/answer/16597558`
- Google Business Profile policy overview — `https://support.google.com/business/answer/13762416`
- Google Maps UGC policy hub — `https://support.google.com/contributionpolicy/answer/7422880`
- TripAdvisor Trust & Safety Review Posting Guidelines — `https://www.tripadvisor.com/Trust-lvBd3L1aU38Y.html`
- Trustpilot Guidelines for Businesses (Feb 2026) — `https://corporate.trustpilot.com/legal/for-businesses/guidelines-for-businesses/feb-2026`
- Yelp "Don't Ask for Reviews" — `https://www.yelp-support.com/article/Don-t-Ask-for-Reviews`
- FTC Final Rule on Fake Reviews — `https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials`

Policy analysis / enforcement reporting (secondary, dated 2026):
- Launchcodex — `https://launchcodex.com/blog/seo-geo-ai/google-business-profile-review-policy-update/`
- Three Chapter Media — `https://www.threechaptermedia.com/blog/google-review-policy-2026`
- ALM Corp — `https://almcorp.com/blog/google-reviews-being-removed-2026-what-business-owners-need-to-know/`
- SEOlogist — `https://www.seologist.com/knowledge-sharing/what-is-review-gating-and-why-does-it-violate-googles-review-policies/`
- SocialPilot — `https://www.socialpilot.co/reviews/blogs/review-gating`
- Sterling Sky suspension playbook — `https://www.sterlingsky.ca/top-reasons-google-my-business-suspended-your-listing/`
- Covington Inside Privacy on FTC warning letters — `https://www.insideprivacy.com/united-states/federal-trade-commission/ftc-issues-warning-letters-for-violations-of-consumer-reviews-rule/`

OTA changes:
- Shiji Insights on Booking.com 2026 — `https://insights.shijigroup.com/booking-coms-new-review-scoring-explained-what-hoteliers-need-to-know-in-2026/`
- MARA Solutions on Booking.com 2025 — `https://www.mara-solutions.com/post/booking-review-score-update-2025`
- Revenue Hub — `https://revenue-hub.com/what-is-the-booking-com-2025-review-score-update/`

Hospitality alternatives:
- GuestTouch — `https://www.guesttouch.com/blog/one-strategy-to-prevent-many-negative-hotel-reviews`
- Birdeye hotel review management — `https://birdeye.com/blog/hotel-review-management/`
- NiceJob review-request templates (note: their Template 3 violates current policy) — `https://get.nicejob.com/resources/how-to-ask-for-a-review`

---

## Uncertainty log

Items I could not directly verify and would re-check before publishing this externally:

1. **Exact April 16 / April 17 2026 dates of Google's policy update.** Sourced from secondary SEO blogs. Google's own change log was not directly retrievable in this session.
2. **The 2–3x weighting figure for recent Booking.com reviews.** Shiji's number, presented without showing the underlying formula. Directionally correct; treat the multiplier as an estimate, not a contract.
3. **The exact escalation order of Google's penalty ladder.** Compiled from multiple sources that mostly agree but do not all order the steps identically.
4. **The June 2025 GoHighLevel suspension thread (`support.google.com/business/thread/349166900`).** Confirmed exists with that title; original-post detail not directly extractable from the page returned.
5. **Specific Expedia / Hotels.com algorithm changes 2025–2026.** No clear public announcement found; do not present any specific Expedia weighting numbers to a client.
