const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://atlas.api.barclays/open-banking/v2.2/branches"
    );

    const Brands = response.data.data.map((item) => item.Brand);
    const Branches = Brands.flat().map((branch) => branch.Branch);
    const Branch = res.json(Branches.flat());
  } catch (err) {
    console.log(err);
  }
});
app.listen(4000);
