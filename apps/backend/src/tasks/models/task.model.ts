import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: { type: String },
  isDone: { type: Boolean, default: false },
});

export interface Task extends mongoose.Document {
  id: string;
  title: string;
  isDone: boolean;
}
