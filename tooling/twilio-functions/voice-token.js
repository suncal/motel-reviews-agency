/**
 * Twilio Function — Voice Access Token
 *
 * Deploy this in your Twilio Console at:
 *   Console → Functions and Assets → Services → (create or open service) → Add → Function
 *
 * Path: /voice-token
 * Visibility: PUBLIC (so the dashboard can fetch tokens without server-side auth)
 *
 * Required environment variables (set on the Service):
 *   TWIML_APP_SID         — your TwiML App SID (starts with AP...)
 *   TWILIO_API_KEY_SID    — your API Key SID (starts with SK...)
 *   TWILIO_API_KEY_SECRET — your API Key Secret
 *
 * The service also automatically has access to:
 *   context.ACCOUNT_SID
 *
 * Test URL after deploy:
 *   https://<your-service>-<random>.twil.io/voice-token?identity=test
 *   → should return { token: "eyJ..." }
 */

exports.handler = function (context, event, callback) {
  const AccessToken = Twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  // Caller identity — for our use case, the operator's email.
  const identity = event.identity || 'operator';

  // Build the voice grant — outbound calls go through the TwiML App we configured.
  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: context.TWIML_APP_SID,
    incomingAllow: true, // Allow inbound calls back to this identity
  });

  const token = new AccessToken(
    context.ACCOUNT_SID,
    context.TWILIO_API_KEY_SID,
    context.TWILIO_API_KEY_SECRET,
    { identity: identity, ttl: 3600 } // 1 hour token
  );
  token.addGrant(voiceGrant);

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.appendHeader('Content-Type', 'application/json');
  response.setBody({ token: token.toJwt(), identity: identity });
  return callback(null, response);
};
