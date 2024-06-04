import mongoose from "mongoose";

const MONGO_URL =  'mongodb+srv://nasa-api:L5BstBzHyM02q2xc@nasacluster.d8uyum0.mongodb.net/recipe?retryWrites=true&w=majority'


mongoose.connection.once('open', async () => {
  await console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export async function mongoDisconnect() {
  mongoose.disconnect()
}

export const mongoConnect = async => {
  console.log('mongoConnect running')
  mongoose.connect(MONGO_URL)
}
