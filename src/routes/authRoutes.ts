import { Router } from 'express'
import { Auth } from '../controller'
import {validate} from "../middlewares/validate"
import {
    signUpValidationSchema,
    logInValidationSchema,
    logOutValidationSchema,
    refreshTokenValidationSchema
} from "../validations/schemas/auth";

const authRouter = Router();

authRouter.post('/login',validate(logInValidationSchema), Auth.loginUser);
authRouter.post('/signup', validate(signUpValidationSchema),Auth.registerNewUser);
authRouter.get('/logout', validate(logOutValidationSchema),Auth.logOut);
authRouter.get("/users",Auth.getAllUsers);

export { authRouter }