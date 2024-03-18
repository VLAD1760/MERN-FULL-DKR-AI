import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("connot connect to MongoDB");
    }
}
async function disconnectFromdatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot Disconnect From MongoDB");
    }
}
export { connectToDatabase, disconnectFromdatabase };
//# sourceMappingURL=connection.js.map