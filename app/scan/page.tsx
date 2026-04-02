"use client";

import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import '../../components/QrScannerDemo.css';

// --- Environment Variables ---
const DEPLOYMENT_LINK = process.env.NEXT_PUBLIC_DEPLOYMENT_LINK || "";
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || "";

// --- Interfaces ---
interface ParticipantData {
    name?: string;
    email?: string;
}

const EventQRScanner: React.FC = () => {
    // Refs
    const videoRef = useRef<HTMLVideoElement>(null);
    const scannerRef = useRef<QrScanner | null>(null);

    // State
    const [cameras, setCameras] = useState<QrScanner.Camera[]>([]);
    const [selectedCamera, setSelectedCamera] = useState<string>('environment');
    const [isScanning, setIsScanning] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Result State
    const [participant, setParticipant] = useState<ParticipantData | null>(null);
    const [scanError, setScanError] = useState<string | null>(null);
    const [bgColor, setBgColor] = useState<string>('white');

    // --- Configuration Check ---
    useEffect(() => {
        if (!DEPLOYMENT_LINK || !SHEET_ID) {
            console.error("Missing environment variables for QR Scanner.");
            setScanError("System misconfigured. Missing deployment link or sheet ID in .env.");
        }
    }, []);

    // --- Scanner Setup ---
    useEffect(() => {
        if (!videoRef.current || !DEPLOYMENT_LINK || !SHEET_ID) return;

        const scanner = new QrScanner(
            videoRef.current,
            (result) => handleScanSuccess(result.data),
            {
                onDecodeError: (error) => {
                    // Only log standard errors to avoid console spam, actual decode failures fire constantly
                    if (typeof error !== 'string') {
                        console.log("QR scan error:", error);
                    }
                },
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        );

        scannerRef.current = scanner;

        // @ts-ignore - internal method needed for style repositioning
        scanner._updateOverlay();
        scanner.setInversionMode("both");

        scanner.start().then(() => {
            QrScanner.listCameras(true).then((cams) => setCameras(cams));
        });

        return () => {
            scanner.stop();
            scanner.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- Handlers ---
    const handleScanSuccess = async (scannedData: string) => {
        if (!scannedData || !DEPLOYMENT_LINK || !SHEET_ID) return;

        // Stop scanning and show loader
        scannerRef.current?.stop();
        setIsScanning(false);
        setIsLoading(true);

        try {
            const requestUrl = `${DEPLOYMENT_LINK}?id=${encodeURIComponent(scannedData)}&sheetId=${encodeURIComponent(SHEET_ID)}`;
            const response = await fetch(requestUrl);
            const textData = await response.text();
            const jsonData: ParticipantData = JSON.parse(textData);

            setParticipant(jsonData);

            if (jsonData && jsonData.name) {
                setBgColor('green');
            } else {
                setBgColor('red');
            }
        } catch (error) {
            console.error(error);
            setScanError("Hmm, an error occurred. Please try again.");
            setBgColor('red');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const camId = e.target.value;
        setSelectedCamera(camId);
        scannerRef.current?.setCamera(camId);
    };

    const toggleScanning = () => {
        if (isScanning) {
            scannerRef.current?.stop();
        } else {
            scannerRef.current?.start();
        }
        setIsScanning(!isScanning);
    };

    const resetScanner = () => {
        setParticipant(null);
        setScanError(null);
        setBgColor('white');
        setIsScanning(true);
        scannerRef.current?.start();
    };

    return (
        <div className="app-wrapper" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
            {/* --- Scanner View --- */}
            {(!participant && !scanError && !isLoading) && (
                <div id="scanner-container">
                    <div id="video-container" className="example-style-2" style={{ display: isScanning ? 'flex' : 'none' }}>
                        <video id="qr-video" ref={videoRef}></video>
                    </div>

                    <div>
                        <b>Preferred camera:</b>
                        <br />
                        <select id="cam-list" value={selectedCamera} onChange={handleCameraChange}>
                            <option value="environment">Environment Facing (default)</option>
                            <option value="user">User Facing</option>
                            {cameras.map((camera) => (
                                <option key={camera.id} value={camera.id}>
                                    {camera.label || camera.id}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button id="control-toggle" onClick={toggleScanning}>
                        {isScanning ? "Stop Scanning" : "Start Scanning"}
                    </button>
                </div>
            )}

            {/* --- Loading View --- */}
            {isLoading && (
                <div id="loading-overlay">
                    <h2>Processing...</h2>
                    <div className="loader"></div>
                </div>
            )}

            {/* --- Results View --- */}
            {(participant || scanError) && !isLoading && (
                <div id="response-container">
                    <div className="result-card">
                        {scanError ? (
                            <h1>{scanError}</h1>
                        ) : participant?.name ? (
                            <h1>{participant.name} is checked in and all set!</h1>
                        ) : (
                            <h1>Person not found...</h1>
                        )}
                    </div>
                    <button className="reset-button" onClick={resetScanner}>
                        Return to scanner
                    </button>
                </div>
            )}
        </div>
    );
};

export default EventQRScanner;
