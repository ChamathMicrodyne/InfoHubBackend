import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createServer } from "node:http";
import { WebSocketServer } from "ws";
import AdvertisementRouter from "./router/AdvertisementRouter.js";
import AgentsRouter from "./router/AgentsRouter.js";
import BannersRouter from "./router/BannersRouter.js";
import BenefitsContentRouter from "./router/BenefitsContentRouter.js";
import CashbackRouter from "./router/CashbackRouter.js";
import CmsRouter from "./router/CmsRouter.js";
import CustomPageRouter from "./router/CustomPageRouter.js";
import DashboardRouter from "./router/DashboardRouter.js";
import DepositRouter from "./router/DepositRouter.js";
import FaqsCategoriesRouter from "./router/FaqsCategoriesRouter.js";
import FaqsListingRouter from "./router/FaqsListingRouter.js";
import FraudAndRisksRouter from "./router/FraudAndRisksRouter.js";
import FrontEndRouter from "./router/FrontEndRouter.js";
import GameManagementRouter from "./router/GameManagementRouter.js";
import InboxMessageRouter from "./router/InboxMessageRouter.js";
import JoiningRouter from "./router/JoiningRouter.js";
import MainMenusRouter from "./router/MainMenusRouter.js";
import NavBarRouter from "./router/NavBarRouter.js";
import OffersRouter from "./router/OffersRouter.js";
import PaymentsRouter from "./router/PaymentsRouter.js";
import PlayerRouter from "./router/PlayerRouter.js";
import PopularGamesRouter from "./router/PopularGamesRouter.js";
import PromotionVideosRouter from "./router/PromotionVideosRouter.js";
import PromoCodeRouter from "./router/PromoCodeRouter.js";
import ReleaseNotesRouter from "./router/ReleaseNotesRouter.js";
import ReportsRouter from "./router/ReportsRouter.js";
import SeoManagementRouter from "./router/SeoManagementRouter.js";
import SiteContentRouter from "./router/SiteContentRouter.js";
import SocialMediaLinksRouter from "./router/SocialMediaLinksRouter.js";
import SportContentRouter from "./router/SportContentRouter.js";
import SubAdminsRouter from "./router/SubAdminsRouter.js";
import SystemLogsRouter from "./router/SystemLogsRouter.js";
import TenantConfigRouter from "./router/TenantConfigRouter.js";
import TestimanialsRouter from "./router/TestimanialsRouter.js";
import TransactionsRouter from "./router/TransactionsRouter.js";
import WebsiteContentRouter from "./router/WebsiteContentRouter.js";
import userRouter from "./router/UserRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors({
  origin: '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
}));
app.use(express.json());
app.use(bodyParser.json());

/* ---------------------------------------------------------------------------------------------------- */
// Make wss available in requests for broadcasting
let wss;
app.use((req, res, next) => {
  req.wss = wss;
  next();
});
/* ---------------------------------------------------------------------------------------------------- */


// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the Database!");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message, err.stack);
    process.exit(1);
  });

// Routes
app.use("/api/user", userRouter);
app.use("/api/advertisement", AdvertisementRouter);
app.use("/api/agents", AgentsRouter);
app.use("/api/banners", BannersRouter);
app.use("/api/benefits-content", BenefitsContentRouter);
app.use("/api/cashback", CashbackRouter);
app.use("/api/cms", CmsRouter);
app.use("/api/custom-page", CustomPageRouter);
app.use("/api/dashboard", DashboardRouter);
app.use("/api/deposit", DepositRouter);
app.use("/api/faqscategories", FaqsCategoriesRouter);
app.use("/api/faqslisting", FaqsListingRouter);
app.use("/api/fraudandrisks", FraudAndRisksRouter);
app.use("/api/froentend", FrontEndRouter);
app.use("/api/gamemanagement", GameManagementRouter);
app.use("/api/inboxmessage", InboxMessageRouter);
app.use("/api/joining", JoiningRouter);
app.use("/api/mainmenu", MainMenusRouter);
app.use("/api/navbar", NavBarRouter);
app.use("/api/offers", OffersRouter);
app.use("/api/payments", PaymentsRouter);
app.use("/api/player", PlayerRouter);
app.use("/api/populargames", PopularGamesRouter);
app.use("/api/promocode", PromoCodeRouter);
app.use("/api/promotionvideo", PromotionVideosRouter);
app.use("/api/releasenotes", ReleaseNotesRouter);
app.use("/api/reports", ReportsRouter);
app.use("/api/seomanagement", SeoManagementRouter);
app.use("/api/sitecontent", SiteContentRouter);
app.use("/api/socialmedialinks", SocialMediaLinksRouter);
app.use("/api/sportcontent", SportContentRouter);
app.use("/api/subandmins", SubAdminsRouter);
app.use("/api/systemlogs", SystemLogsRouter);
app.use("/api/tenantconfig", TenantConfigRouter);
app.use("/api/testimonials", TestimanialsRouter);
app.use("/api/transactions", TransactionsRouter);
app.use("/api/websiteContent", WebsiteContentRouter);



/* ---------------------------------------------------------------------------------------------------- */
// Create HTTP and WebSocket servers
const server = createServer(app);
wss = new WebSocketServer({ server });

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('A new WebSocket client connected!');

  // Send JSON welcome message
  ws.send(JSON.stringify({
    type: 'welcome',
    message: 'Connected to the WebSocket server!',
  }));

  // Handle incoming messages
  ws.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message.toString());

      if (parsedMessage.type === 'subscribe') {
        ws.send(JSON.stringify({
          type: 'confirmation',
          message: `Subscribed to ${parsedMessage.channel} updates`,
        }));
      }
    } catch (err) {
      console.error('Error parsing client message:', err);
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format',
      }));
    }
  });

  ws.on('close', () => {console.log('WebSocket client disconnected')});
  ws.on('error', (err) => {console.error('WebSocket client error:', err)});
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/* ---------------------------------------------------------------------------------------------------- */