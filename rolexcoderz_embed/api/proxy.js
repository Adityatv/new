import fetch from "node-fetch";

export default async function handler(req, res) {
  const targetUrl = req.query.url 
    ? "https://rolexcoderz.site" + req.query.url 
    : "https://rolexcoderz.site";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "user-agent": req.headers["user-agent"] || "Mozilla/5.0"
      }
    });

    const body = await response.text();

    res.setHeader("Content-Type", response.headers.get("content-type") || "text/html");
    res.status(response.status).send(body);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.toString());
  }
}
