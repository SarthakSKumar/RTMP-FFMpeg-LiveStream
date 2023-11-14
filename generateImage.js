const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

async function generateImage(outputPath) {
  const canvas = createCanvas(1920, 1080); // Adjust the size as needed
  const ctx = canvas.getContext("2d");

  // Your image drawing logic here
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Save the generated image
  const out = fs.createWriteStream(outputPath);
  const stream = canvas.createJPEGStream({ quality: 0.8 });
  stream.pipe(out);
  out.on("finish", () => console.log("Image created successfully."));
}

// Example: Generate an image and save it
generateImage("output.jpg");
