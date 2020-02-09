var options = {
  shotSize: {
    width: 620,
    height: 520
  },
  shotOffset: {
    top: 180,
    left: 150
  },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
};
const webshot = require("webshot");

webshot(
  "https://www.google.com/search?q=appl",
  "./graphs/AAPL.png",
  options,
  function(err) {
    if (!err) {
      console.log("Screenshot taken!");
    } else {
      console.log("FAIL");
    }
  }
);
