// /api/callback.js

export default async function handler(req, res) {
  try {
    // responses from qstash are base64-encoded
    const decoded = atob(req.body.body);
    // I'm just logging this response, but here
    // is where we could save it to a database etc
    console.log(decoded);
  } catch (error) {
    console.error("error processing forwarded response");
  }

  return res.status(200).end();
}
