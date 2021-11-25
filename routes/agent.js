const express = require("express");
const router = express.Router();

const {
  getListing,
  getAllListing,
  getAllOffers,
  createListing,
  createOffer,
  deleteOffer,
  deleteListing,
  updateListing,
} = require("../controllers/agent");

router
  .route("/listings")
  .get(getListing)
  .get(getAllListing)
  .post(createListing)
  .delete(deleteListing)
  .put(updateListing);
router.route("/offers").get(getAllOffers).post(createOffer).delete(deleteOffer);

module.exports = router;
