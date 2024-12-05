import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type Blog = {
		title: string;
	  slug: string; 
		date: Date;
		description: string; // for preview
	  content: string; // text content for individual blog page
	  image: string; // url for string in public
	  imageAlt: string; // alt for image
	  comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
	  imageAlt: { type: String, required: true },
		content: { type: String, required: true },
})

export type IComment = {
    user: string;
    content: string;
    date: Date;
}

const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    content: {type: String, required: true},
    date: { type: Date, required: true, default: new Date()}
})

// defining the collection and model
const BlogModel = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default BlogModel;