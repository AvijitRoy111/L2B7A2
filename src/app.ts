 import express, { type Application } from "express";
 import cors from "cors";
 import cookie from "cookie-parser";
 import globalErrorhandler from "./middleware/error.middleware";
 import { authRoute } from "./modules/auth/auth.route";
 import { issueRoute } from "./modules/issues/issue.route";

 const app: Application = express();

 app.use(cookie());
// app.use(express.json());
// app.use(express.text());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: "http://localhost:5000",
//   }),
// );

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello From L2B7A2",
//   });
// });



// app.use("/api/auth", authRoute)
// app.use("/api/issues", issueRoute)




// app.use(globalErrorhandler);

// export default app;