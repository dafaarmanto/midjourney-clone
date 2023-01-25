import mongoose from 'mongoose';

const connect = (url) => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('Connected'))
    .catch((err) => console.error(err));
};

export default connect;
