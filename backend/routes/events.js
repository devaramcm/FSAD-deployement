import express from "express";

const router = express.Router();

// TEMP DATA (later replace with MongoDB)
const events = [
  {
    id: 1,
    title: "Tech & Innovation Expo",
    date: "May 18, 2026",
    location: "Bangalore",
    description: "Explore latest tech trends",
  },
  {
    id: 2,
    title: "Business & Finance Fair",
    date: "June 5, 2026",
    location: "Cochin",
    description: "Finance networking event",
  },
];

// GET ALL EVENTS
router.get("/", (req, res) => {
  res.json(events);
});

// GET SINGLE EVENT
router.get("/:id", (req, res) => {
  const event = events.find(e => e.id == req.params.id);
  if (!event) return res.status(404).json("Event not found");
  res.json(event);
});

export default router;