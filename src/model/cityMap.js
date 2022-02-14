const mongoose = require("mongoose");
const provgeo = require("./provMap");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: {
    type: Number,
    ref: provgeo,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const citygeo = mongoose.model("citylatlong", CitySchema, "CityLatLong");
module.exports = citygeo;
