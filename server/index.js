require("dotenv").config();
const {express,connectToDataBase,path,cors,autheticationRoute,authorisedRoute,
  handleGetAllProducts
} = require("./Imports.js") ;



connectToDataBase
  .then(() => {


    // EXPRESS APP

    const App = express();

    //  MIDDLEWARE
    App.use(express.json());
    App.use(express.urlencoded({ extended: true }));
    App.use(express.static(path.join(__dirname, "public")));

    App.use(cors({origin: "*",}));
    App.use("/uploads", express.static("./uploads"));
    App.use(autheticationRoute);
    App.use(authorisedRoute);


    // ROUTES
    App.get("/", handleGetAllProducts);


    // SEREVER
    App.listen(process.env.PORT, () => {
      console.log(`SERVER STARTED AT ${process.env.PORT}`);
    });
  })
  
  .catch((error) => {
    console.log(`SOMETHING WENT WRONG :: ${error}`);
  });
