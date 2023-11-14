const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const imagesFolder = "images";
const imageFiles = fs
  .readdirSync(imagesFolder)
  .filter((file) => file.endsWith(".png"));
let currentIndex = 0;
let ffmpegProcess;

function streamNextImage() {
  if (currentIndex < imageFiles.length) {
    const inputImage = path.join(imagesFolder, imageFiles[currentIndex]);

    // Create the ffmpeg command
    const ffmpegCommand = [
      "-re",
      "-loop",
      "1",
      "-i",
      inputImage,
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-maxrate",
      "3000k",
      "-bufsize",
      "3000k",
      "-vf",
      "scale=1920:1080",
      "-g",
      "60",
      "-c:a",
      "aac",
      "-b:a",
      "160k",
      "-ac",
      "2",
      "-ar",
      "44100",
      "-f",
      "flv",
      "rtmp://localhost:1935/live",
    ];

    // Start the ffmpeg process only if it doesn't exist
    if (!ffmpegProcess || ffmpegProcess.exitCode !== null) {
      console.log("Streaming", inputImage);
      ffmpegProcess = spawn("ffmpeg", ffmpegCommand, { stdio: "inherit" });

      // Handle process exit
      ffmpegProcess.on("close", (code) => {
        console.log("Streaming finished for", inputImage);
        // Increase the index for the next image
        currentIndex = (currentIndex + 1) % imageFiles.length;

        // Continue streaming the next image
        streamNextImage();
      });
    } else {
      // If ffmpeg process is still running, move on to the next image
      console.log("Still streaming, moving to the next image.");
      currentIndex = (currentIndex + 1) % imageFiles.length;
      // Continue streaming the next image
      streamNextImage();
    }
  } else {
    console.log("All images streamed. Restarting from the beginning.");
    // Reset the index to 0 to restart from the beginning
    currentIndex = 0;

    // Continue streaming the next image
    streamNextImage();
  }
}

// Start streaming the first image
streamNextImage();
