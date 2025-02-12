import { useState } from "react";
import Loading from "./Loading";
import RealComponent from "./realComponent";

function VideoUpload() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<null | string>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    async function handleUpload() {
        if (!videoFile) {
            alert("Please select a video first.");
            return;
        }

        setLoading(true);
        setResult(null);

        // Capture thumbnail from video
        extractThumbnail(videoFile, (imageUrl) => {
            setThumbnail(imageUrl);
        });

        setTimeout(() => {
            setLoading(false);
            setResult("Real");
        }, 5000); 
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
        }
    }

    function extractThumbnail(file: File, callback: (imageUrl: string) => void) {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        video.src = URL.createObjectURL(file);
        video.crossOrigin = "anonymous";
        video.currentTime = 2; // Capture a frame at 2 seconds

        video.onloadeddata = () => {
            video.play();
        };

        video.onseeked = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageUrl = canvas.toDataURL("image/png"); // Convert canvas to image URL
            callback(imageUrl);
        };
    }

    return (
        <div className="flex flex-col gap-4">
            {loading ? (
                <Loading />
            ) : result ? (
                <RealComponent thumbnail={thumbnail} />
            ) : (
                <>
                    <div className="text-center text-2xl font-bold text-fuchsia-500 mt-3"> 
                        <h1>Upload Video to check if it is fake or real</h1>
                    </div>
                    <div className="text-center mt-3 shadow-md rounded-md p-4 mx-auto bg-gray-300 flex flex-col gap-4 w-1/2">
                        <div className="shadow-md rounded-md p-4 w-60 h-60 mx-auto bg-gray-100 flex items-center justify-center">
                            <input type="file" accept="video/*" id="fileInput" className="hidden" onChange={handleFileChange} />
                            <label htmlFor="fileInput" className="cursor-pointer">
                                <img src="./file-upload.png" width={100} height={100} alt="Upload Icon" />
                            </label>
                            <p>{videoFile ? videoFile.name : ""}</p>
                        </div>
                        <div>
                            <button className="bg-fuchsia-500 text-white p-2 rounded-md" onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default VideoUpload;
