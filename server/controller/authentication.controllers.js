const connectToDataBase = require("../database/databaseconnection");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const handleUserSignIn = async (request, response) => {
  const { email, password } = request.body;

  connectToDataBase
    .then(async (connectionInstance) => {
      try {
        const query = `SELECT * FROM sellers WHERE email_id = ?`;
        const values = [email];

        try {
          const [rows] = await connectionInstance.execute(query, values);

          const requiredUser = rows[0];
          bcrypt.compare(
            password,
            requiredUser.seller_password,
            function (err, res) {
        
              if (res === true) {
                const token = jwt.sign(
                  { email: requiredUser.email_id, id: requiredUser.seller_id },
                  process.env.JSWEBTOKENSECRET
                );

                response.status(200).json({
                  message: "Seller signed in successfully",
                  jsonwebtoken: token,
                  seller_id: requiredUser.seller_id,
                });
                console.log("SUCESSS");
              } else {
                console.log("FAILURE");
              }
            }
          );
        } catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
      } catch (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ message: "Creation error" });
      }
    })
    .catch((dbError) => {
      console.error("Database connection error:", dbError);
      response.status(500).json({ message: "Database connection error" });
    });
};

const handleUserSignUp = async (request, response) => {
  const { firstname, lastname, username, email, password } = request.body;
  const productImg = request.file;

  connectToDataBase
    .then(async (connectionInstance) => {
      try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const query = `INSERT INTO sellers (seller_id, first_name, last_name, user_name, email_id, seller_password, seller_profile_image_url) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const userId = uuidv4();
        const values = [
          userId,
          firstname,
          lastname,
          username,
          email,
          hash,
          `http://localhost:9000/uploads/userprofile/${productImg.filename}`,
        ];
        const token = jwt.sign(
          { email: email, id: userId },
          process.env.JSWEBTOKENSECRET
        );

     
        const [dbResponse] = await connectionInstance.execute(query, values);
        response.status(200).json({
          message: "Seller created successfully",
          jsonwebtoken: token,
          DBRESPONSE: dbResponse,
          seller_id: userId,
        });
      } catch (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ message: "Creation error" });
      }
    })
    .catch((dbError) => {
      console.error("Database connection error:", dbError);
      response.status(500).json({ message: "Database connection error" });
    });
};

module.exports = {
  handleUserSignIn,
  handleUserSignUp,
};
