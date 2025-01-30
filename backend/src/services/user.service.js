import { User } from "../model/user.model.js"


const createUser = async({firstname,lastname,email,password}) => {


    // console.log(firstname,lastname,email,password);
    if(!firstname || !email || !password){
        throw new Error("All fields are required")
    }

    try {
        const user = await User.create({
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        });

        return user
    } catch (error) {
        throw new Error(error)
    }


}

export {createUser}