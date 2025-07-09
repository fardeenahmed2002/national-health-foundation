// pages/api/socket.ts
import { Server } from "socket.io";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Server as HTTPServer } from "http";
import type { Socket } from "net";
import type { Server as IOServer } from "socket.io";

type NextApiResponseWithSocket = NextApiResponse & {
  socket: Socket & {
    server: HTTPServer & {
      io?: IOServer;
    };
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (!res.socket.server.io) {
    console.log("🔌 Initializing Socket.IO server...");

    const io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
      cors: {
        origin: "*", // dev purpose, adjust in production
        methods: ["GET", "POST"]
      }
    });

    io.on("connection", (socket) => {
      console.log("✅ Socket connected:", socket.id);

      socket.on("join-room", (roomId: string) => {
        socket.join(roomId);
        socket.to(roomId).emit("user-joined", socket.id);
      });

      socket.on("offer", (data) => {
        socket.to(data.roomId).emit("offer", data);
      });

      socket.on("answer", (data) => {
        socket.to(data.roomId).emit("answer", data);
      });

      socket.on("ice-candidate", (data) => {
        socket.to(data.roomId).emit("ice-candidate", data);
      });

      socket.on("disconnect", () => {
        console.log("❌ Socket disconnected:", socket.id);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("✅ Socket.IO server already running");
  }

  res.end();
}
