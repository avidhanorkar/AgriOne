import mongoose, {Document, model, Schema} from "mongoose";

interface LogisticsInterface extends Document {
    providerName: String,
    contactNumber: String,
    assignedOrders: String,
    vehicleType: String,
    status: "assigned" | "in-transit" | "delivered",
    available: Boolean
}

const logisticsModel = new Schema<LogisticsInterface>({
    providerName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    assignedOrders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    }],
    status: {
        type: String,
        enum: ["assigned", "in-transit", "delivered"],
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

const Logisitics = model<LogisticsInterface>("Logistics", logisticsModel);

export default Logisitics;