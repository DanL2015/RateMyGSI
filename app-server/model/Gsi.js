const mongoose = require("mongoose");

const GsiSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false 
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

// export model gsi with GsiSchema
module.exports = mongoose.model('GSI', GsiSchema)
