var express = require("express");
var app = express();
var ytdl = require("ytdl-core");
var sanitize = require("sanitize-filename");
const PORT = 9996;

app.get("/ytdl/:id", async function (req, res) {
  try {
    const URL = `https://youtube.com/watch?v=${req.params.id}`;
    let info = await ytdl.getBasicInfo(URL);
    const video = ytdl(URL, { filter: "audioonly" });
    const filename = sanitize(info.videoDetails.title).replace(/\r?\n|\r/g, "");
    res.setHeader(
      "Content-disposition",
      `attachment; filename="${encodeURIComponent(filename)}.mp3"; filename*=UTF-8''${encodeURIComponent(filename)}.mp3`
    );
    video.pipe(res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, function () {
  console.log(`Server is listening in port: ${PORT}`);
});
