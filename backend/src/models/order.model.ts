import mongoose, { Document, model, Schema } from 'mongoose';

interface Product {
    productId: mongoose.Types.ObjectId,
    quantity: number,
    unitPrice: number,
}

interface Location {
    state: string;
    district: string;
    pincode: string;
}

interface OrderInterface extends Document {
    buyerId: mongoose.Types.ObjectId,
    product: Product,
    totalAmount: number,
    orderStatus: "pending" | "confirmed" | "shipped" | "delivered",
    paymentStatus: "pending" | "paid" | "failed",
    deliveryAddress: Location,
    assignedLogisticsId: mongoose.Types.ObjectId,
}

const orderSchema = new Schema<OrderInterface> ({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    totalAmount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered"],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        required: true
    },
    deliveryAddress: {
        state: {
            type: String, 
            required: true
        },
        district: {
            type: String, 
            required: true
        },
        pincode: {
            type: String, 
            required: true
        },
    },
    assignedLogisticsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logistics',
        required: true
    },
})

const Order = model<OrderInterface> ("Orders", orderSchema);

export default Order;
