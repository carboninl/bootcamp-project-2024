import mongoose, { Schema } from "mongoose";

export type Project = {
    name: string,
    description: string,
    image: string,
    imageAlt: string,
    url: string,
}

const projectSchema = new Schema<Project>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    imageAlt: {type: String, required: true},
    url: {type: String, required: true},
});

const PortfolioModel = mongoose.models['projects'] || mongoose.model('projects', projectSchema);
export default PortfolioModel;