"use server";

import { connectMongo } from "@/lib/connectdb";
import Code from "@/lib/models/code";

export const saveCode = async (data: any) => {
  try {
    await connectMongo();
    const code = await Code.findOne({ compilerId: data.id });
    if (!code) {
      const savedCode = await Code.create({
        fullCode: data.fullCode!,
        compilerId: data.id!,
      });
      if (savedCode) {
        return {
          status: 200,
          message: "Code saved successfully",
          data: savedCode,
        };
      }
    } else {
      const savedCode = await Code.updateOne(
        { _id: code._id },
        {
          fullCode: data.fullCode!,
          compilerId: data.id!,
        }
      );
      if (savedCode) {
        return {
          status: 200,
          message: "Code updated successfully",
          data: savedCode,
        };
      }
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
    console.log(code);
    if (code) {
      return {
        status: 200,
        message: "Data fetch successful",
        data: code.fullCode,
      };
    }
    return {
      status: 200,
      message: "No existing code found with this id",
      data: code || null,
    };
  } catch (error) {
    console.log(error);

    return {
      status: 400,
      message: "Something wrong",
      data: null,
    };
  }
};
