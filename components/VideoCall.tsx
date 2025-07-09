"use client";

import React, { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type VideoCallProps = {
  roomId: string;
};

const SOCKET_SERVER_URL = "/api/socket";

const VideoCall: React.FC<VideoCallProps> = ({ roomId }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const localAudioRef = useRef<HTMLAudioElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const pc = useRef<RTCPeerConnection | null>(null);
  const socket = useRef<Socket | null>(null);

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.current = io(SOCKET_SERVER_URL, {
      path: "/api/socket",
    });

    pc.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    // getUserMedia for video + audio
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // show local video muted (avoid echo)
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
          localVideoRef.current.muted = true; // নিজেকে echo না শুনার জন্য muted রাখো
        }

        // show local audio (self-hearing)
        if (localAudioRef.current) {
          localAudioRef.current.srcObject = stream;
          localAudioRef.current.muted = false; // নিজের মাইকের সাউন্ড শুনতে unmuted থাকবে
          localAudioRef.current.play().catch(() => {});
        }

        // add tracks to peer connection for sending remote peer
        stream.getTracks().forEach((track) => {
          pc.current?.addTrack(track, stream);
        });
      })
      .catch((err) => {
        alert("ক্যামেরা বা মাইক্রোফোন পাওয়া যায়নি। অনুগ্রহ করে সঠিক ডিভাইস সংযুক্ত করুন।");
        console.error("Media Device Error:", err);
      });

    socket.current.on("connect", () => {
      console.log("Socket connected:", socket.current?.id);
      socket.current?.emit("join-room", roomId);
    });

    socket.current.on("user-joined", async (socketId: string) => {
      console.log("User joined:", socketId);
      const offer = await pc.current?.createOffer();
      await pc.current?.setLocalDescription(offer!);
      socket.current?.emit("offer", { roomId, sdp: offer, to: socketId, from: socket.current?.id });
    });

    socket.current.on("offer", async (data: any) => {
      console.log("Offer received", data);
      await pc.current?.setRemoteDescription(data.sdp);
      const answer = await pc.current?.createAnswer();
      await pc.current?.setLocalDescription(answer!);
      socket.current?.emit("answer", { roomId, sdp: answer, to: data.from, from: socket.current?.id });
    });

    socket.current.on("answer", async (data: any) => {
      console.log("Answer received", data);
      await pc.current?.setRemoteDescription(data.sdp);
    });

    socket.current.on("ice-candidate", async (data: any) => {
      console.log("ICE candidate received", data);
      try {
        await pc.current?.addIceCandidate(data.candidate);
      } catch (err) {
        console.error("Error adding ICE candidate", err);
      }
    });

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current?.emit("ice-candidate", { roomId, candidate: event.candidate });
      }
    };

    pc.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    setIsConnected(true);

    return () => {
      socket.current?.disconnect();
      pc.current?.close();
      setIsConnected(false);
    };
  }, [roomId]);

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-800 p-6 rounded-lg shadow-lg max-w-5xl w-full">
      <div className="flex-1">
        <h2 className="text-white text-center mb-2">Your Video</h2>
        <video ref={localVideoRef} autoPlay playsInline className="w-full rounded-md bg-black" />
        <audio ref={localAudioRef} autoPlay playsInline className="hidden" />
      </div>
      <div className="flex-1">
        <h2 className="text-white text-center mb-2">Remote Video</h2>
        <video ref={remoteVideoRef} autoPlay playsInline className="w-full rounded-md bg-black" />
      </div>
    </div>
  );
};

export default VideoCall;
