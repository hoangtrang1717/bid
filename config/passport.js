const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcryptjs");
const db = require("../utils/queries");
const user = require("../models/user_model");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(async function(id, done) {
  const userRouter = await db.detail(
    'SELECT * FROM public."USER" WHERE "USER_ID" = $1 ',
    id
  );
  if (userRouter.rows[0]) {
    done(null, userRouter.rows[0]);
  } else {
    console.log(err);
  }
});

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "username", // form field
      passwordField: "password",
      passReqToCallback: true
    },
    async function(req, username, password, done) {
      const userRouter = await user.getByUserName(username);
      if (userRouter) {
        if (bcrypt.compareSync(password, userRouter.USER_PASSWORD)) {
          return done(null, userRouter.USER_ID);
        } else {
          return done(null, false, { message: "Bad username or password" });
        }
      } else {
        console.log("Fail");
        return done(null, false, { message: "Bad username or password" });
      }
    }
  )
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async function(req, email, password, done) {
      const userRouter = await user.getByUserName(req.body.username);
      if (userRouter) {
        console.log("fail")
        return done(null, false, req.flash('signupMessage', 'Đã có tài khoản.'));
      } else {       
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(password.toString(), salt);
        const userRouter = await user.add(req.body.username, hash, email);
        return done(null, userRouter.USER_ID);
        console.log("Success")
      }
    }
  )
);
