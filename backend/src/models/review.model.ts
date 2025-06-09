import mongoose, { Document, model, Schema } from 'mongoose';

interface ReviewInterface extends Document {
    fromUser: mongoose.Types.ObjectId,
    toUser: mongoose.Types.ObjectId,
    rating: number,
    review?: string,
}

const reviewSchema = new Schema<ReviewInterface>({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        requried: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
    }
}, {
    timestamps: true
});

const Review = model<ReviewInterface> ("Review", reviewSchema);

export default Review;