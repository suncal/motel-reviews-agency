/**
 * Twilio Function — Outbound Call TwiML
 *
 * Deploy this in your Twilio Console at:
 *   Console → Functions and Assets → Services → (your service) → Add → Function
 *
 * Path: /voice-twiml
 * Visibility: PUBLIC
 *
 * This is the Voice URL on your TwiML App. Twilio calls this endpoint
 * when the dashboard initiates an outbound call. The function returns
 * TwiML that dials the requested phone number using your verified
 * Twilio caller ID.
 *
 * Required environment variables (set on the Service):
 *   CALLER_ID — your Twilio number that shows up on the recipient's caller ID
 *               (e.g. +15551234567 — must be a number you OWN on Twilio)
 *
 * Optional environment variables:
 *   RECORD_CALLS — set to "true" to automatically record every call
 *   RECORDING_STATUS_CALLBACK — webhook URL to receive recording metadata
 */

exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const to = event.To || event.to;
  if (!to) {
    twiml.say({ voice: 'Polly.Joanna' }, 'No destination number provided.');
    return callback(null, twiml);
  }

  // Use the operator's TwiML App caller ID, falling back to env var
  const callerId = event.From || context.CALLER_ID;

  const dial = twiml.dial({
    callerId: callerId,
    answerOnBridge: true, // Bridge audio only after the callee picks up
    record: context.RECORD_CALLS === 'true' ? 'record-from-answer-dual' : 'do-not-record',
    recordingStatusCallback: context.RECORDING_STATUS_CALLBACK || undefined,
    recordingStatusCallbackEvent: 'completed',
  });
  dial.number(to);

  return callback(null, twiml);
};
