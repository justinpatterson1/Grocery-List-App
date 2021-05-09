const express = require("express");
const router = express.Router();

const itemServices = require("../services/itemServices.js");

router.get("/",itemServices.getAllItems);

router.post("/",itemServices.createItem);

router.get("/:id",itemServices.getAnItem);

router.delete("/:id",itemServices.deleteAnItem);

router.delete("/",itemServices.deleteAllItems);
router.put("/:id",itemServices.updateAnItem);

module.exports = router;