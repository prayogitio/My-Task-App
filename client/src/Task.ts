import * as mongoose from 'mongoose';
export class Task {
    _id: mongoose.Types.ObjectId;
    title: string;
    isDone: boolean;
}