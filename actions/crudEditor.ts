"use server";

import { connectMongo } from "@/lib/connectdb";
import Code from "@/lib/models/code";

export const saveCode = async (data: any) => {
    try {
        await connectMongo();
        console.log("data: ", data);
        const savedCode = await Code.create({
            fullCode: data.fullCode!,
            compilerId: data.id!,
        });
        console.log(savedCode);
        if (savedCode) {
            return {
                status: 200,
                message: "Code saved successfully",
                data: savedCode,
            };
        }
        return null;
    } catch (error) {
        console.log(error);
        return { status: 400, message: "Some error occured" };
    }
};

export const getCodeByCompilerId = async (id: string) => {
    try {
        await connectMongo();
        const code = await Code.findOne({ compilerId: id });
        return { status: 200, message: "Data fetch successful", data: code };
    } catch (error) {
        console.log(error);

        return {
            status: 400,
            message: "Something wrong",
            data: null,
        };
    }
};
