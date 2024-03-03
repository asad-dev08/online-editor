import { model, models, Schema } from "mongoose";

export interface ICode {
    fullCode: {
        html: String;
        css: String;
        javascript: String;
    };
    compilerId: String;
}
const CodeSchema = new Schema<ICode>(
    {
        fullCode: {
            html: String,
            css: String,
            javascript: String,
        },

        compilerId: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);
const Code = models.Code || model("Code", CodeSchema);
export default Code;
