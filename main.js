import * as Upload from "upload-js-full";
import fetch from "node-fetch";
import fs from "fs";

const buffer = fs.readFileSync("test-image.png");

const uploadManager = new Upload.UploadManager(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "free" // e.g. "secret_xxxxx"
  })
);

uploadManager
  .upload({

    // ---------
    // Required:
    // ---------

    accountId: "W142hJk", 

    data: buffer,

    // Required when: 'data' is a stream, buffer, or string.
    mime: "image/png",

    // Required when: 'data' is a stream, buffer, or string.
    originalFileName: "test-image.png",

  })
  .then(
    ({ fileUrl, filePath }) => {

      // --------------------------------------------
      // File successfully uploaded!
      // --------------------------------------------
      // The 'filePath' uniquely identifies the file,
      // and is what you should save to your DB.
      // --------------------------------------------
      console.log(`File uploaded to: ${fileUrl}`);

    },
    error => console.error(`Upload failed: ${error.message}`, error)
  );