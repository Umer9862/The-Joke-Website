import express from "express";
import axios from 'axios';

const app = express();
const api = `https://v2.jokeapi.dev/joke/Any?type=single`;
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the root route


app.get("/", async (req, res) => {
  try {
    const result = await axios.get(api);
    
    if (result.data.type === "single") {
      const joke = result.data.joke;
      res.render("joke", { joke }); // Pass the joke data to the view
    } else {
      res.render("joke", { joke: "No joke available" });
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("joke", { joke: "Error fetching joke" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
