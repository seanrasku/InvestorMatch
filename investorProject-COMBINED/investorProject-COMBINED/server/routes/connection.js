import express from "express";


import { isSignedIn, isInvestor } from "../middlewares";

const router = express.Router();

import { createConnection, deleteConnection, updateConnection, getConnections} from "../controllers/connection";


//routes
router.post("/connection/:userId/:connectionId", isSignedIn, createConnection);
router.delete("/connection/:id", isSignedIn, deleteConnection);
router.patch("/connection/:id", isSignedIn, isInvestor, updateConnection);
router.get("/connections/:id", isSignedIn, getConnections);



module.exports = router;