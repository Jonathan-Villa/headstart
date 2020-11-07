const JWTStrategy = require('passport-jwt').Strategy,ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const options = {}

options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secretIDHeadStart' 

module.exports = passport => {
    passport.use(new JWTStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload)
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.error(err));
    }));
}