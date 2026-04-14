const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const newContent = data.replace(/React/gi, "Angular");

fs.writeFileSync("README-Angular.md", newContent);

// console.log(newContent);
