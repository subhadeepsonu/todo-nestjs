import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
@Injectable()
export class AuthService {
    constructor(
        readonly prisma: PrismaService
    ) { }
    async findUser(email: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return null
        }

        return user
    }
    async createUser(login: LoginDto) {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(login.password, salt)
        const user = await this.prisma.user.create({
            data: {
                email: login.email,
                password: hashedPassword
            }
        })
        return user
    }
    //need to get from .env
    generateToken(id: string) {
        const token = jwt.sign(id, "secret")
        return token
    }

    verifyPassword(password: string, userPassword: string) {
        const verify = bcrypt.compareSync(userPassword, password)
        if (verify) {
            return true
        }
        return false
    }
}
