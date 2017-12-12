var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    phone_number: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-*\d{3}-*\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number! Must follow format: 123-123-1234'
        },
        required: [true, 'A phone number is required']
    }
});

var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);