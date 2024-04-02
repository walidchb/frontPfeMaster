"use client";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";

const FileViewer = () => {
  const searchParams = useSearchParams();
  const URL = searchParams.get("url");

  console.log(URL);
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="flex justify-center items-center bg-white">
      {URL ? (
        <iframe
          className="bg-yellow-400"
          src={URL}
          title="File Viewer"
          style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FileViewer;
