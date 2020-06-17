const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State building",
    description: "One of the most famous sky scrapers in the world1",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New Yorkk, NY 10001",
    creator: "u1",
  },
  {
    id: "p2",
    title: "My House",
    description: "Comfy Area",
    location: {
      lat: 0.0,
      lng: 0.0,
    },
    address: "Center of the Earth",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const userPlaces = DUMMY_PLACES.filter((u) => {
    return u.creator === userId;
  });
  res.json({ userPlaces });
});

module.exports = router;
