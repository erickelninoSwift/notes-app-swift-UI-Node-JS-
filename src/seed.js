require("dotenv").config();
const mongoose = require("mongoose");
const Note = require("../models/Note");
const { notes } = require("../../notes.json");
// this is the initial notes that will be displaying in our app, you can modify it as you like
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Note.deleteMany({});
    const inserted = await Note.insertMany(notes);

    console.log(` Seeded ${inserted.length} notes:`);
    inserted.forEach((n, i) =>
      console.log(`   ${i + 1}. [${n._id}] ${n.note}`),
    );
  } catch (err) {
    console.error(" Seed failed:", err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected");
  }
};

seed();
