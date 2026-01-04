import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve();
const svgPath = path.join(root, "public", "favicon.svg");
const outPath = path.join(root, "public", "og-image.png");

async function run() {
  if (!fs.existsSync(svgPath)) {
    console.error("favicon.svg not found at", svgPath);
    process.exit(1);
  }

  try {
    await sharp(svgPath)
      .resize(1200, 630, { fit: "cover" })
      .png({ quality: 90 })
      .toFile(outPath);
    console.log("Generated", outPath);
  } catch (err) {
    console.error("Error generating og image:", err);
    process.exit(1);
  }
}

run();
