import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/DaoDucDev')
        console.log('Kết nối thành công!');
    } catch (error) {

    }
}

export default { connect };