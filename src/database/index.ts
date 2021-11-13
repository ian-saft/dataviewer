import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/DATAVIEWER');
mongoose.Promise = global.Promise;

export default mongoose;
