# RTMP-FFMpeg Livestream

## Overview

This repository contains a media server built with Node.js for streaming image series video feed over RTMP using FFMpeg.

## Features

- Utilizes Node.js for backend server implementation.
- Streams image series video feed over RTMP protocol.
- Uses FFMpeg for video encoding and processing.

## Requirements

- Node.js (v12.x or higher)
- FFMpeg

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SarthakSKumar/RTMP-FFMpeg-Livestream.git
    ```

2. Navigate to the project directory:

    ```bash
    cd RTMP-FFMpeg-Livestream
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

- After installing and starting the server, you can configure the client to connect to the RTMP stream using the provided URL.
- Adjust configurations as needed for your specific use case.

## Configuration

- The configuration file is located at `config.json`.
- Modify the settings in this file to match your requirements.

## Contributing

Contributions are welcome! Please follow the standard GitHub flow:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
