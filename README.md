# Embedded YouTube to MP3 Downloader

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Description
The Embedded YouTube to MP3 Downloader is a simple tool that allows users to download audio from YouTube videos in MP3 format. This project embeds the downloader directly from the youtube site

## Features
- Download audio from YouTube videos in MP3 format
- Embeded button in youtube video
- High-quality audio conversion
- No additional software required

## Installation
To get started with the Embedded YouTube to MP3 Downloader, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/embedded-youtube-to-mp3-downloader.git](https://github.com/sotirismp/embeded-yt-downloader.git)
    cd embeded-yt-downloader
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```

4. **Install [Scripty - JavaScript Injector](https://chromewebstore.google.com/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam) extension in your browser**
5. **Create new script with the following options and code:**
![alt text](https://i.imgur.com/dv1uJV6.png)
    ```
    (async () => {
  	    while(true){
		    const menuDOM = document.querySelector("div.ytp-right-controls");
      	    if(menuDOM) break;
      	    await new Promise(r=>setTimeout(r,250))
        }
	    const menu = document.querySelector('div.ytp-right-controls')
	    const container = document.querySelector('.ytp-right-controls')
        container.style.display='flex'
	    button = document.createElement("button");
	    button.classList.add('ytp-button')
	    button.innerHTML = `<div style="display:grid;place-items:center;">
    						<svg width="75%" height="75%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
  								<path fill="#f1f1f1" fill-rule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"/>
							</svg>
                        </div>`;
	    button.addEventListener('click',() => {
		    const queryString = window.location.search;
		    const urlParams = new URLSearchParams(queryString);
		    const v = urlParams.get('v')
		    window.open(`http://localhost:9996/ytdl/${v}`, '_blank')
	    })
	    menu.insertBefore(button, menu.childNodes[2]);
    })()
    ```

## Usage
1. Visit the youtube video that you want to download from your browser.
2. Click the "Download" button that appears in controls of video.
3. Wait for the conversion process to complete.
4. The MP3 file will be automatically downloaded to your device.
