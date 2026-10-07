# Twilio Voice Setup — In-Browser Calling from the Dashboard

This guide gets the dashboard's in-browser dialer working end-to-end. After this, your friend clicks any phone number in the Leads table and a real phone rings on the motel owner's end — no system phone app, no copy-paste. After every call ends, a disposition modal pops up and auto-logs the call to the Calls tab.

**Time required:** 25-30 minutes one-time setup.
**Cost:** $1.15/mo per Twilio number + $0.013/min outbound to US + $0 for the Functions (free tier covers years of usage).
**Trial credit:** Twilio gives ~$20 free trial credit when you sign up — covers ~1,500 minutes of outbound testing before you have to fund the account.

---

## Prerequisites

- **A US LLC + EIN** — already set up per [operations/tech-stack-setup.md](tech-stack-setup.md). Twilio requires this for any non-personal account and for getting a non-toll-free US local number for caller ID.
- **A credit card** — Twilio requires one on file even during the trial, but won't charge it until trial credit runs out.
- **A laptop** for the operator. The dashboard works in Chrome, Firefox, Safari, Edge. The mic permission prompt has to be allowed once per browser.

---

## Step 1 — Sign up for Twilio (5 min)

1. Go to [twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Sign up with your agency email (the same one your friend logs in to the dashboard with — keeps things clean)
3. Verify email + phone number (you'll get a code via SMS)
4. Select use case: **"Connect with customers"** → **"Voice"** → **"3rd-party API"** when prompted
5. Land on the Console: [console.twilio.com](https://console.twilio.com)

You should see your trial credit balance in the top-right (~$15-20).

---

## Step 2 — Buy a US local number (3 min)

This is the number that motel owners will see on their caller ID when you call them. **Critical:** must match the area code where you're prospecting (Atlanta motels → Atlanta number; New Jersey motels → NJ number) so it doesn't get flagged as spam.

1. In the Twilio Console sidebar: **Phone Numbers → Manage → Buy a number**
2. Filter:
   - Country: **United States**
   - Number type: **Local**
   - Capabilities: ✅ **Voice** (other capabilities optional but useful — SMS is needed later for A2P 10DLC)
   - Match to / area code: enter the area code you'll be cold-calling FROM (e.g. `404` for Atlanta motels)
3. Buy a number — $1.15/mo
4. Copy the number including the `+1` prefix — e.g. `+14045551234`. You'll need this in step 4 and step 7.

**Pro tip:** start with ONE number. After you sign your first client, add 4-5 more in different area codes — when you call NJ motels, you want a NJ number on caller ID, not Atlanta. The dashboard supports multiple numbers (advanced feature, ask later).

---

## Step 3 — Create an API Key (3 min)

The API Key + Secret is what lets the dashboard's serverless function generate access tokens for your operator's browser.

1. Console sidebar: **Account → API keys & tokens → API Keys → Create API key**
2. Friendly name: `Dashboard Voice Token Key`
3. Key type: **Standard**
4. Click Create
5. **CRITICAL:** Copy BOTH values right now and store them somewhere safe (your password manager):
   - **SID** (starts with `SK...`) — this is the API Key SID
   - **Secret** — long random string. **You can only see this ONCE. If you lose it, you have to make a new key.**
6. Click "Got it, I have saved my SID and Secret"

Also copy your **Account SID** from the main dashboard at [console.twilio.com](https://console.twilio.com) (starts with `AC...`, visible right on the home page).

You now have 3 pieces of info to save:
- Account SID: `AC...`
- API Key SID: `SK...`
- API Key Secret: (long random string)

---

## Step 4 — Deploy the Twilio Functions (10 min)

Now we deploy the two small server-side functions that connect your browser to Twilio's calling backbone. You wrote zero code — both files are pre-built in `tooling/twilio-functions/`.

### 4a. Create a Functions Service

1. Console sidebar: **Functions and Assets → Services → Create Service**
2. Service name: `beacon-reviews-voice`
3. Click Create

You're now in the Function editor.

### 4b. Add the voice-token function

1. In the left panel of the Function editor: **Add → Add Function**
2. Path: `/voice-token`
3. Open the local file `tooling/twilio-functions/voice-token.js` in any text editor → copy ALL contents → paste over the placeholder code in the Twilio Function editor
4. **Visibility:** click the lock icon next to the function name → set to **PUBLIC** (this is required so the dashboard can fetch tokens without server-side auth)

### 4c. Add the voice-twiml function

1. **Add → Add Function** again
2. Path: `/voice-twiml`
3. Copy contents from `tooling/twilio-functions/voice-twiml.js` → paste in
4. Set visibility to **PUBLIC**

### 4d. Set environment variables

In the left panel: **Environment Variables** → Add these 4:

| Key | Value |
|---|---|
| `TWIML_APP_SID` | Leave blank for now — we'll come back in Step 5 |
| `TWILIO_API_KEY_SID` | The `SK...` value from Step 3 |
| `TWILIO_API_KEY_SECRET` | The long random secret from Step 3 |
| `CALLER_ID` | The `+1...` number you bought in Step 2 |

Optional (recommended for compliance — see TCPA rules):
| Key | Value |
|---|---|
| `RECORD_CALLS` | `true` |

### 4e. Add Dependencies

In left panel: **Dependencies** → make sure `twilio` is listed. If not, add it:
- Name: `twilio`
- Version: `*` (latest)

### 4f. Deploy

Top-right of the editor: click **Deploy All**. Wait ~10 seconds.

After deploy, click the **Copy URL** icon next to the `/voice-token` function. You should get something like:
```
https://beacon-reviews-voice-1234.twil.io/voice-token
```

**Save this URL** — you'll paste it into the dashboard in Step 7.

Also copy the `/voice-twiml` URL — you'll need it in Step 5.

---

## Step 5 — Create the TwiML App (3 min)

A TwiML App is Twilio's term for "what to do when this thing makes a call." Yours says: "call the `/voice-twiml` function on my Functions service."

1. Console sidebar: **Voice → Manage → TwiML Apps → Create new TwiML App**
2. Friendly name: `Beacon Reviews Voice App`
3. Voice settings:
   - REQUEST URL: paste the `/voice-twiml` URL from Step 4 (e.g. `https://beacon-reviews-voice-1234.twil.io/voice-twiml`)
   - REQUEST METHOD: **POST** (default)
4. Save

After save, copy the **SID** of the TwiML App (starts with `AP...`).

### Update the Function environment

Go back to your Functions Service → Environment Variables → set:
- `TWIML_APP_SID` = the `AP...` SID you just copied

Click **Deploy All** again.

---

## Step 6 — (Optional) Verify your Twilio number can call US numbers

If you're on trial credit:
- Twilio's trial mode requires you to verify the destination phone numbers before you can call them.
- Console sidebar: **Phone Numbers → Manage → Verified Caller IDs → Add a new number**
- Verify your own personal phone first, so you can test-call yourself.

If you've already upgraded out of trial (added a credit card with funds): you can call ANY US number without verification.

---

## Step 7 — Plug credentials into the dashboard (2 min)

1. Open your dashboard (locally: `http://localhost:8080/dashboard.html`, or your Netlify URL after deployment)
2. Log in
3. Go to **Settings → Twilio Voice — in-browser calling**
4. Fill in:
   - **Token endpoint URL:** paste your `/voice-token` URL from Step 4 (e.g. `https://beacon-reviews-voice-1234.twil.io/voice-token`)
   - **Your Twilio number (caller ID):** paste your `+1...` number from Step 2
   - **TwiML App SID:** paste the `AP...` SID from Step 5
   - **Test mode:** keep `Off` for real calls
5. Click **Save**
6. Click **Test connection** — should turn green with "✓ Token endpoint reachable. Initializing Device…"
7. Check the top of the **Calls** tab — status badge should now say **"Twilio: ready"**

You're live.

---

## Step 8 — Make your first test call (1 min)

1. Go to the **Leads** tab
2. Add a test lead with YOUR OWN phone number as the phone field
3. Click the green phone icon next to the phone number
4. The dialer panel slides in → click the green **Call** button
5. **Allow microphone access** when your browser prompts
6. Your phone should ring within 5-10 seconds
7. Answer it — you should hear your own voice through the dashboard's audio
8. Hang up from either side
9. The disposition modal appears → pick one + add notes → Save
10. Check the **Calls** tab — your call should be there with timestamp, duration, disposition

🎉 Done. Real US calls now route through your dashboard.

---

## Troubleshooting

### "Twilio: init failed" badge
- Token URL is wrong → re-copy from Twilio Functions deploy page
- Function not set to PUBLIC visibility → fix in Functions editor, redeploy
- Environment variables missing → check the Functions Environment Variables panel

### "Could not place call" error
- Mic permission denied → click the camera/mic icon in your browser address bar, allow mic
- TwiML App URL is wrong → check that the voice URL points to your `/voice-twiml` function
- Trial mode + unverified destination → verify the destination in Twilio Console first

### Call connects but no audio
- Browser blocked auto-play of audio → click anywhere on the dashboard once before placing the call
- Mic muted at OS level → check your Mac/Windows audio settings
- Firewall blocking WebRTC → switch to a different network or disable VPN

### "Spam likely" on caller ID
- This is a number-reputation issue, not a Twilio bug. Your number is too new or has bad pattern.
- Solutions: register your number with **Free Caller Registry** ([freecallerregistry.com](https://www.freecallerregistry.com)) — free, takes 7-14 days to clear
- For faster reputation: keep daily call volume under 50/day from a single number for the first 2 weeks
- Long-term: buy MULTIPLE local numbers (one per area code you call) and rotate them — single-number reputation never has a chance to build a spam pattern

### Recording compliance
- 13 US states require two-party consent. Always announce at call start: *"This call may be recorded for quality and training purposes."*
- Your dashboard's cold-call script includes this line at the top of Step 1.

---

## Cost projection at scale

| Scenario | Monthly cost |
|---|---|
| Solo operator, 200 dials/day × 20 days = 4,000 calls × avg 90 sec | 4,000 × 1.5 min × $0.013 = $78/mo + $1.15/mo number = **$79/mo** |
| You + 2 dialers, 600 dials/day combined × 20 days = 12,000 calls | 12,000 × 1.5 min × $0.013 = $234/mo + 5 numbers × $1.15 = **$240/mo** |
| 30 active clients, all communication through dashboard | ~$300/mo all-in for calling |

Compare this to JustCall ($49/seat × 3 seats = $147/mo + per-minute overage) — Twilio is slightly cheaper at scale AND gives you full control of the integration.

---

## What this unlocks vs. before

| Before (tel: links + system phone) | After (Twilio Voice in dashboard) |
|---|---|
| Click number → hands off to Mac/iPhone Phone app | Click number → dialer slides in, browser places the call |
| No automatic call logging | Every call auto-logs to Calls tab with duration, time, disposition, notes |
| No connect-rate tracking | Connect rate, talk time, demos-from-calls stats automatically computed |
| Operator manually moves lead in pipeline after each call | Disposition modal auto-updates lead stage (Demo Booked, Closed Won, etc.) |
| No recording | Optional auto-recording for QA + training + dispute defense |
| Same caller ID always | Easy to add 5+ numbers and route based on lead area code |
| Can't call from a browser-only device | Works on any laptop, Chromebook, iPad — anywhere you can open a browser |

---

## Files this references
- [dashboard.html](../dashboard.html) — the dashboard with the in-browser dialer
- [tooling/twilio-functions/voice-token.js](../tooling/twilio-functions/voice-token.js) — Function 1 source code
- [tooling/twilio-functions/voice-twiml.js](../tooling/twilio-functions/voice-twiml.js) — Function 2 source code
- [operations/phone-system-setup.md](phone-system-setup.md) — the alternative (JustCall) if you decide against Twilio direct
- [operations/tech-stack-setup.md](tech-stack-setup.md) — the LLC + EIN setup that's a prerequisite
