import { Captain } from "../model/captain.model.js";

const createCaptain = async ({ firstname, lastname, email, password,color,capacity,plate,vechleType }) => {
  // console.log(firstname,lastname,email,password);
  if (!firstname || !email || !password || !color || !capacity || !plate || !vechleType) {
    throw new Error("All fields are required");
  }

  try {
    const captain = await Captain.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vechle:{
        color,
        plate,
        capacity,
        vechleType
      }
    });

    return captain;
  } catch (error) {
    throw new Error(error);
  }
};

export { createCaptain };
