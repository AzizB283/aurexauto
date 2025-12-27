import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(server: Server, app: Express): Promise<void> {
  // Static site - no API routes
}
