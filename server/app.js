const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")

const app = express();
app.use(cors())

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(res => console.log("connect"))
mongoose.connection.once("open", () => {
    console.log("connected")
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, (req, res) => {
    console.log("Listening on port 4000")
})

