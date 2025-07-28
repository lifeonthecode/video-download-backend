import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes import
import infoRoutes from "./routes/info.routes.js";
import downloadRoutes from "./routes/download.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import contactRoutes from "./routes/contact.routes.js";

// Load .env variables
dotenv.config();

// Express app init
const app = express();

// CORS setup
app.use(cors({
  credentials: true,
  origin: process.env.CORS_ORIGIN
}));

// Parse JSON
app.use(express.json());


// Routes
app.use("/api/info", infoRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/contact", contactRoutes);


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
