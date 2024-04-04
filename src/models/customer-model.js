const { default: mongoose } = require("mongoose");

const professionalDetailsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
        unique: [true, "username already exists"],
    },
    type: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    department: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    working_days: {
        type: String,
        required: true,
    },
    joining_date: {
        type: String,
        required: true
    },
    office_location: {
        type: String,
        required: true
    }

});

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: [true, "mobile number already exists"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    dob: {
        type: Date,
        required: true,
    },
    marital_status: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip_code: {
        type: String,
        required: true,
    },
    professional_details: professionalDetailsSchema
}, {
    timestamps: true,
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
module.exports = Customer;
