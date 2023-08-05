const express = require("express");
const request = require("supertest");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

const controllers = require("./users");

const app = express();
app.use(express.json());
app.post("/users/login", controllers.login);

describe("test login controller", () => {
  beforeAll(() =>
    mongoose
      .connect(DB_HOST)
      .then(() => {
        app.listen(3000, () => {
          console.log("Server running. Use our API on port: 3000");
        });
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.log(error.message);
        process.exit(1);
      })
  );
  afterAll(() => {
    mongoose.disconnect();
  });

  test("loginUser return status code 200", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({
        email: "Melkaya@example.com",
        password: "Melkayapassword",
      })
      .expect(200);

    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("user");
    expect(typeof response.body.user).toBe("object");
    expect(response.body.user).toHaveProperty("email");
    expect(typeof response.body.user.email).toBe("string");
    expect(response.body.user).toHaveProperty("subscription");
    expect(typeof response.body.user.subscription).toBe("string");
  });
});
