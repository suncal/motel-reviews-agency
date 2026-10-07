# Client Onboarding — First 7 Days After Signing

The moment a motel owner signs and pays his setup fee, your fulfillment clock starts. This is the bulletproof day-by-day playbook for the first 7 days. Follow it exactly with every new client. No deviations until you've onboarded 10 clients and earned the right to improvise.

**Total time investment per client (week 1):** ~8 hours active work spread over 7 days.

---

## Day 0 — Signing day (~30 min active)

The deal just closed on the phone. Your friend collected the Stripe payment ($497 setup). What happens in the next 30 min:

### Within 5 min of payment
- [ ] **Stripe webhook auto-fires** in your GHL workflow (set up during agency build) → tags the new client → triggers the welcome sequence
- [ ] **Manually send WhatsApp** to the owner (don't rely on automation for the first one — be human):

  *Hindi WhatsApp message:*
  > "Patel sir, welcome to Beacon Reviews family! 🙏 Aapka payment receive ho gaya hai. Main aapko ek welcome email bhi bhej raha hoon abhi. Kal subah 10am EST (aapke time pe [insert their local time]) hum kickoff call karenge — Calendly link yeh raha: [link]. Koi sawal ho to direct WhatsApp kar sakte ho. Excited to work with you!"

### Within 30 min
- [ ] **Send welcome email** with PDF "Beacon Reviews Onboarding Guide" attached (one-page overview of what happens next 7 days)
- [ ] **Send MSA via Dropbox Sign** — your service agreement, ready to e-sign
- [ ] **Add client to GHL pipeline** at "Onboarding — Day 0" stage
- [ ] **Add client to your private Notion workspace** with their property details
- [ ] **Calendar block 30 min for Day 1 kickoff call** — confirm time with them via WhatsApp
- [ ] **Update dashboard:** mark deal as Closed Won, add MRR + setup fee to Money tab

### Critical: don't drop the energy here
First 24 hours after signing is when buyer's remorse hits hardest. Stay responsive — reply to their WhatsApp messages within 1 hour during their business hours.

---

## Day 1 — Kickoff call (~45 min active)

The 30-minute kickoff call in Hindi. This is THE most important call of the relationship. Get it right.

### Pre-call (5 min)
- [ ] Review their Google Business Profile in detail: current rating, review count, recent negative reviews, photos, hours
- [ ] Pull screenshots of their top 3 competitors' Google listings — same area, same star count, same room range
- [ ] Note their current ADR / room count / occupancy if known (from their cold-call notes)

### The 30-min call structure

**Block 1: Rapport (3 min) — Hindi only**
- "Patel sir, namaste. Kaise hain aap?"
- "Family kaisi hai?"
- Find common ground — village, college, common vendor. Build trust before talking shop.

**Block 2: Property deep-dive (8 min)**
Ask in Hindi:
- "Aapke pass total kitne rooms hain?"
- "Average daily rate kya hai aapke rooms ka?"
- "Aapki main booking sources kya hai — Booking, Expedia, ya direct?"
- "Average occupancy season-by-season kya rehta hai?"
- "Kaun sa system use karte ho front desk pe — paper, Excel, ya koi software?" (THIS IS CRITICAL — determines data path A/B/C)
- "Aapke nearest competitors kaun hai? Unke ratings kya hai?"

Write everything in your Notion workspace.

**Block 3: Front-desk system (5 min)**
Based on their answer to "what system":
- If they have a real PMS (Cloudbeds, Mews, eZee, Innroad) → say "Perfect, hum API se connect karenge, automatic data flow hoga"
- If they have basic PMS with CSV export (Choice Advantage, ResNexus, RoomMaster) → "Hum daily export setup karenge, aap front desk se ek button click karega"
- If they have Excel / paper / no system → "Main aapko ek 30-second guest entry form du​nga jo front desk staff use karega, easy hai"

**Block 4: Google Business Profile access (5 min)** 
This is the technical step. Walk them through it on the call:
1. "Aap apne phone pe Google Business Profile app open kariye"
2. "Settings → Managers → Add manager"
3. "Mera email type kariye: [your agency email]"
4. "Role: 'Manager' select kariye, Owner nahi — Owner aap rahenge"
5. "Send invitation"

You'll get an email invitation. Accept it from their GBP account.

If they can't do this on the call, send them a 2-min Loom video walking through it, and book a 10-min follow-up call within 24 hours specifically to get this done.

**Block 5: Expectations setting (5 min)**
"Patel sir, yeh next 60 days kaise rahega:"
- "Pehla week setup — aaj se 7 din mein system live ho jayega"
- "Week 2 se review request SMS jaayega har checkout ke baad guest ko"
- "Week 3-4 mein pehle 5-10 reviews aane chalu honge"
- "60 din mein aapki rating [current] se [target +1 point] tak ja sakti hai"
- "Har Wednesday main aapko WhatsApp pe update bhejunga"
- "1st of every month, full monthly report milega PDF mein"
- "Kabhi bhi koi sawal ho, mujhe WhatsApp kariye"

**Block 6: Wrap-up (4 min)**
- Confirm they got the welcome email
- Confirm MSA is signed (if not, walk them through Dropbox Sign on the call)
- Schedule the **Front Desk Training Call** for Day 4 (need 15 min with whoever works the front desk during day shifts)

### Post-call (10 min)
- [ ] Update Notion with everything they said
- [ ] Verify GBP manager access came through (check your email)
- [ ] WhatsApp summary message to client:

  > "Sir, bahut achhi call thi. Quick recap:
  > - Mein aapke GBP ka manager ban gaya
  > - Day 4 ko 10am front desk training call (Manisha ji ke saath)
  > - Day 7 tak system live ho jayega
  > - Koi bhi sawal ho, message kariye anytime"

---

## Day 2 — GHL sub-account setup (~2 hours)

This is the bulk of the technical setup. Do it all in one focused block.

### Tasks
- [ ] **Create new sub-account** in your GHL agency dashboard: Name = [Motel Name], Industry = Hospitality, Timezone = client's local
- [ ] **Import your reviews snapshot** (the one we'll buy via the GHL snapshot research agent's recommendation)
- [ ] **Configure client-specific data:**
  - Motel name
  - Address
  - Owner name + WhatsApp
  - Email
  - Brand colors (ask via WhatsApp if you don't have them yet)
  - Logo (request via WhatsApp; in the meantime, use a clean text logo)
- [ ] **Connect their Google Business Profile** via the GHL integration (you have manager access from Day 1)
  - In GHL: Settings → Integrations → Google Business Profile → "Connect"
  - Authorize using the agency Google account (the one you added as manager to their GBP)
  - Confirm reviews are pulling in
- [ ] **Register their phone number for A2P 10DLC** through JustCall or directly via Twilio:
  - $4 one-time Brand fee
  - $15 Campaign fee
  - $10/mo recurring per number
  - Submission takes 5-10 days to approve — start NOW so it's ready by Day 7

### Important: don't customize the workflows yet
Just import the snapshot, set up the basic config. Workflow customization is Day 3.

---

## Day 3 — Workflow customization + soft-routing landing page (~2 hours)

> **⚠️ CRITICAL — read [operations/review-compliance.md](review-compliance.md) BEFORE this step.**
> Google's April 2026 policy and the FTC Consumer Review Rule (Oct 2024, $53,088/violation) explicitly ban rating-gating — i.e. routing 4-5 star ratings to Google and 1-3 star to a private form. **Every GHL snapshot on the market ships with the illegal workflow as default.** Your first job is to OVERRIDE it.

### Tasks
- [ ] **Override the snapshot's default rating-gate workflow.** Delete the "if rating >= 4 then Google, else private" branching logic entirely. We do not collect a rating BEFORE the routing choice.

- [ ] **Customize the post-checkout SMS template** (sentiment-blind — same message for every guest):
  > "Hi {{contact.first_name}}, thanks for staying at {{location.name}}! We'd love to hear about your stay — share publicly or privately, your choice: {{custom_values.review_link}}"

  Send time: **18 hours after checkout**. Test by sending to your own phone first.

- [ ] **Build the SOFT-ROUTING landing page** (the URL in the SMS):
  - Branded header: client's motel name + your "Powered by Beacon Reviews" small footer
  - Single line of copy: *"How was your stay at [Motel Name]? We'd love your feedback."*
  - **Two buttons side-by-side, same size, same color, same visual weight:**
    1. **"Share publicly on Google ⭐"** → links directly to motel's Google Business Profile review URL
    2. **"Send private feedback to the owner"** → opens private form
  - **No star rating asked before the buttons.** Guest picks freely.
  - Optional small footer: *"Both options matter. Your honest feedback helps us improve."*

- [ ] **Set up the private feedback form** (only triggered if guest clicks "Send private feedback"):
  - Single text-area: "What can we do better?"
  - Optional checkbox: "I'm okay if [Motel Name] follows up to make it right"
  - Auto-emails the owner with the response
  - Stores in GHL for trend analysis

- [ ] **End-to-end test the workflow on YOUR phone:**
  - Add a fake guest record with your phone number
  - Trigger the workflow
  - Receive the SMS at the 18-hour mark
  - Open the landing page → confirm both buttons render with equal weight
  - Test clicking "Share publicly" → confirm it goes to the motel's actual Google review URL
  - Test clicking "Send private feedback" → confirm form loads + owner gets the email
  - Confirm there's NO rating collection step before the choice

If any step still has rating-gating logic, fix it now. **Deploying with rating-gating is the single fastest way to lose your client's GBP listing and trigger an FTC investigation against both of you.**

---

## Day 4 — Front desk training call (~30 min total, 15 min on call)

The most overlooked step. If the front desk doesn't capture guest data, the whole system fails.

### Pre-call (10 min)
- [ ] Send the front-desk training video (Loom recording, 4 min, in Hindi) to the owner with: "Patel sir, Manisha ji ko yeh video bhejiye 10 min pehle"
- [ ] Print and email a one-page laminated cheat-sheet:
  > "Beacon Reviews — Front Desk Quick Guide
  > 1. At check-in, ask guest: 'Cell phone for any service updates?'
  > 2. Enter guest name + phone + room number in the tablet form: [URL]
  > 3. That's it. System does the rest after checkout."

### On the call (15 min) — in Hindi
- "Manisha ji, ek minute. Yeh system kaise kaam karta hai woh dikhata hoon."
- Screen share or guide her over the phone:
  1. Open the form URL: `https://[motelname].beaconreviews.app/checkin`
  2. Show the 4 fields (name, phone, room, checkout date)
  3. Submit a test entry together
  4. Confirm it lands in GHL
- "Yeh form har check-in pe bharna hai. 30 second lagta hai. Koi sawal?"
- Handle her questions in Hindi — usually about whether guests will mind sharing their number, or whether this replaces the paper log
- Reassure: "Phone number sirf service updates ke liye hai, marketing ke liye nahi. Paper log alag rakhiye, kuch nahi badalna."

### Post-call (5 min)
- [ ] WhatsApp the owner: "Sir, Manisha ji ko training ho gayi. Form working hai. Kal se hum live ho jayenge."

---

## Day 5 — System goes live (~30 min)

Today the first real review request SMS goes out to actual recently-checked-out guests.

### Tasks
- [ ] **Confirm A2P 10DLC status** — if still pending, hold on going live until approved (using non-compliant numbers triggers carrier blocks)
- [ ] **Pull the first batch of recently checked-out guests:**
  - If they have a PMS: get the export for the past 7 days
  - If they're using the front-desk form: pull whoever's been added since Day 4
  - Filter: only guests with phone numbers, only US-based numbers, only check-outs within last 5 days
- [ ] **Trigger the workflow for this batch** — first SMS goes out
- [ ] **Monitor closely for the next 2 hours:**
  - Delivery rate (should be >95%)
  - Bounce rate (should be <2%)
  - Any error logs in GHL
- [ ] **Quick WhatsApp to owner:**
  > "Sir, system live ho gaya! Aaj 12 guests ko first SMS gaya. Update kal subah bhejunga."

---

## Day 6 — First responses come in (~45 min)

### Tasks
- [ ] **Review GHL response analytics:**
  - How many guests clicked the rating link?
  - How many submitted ratings?
  - Distribution of ratings (1-5)
- [ ] **Check Google Business Profile** — any new reviews from the SMS push? (Should see 1-3 within 24-48 hours)
- [ ] **Respond to any new Google reviews** using your template responses (5-star = warm, 1-star = professional)
- [ ] **If conversion is low (<10% click rate):**
  - Test sending at a different time (4 hours after checkout vs 24 hours)
  - Tweak SMS copy slightly (e.g., add the owner's first name)
- [ ] **Forward any private negative feedback to the owner** via WhatsApp with context:
  > "Sir, ek guest ne private feedback diya — '[issue]'. Public review nahi hua, but aapke information ke liye."

---

## Day 7 — First results report (~30 min)

End of week 1. Time to demonstrate momentum.

### Tasks
- [ ] **Generate a "Week 1 Results" PDF** with:
  - # of SMS sent
  - # of guests clicked
  - # of new Google reviews (count + screenshot)
  - Rating change so far (will be tiny but might be a tick)
  - Private feedback intercepted (count, no names)
  - "Next steps" for week 2-4

- [ ] **Send via WhatsApp** with a personal note in Hindi:
  > "Patel sir, pehle hafte ka result attached hai. Pehla week mein bhi result aana chalu ho gaya 🎉 Next 30 days mein bigger lift expected. Koi sawal ho to message kariye."

- [ ] **Schedule the Day 30 calibration call** — confirm a 15-min slot 3 weeks from now
- [ ] **Update your CRM:** mark this client's onboarding as Complete → move to "Active" pipeline stage
- [ ] **Activate the recurring tasks:**
  - Daily: 5-min review of their GHL alerts
  - Weekly Wednesday: WhatsApp mid-week screenshot
  - Monthly 1st: Full monthly report
  - Monthly 15th: Calibration call

---

## After Day 7 — Recurring rhythm per client

Once the client is onboarded, ongoing workload drops to:

| Frequency | Task | Time |
|---|---|---|
| Daily | Check GHL alerts, respond to new Google reviews | 2-3 min |
| Mondays | Verify data still flowing (any drops?) | 1 min |
| Wednesdays | WhatsApp mid-week screenshot of new reviews | 3 min |
| 1st of month | Generate + send monthly report PDF | 5 min (mostly auto) |
| 15th of month | 15-min Hindi calibration call | 15 min |

**Total: ~5 hours/week of ongoing work to maintain 10 clients.**

---

## The 4 things that go wrong (and how to handle)

### "The front desk isn't entering guests in the form"
- Don't lecture. Send the owner a polite WhatsApp: "Sir, dekh raha hoon ki pichhle 3 din se koi entries nahi aaye form mein. Manisha ji ko ek refresher call de du?"
- Offer to retrain or schedule the front desk to do batch entries at end-of-day instead of per-check-in
- If after 2 refreshers, still no data: escalate to owner with the data ROI math — "Sir, aapka system data ke bina kaam nahi karega. Hum kaise help kar sakte hain?"

### "Their PMS export broke / changed format"
- Manually pull data for the week while you figure out the new format
- Update your Zapier integration on your end
- Test with a sample export before the next batch

### "A 1-star review still went to Google public"
- Don't panic. Even with the smart-routing form, occasionally a frustrated guest will go directly to Google.
- Reply professionally within 24 hours
- Reach out to the guest privately (if you can find them) and offer resolution
- Send the owner a WhatsApp: "Sir, ek 1-star public review aaya. Reply kar diya hai professionally. Guest ko privately bhi reach out kiya. Yeh kabhi-kabhi hota hai — hum still 80%+ negative ko private capture kar rahe hain."

### "The client wants to cancel after month 2"
- Don't fight on the phone. Schedule a 15-min Hindi call.
- Lead with curiosity, not defensiveness: "Sir, kya theek se kaam nahi kar raha jo aap cancel karna chahte hain?"
- Pull up the actual data: reviews count, rating trend, negative feedback intercepted
- If they're churning over $499/mo — offer to drop to $399 for 3 months + the upsell of direct-booking funnel (+$300/mo). Same net revenue, different framing.
- If they're churning because they don't see results: extend the money-back guarantee one more month, OR refund and learn what went wrong.

---

## Files this references

- [dashboard.html](../dashboard.html) — for tracking pipeline + deals + KPIs during onboarding
- [scripts/sales-playbook.md](../scripts/sales-playbook.md) — for the Hindi message templates
- [operations/review-compliance.md](review-compliance.md) — for the smart-routing form copy (Google-compliant)
- [operations/ghl-snapshot-recommendation.md](ghl-snapshot-recommendation.md) — for the specific snapshot to import
- [operations/tech-stack-setup.md](tech-stack-setup.md) — for the underlying tools

This checklist is the OPERATIONAL backbone. Sales gets you the client. This keeps them.
