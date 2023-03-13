import * as Upload from "upload-js-full";
import fetch from "node-fetch";

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

    data: Buffer.from("Hello World", "utf8"),

    // Required when: 'data' is a stream, buffer, or string.
    mime: "text/plain",

    // Required when: 'data' is a stream, buffer, or string.
    originalFileName: "my_file.txt",

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