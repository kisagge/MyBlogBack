const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;
const collectionName = "skills";

const skillSchema = new Schema(
  {
    skillId: {
      type: Number,
      default: 0,
    },
    skillName: {
      type: String,
      default: "",
    },
  },
  {
    collection: collectionName,
  }
);

skillSchema.plugin(AutoIncrement, { inc_field: "skillId" });

module.exports = mongoose.model("Skill", skillSchema);
