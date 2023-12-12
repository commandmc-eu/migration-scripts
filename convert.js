const fs = require("fs");

const fileEnding = "yml";

const previous = "commandmc.bedwars";
const next = "commandmc.systems";

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (!file.endsWith(fileEnding)) continue;

  const data = fs.readFileSync(`${__dirname}/${file}`, "utf8");

  const newData = data.replaceAll(previous, next);

  fs.writeFileSync(`${__dirname}/${file}`, newData, "utf8");
}
