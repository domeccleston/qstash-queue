const UPSTREAM_API = "https://http-nodejs-production-9269.up.railway.app/";
const QSTASH_URL = `https://qstash.upstash.io/v1/publish/`;

export default async function handler(req, res) {
  try {
    const qstashRequest = await fetch(`${QSTASH_URL + UPSTREAM_API}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.QSTASH_TOKEN}`,
        "Upstash-Callback": `https://${process.env.VERCEL_URL}/api/callback`,
      },
      method: "POST",
    });

    const { messageId } = await qstashRequest.json();

    res.status(202).json({ message: `Enqueued new task with ID ${messageId}` });
  } catch (error) {
    res.status(500).json({ error });
  }
}
