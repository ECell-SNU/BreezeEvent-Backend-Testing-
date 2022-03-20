const router = require("express").Router();
const { Deta } = require("deta");

const deta = Deta("c0m7xlcx_xZx4dZnho4d7wtAUeDtjECxuMFYsbfFC");
const db = deta.Base("MockEvent");

router.get("/", (req, res) => {
  res.status(200).json({ user: "none" });
});

router.post("/store", async (req, res) => {
  const dataResponse = req.body["Data"];

  const Mail = dataResponse.Email;
  const Responses = JSON.stringify(dataResponse.Responses);

  const toCreate = { Mail, Responses };
  const insertedUser = await db.put(toCreate);
  res.status(201).json(insertedUser);
});

module.exports = router;
