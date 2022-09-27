import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true, //required
      trim: true, //elimina espacios en blanco
    },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false, //valor por defecto
    },
  },
  {
    versionKey: false, //elimina el campo __v
    timestamps: true, //crea los campos createdAt y updatedAt
  }
);

export default model("Task", taskSchema);
