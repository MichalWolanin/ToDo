import * as mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  title: {type: String,},
  taskStatus: {type: Boolean,},
});

export interface Task extends mongoose.Document{
  id: string;
  title: string;
  taskStatus: boolean;
}
