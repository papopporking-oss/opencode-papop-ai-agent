"use client";

import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

// Type declarations
type DeviceInfo = {
    deviceId: string;
    label: string;
};

// Step 1: Helper function to filter and format video devices
function filterVideoDevices(devices: MediaDeviceInfo[]): DeviceInfo[] {
    return devices
        .filter((device) => device.kind === "videoinput")
        .map((device) => ({
            deviceId: device.deviceId,
            label: device.label || `Camera ${device.deviceId.slice(0, 5)}`,
        }));
}

export default function WebcamPage() {
    // Step 2: State management
    const [isRunning, setIsRunning] = useState(false);
    const [deviceId, setDeviceId] = useState("");
    const [devices, setDevices] = useState<DeviceInfo[]>([]);
    const webcamRef = useRef<Webcam>(null);

    // Step 3: Enumerate video input devices on mount
    useEffect(() => {
        // Step 3.1: Check if running in browser environment
        if (typeof navigator === "undefined" || !navigator.mediaDevices) {
            return;
        }

        // Step 3.2: Setup ignore flag for cleanup
        let ignore = false;

        // Step 3.3: Get all available media devices
        navigator.mediaDevices.enumerateDevices().then((allDevices) => {
            // Step 3.4: Only update state if not cleaned up
            if (!ignore) {
                // Step 3.5: Filter only video input devices
                const videoDevices = filterVideoDevices(allDevices);
                setDevices(videoDevices);

                // Step 3.6: Set first device as default if no device selected
                if (videoDevices.length > 0) {
                    setDeviceId((prev) => prev || videoDevices[0].deviceId);
                }
            }
        });

        // Step 3.7: Cleanup function to prevent memory leak
        return () => {
            ignore = true;
        };
    }, []);

    // Step 4: Handle start button click
    function handleStartClick() {
        setIsRunning(true);
    }

    // Step 5: Handle stop button click
    function handleStopClick() {
        setIsRunning(false);
    }

    // Step 6: Re-enumerate devices after stream starts
    // This is needed because device labels are only available after permission is granted
    function handleStreamStart() {
        if (typeof navigator !== "undefined" && navigator.mediaDevices) {
            navigator.mediaDevices.enumerateDevices().then((allDevices) => {
                const videoDevices = filterVideoDevices(allDevices);
                setDevices(videoDevices);
            });
        }
    }

    // Step 7: Handle camera selection change
    function handleDeviceChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setDeviceId(event.target.value);
    }

    // Step 8: Build video constraints based on selected device
    const videoConstraints: MediaTrackConstraints = deviceId
        ? { deviceId: { exact: deviceId } }
        : { facingMode: "user" };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
            {/* Step 9: Conditionally render webcam or placeholder */}
            {isRunning ? (
                // Step 9.1: Show webcam stream
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    videoConstraints={videoConstraints}
                    onUserMedia={handleStreamStart}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
            ) : (
                // Step 9.2: Show camera off placeholder
                <div className="flex items-center justify-center w-full h-full bg-black">
                    <span className="text-white/50 text-lg">Camera is off</span>
                </div>
            )}

            {/* Step 10: Controls overlay - fixed at bottom center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/80 backdrop-blur-sm p-3 rounded-lg">
                {/* Step 10.1: Camera selection dropdown */}
                <select
                    className="rounded px-2 py-1 text-sm bg-white/90 text-black border border-white/20 outline-none"
                    value={deviceId}
                    onChange={handleDeviceChange}
                    aria-label="Select camera"
                >
                    {devices.length === 0 ? (
                        <option value="">No cameras detected</option>
                    ) : (
                        devices.map((device) => (
                            <option key={device.deviceId} value={device.deviceId}>
                                {device.label}
                            </option>
                        ))
                    )}
                </select>

                {/* Step 10.2: Toggle between Start and Stop buttons */}
                {isRunning ? (
                    <button
                        type="button"
                        className="rounded px-3 py-1 text-sm bg-white/20 text-white border border-white/20 hover:bg-white/30"
                        onClick={handleStopClick}
                    >
                        Stop
                    </button>
                ) : (
                    <button
                        type="button"
                        className="rounded px-3 py-1 text-sm bg-white/90 text-black border border-white/20 hover:bg-white"
                        onClick={handleStartClick}
                    >
                        Start
                    </button>
                )}
            </div>
        </div>
    );
}
