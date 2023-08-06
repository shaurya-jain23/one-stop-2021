const express = require("express");
const campusTravelRouter = express.Router();
const campusTravelController = require("../controllers/campusTravelController");
const { restrictIfGuest, verifyUserRequest } = require("../middlewares/user.auth");
campusTravelRouter.use(verifyUserRequest);
campusTravelRouter.get("/campus-travel",campusTravelController.getTravelPosts);
campusTravelRouter.get("/campus-travel/myads",restrictIfGuest,campusTravelController.getMyAds);
campusTravelRouter.post("/campus-travel",restrictIfGuest,campusTravelController.postTravel);
campusTravelRouter.get("/campus-travel/chat",campusTravelController.getTravelPostChatReplies);
campusTravelRouter.post("/campus-travel/chat",restrictIfGuest,campusTravelController.postReplyChat);
campusTravelRouter.delete("/campus-travel",restrictIfGuest,campusTravelController.deleteTravelPost);
campusTravelRouter.delete("/campus-travel/all",restrictIfGuest,campusTravelController.deleteAllTravelPosts);
module.exports = {campusTravelRouter : campusTravelRouter};