import { Body, ConflictException, Controller, NotFoundException, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService) {

    }
    @Post("login")
    async login(@Body() login: LoginDto) {
        const user = await this.authService.findUser(login.email)
        if (!user) {
            throw new NotFoundException("user not found")
        }
        const checkPassword = this.authService.verifyPassword(user.password, login.password)
        if (!checkPassword) {
            throw new UnauthorizedException("Incorrect password")
        }
        const token = this.authService.generateToken(user.id)
        
        return {
            status: 'success',
            data: {
                token: token
            }
        };
    }
    @Post("register")
    async register(@Body() register: RegisterDto) {
        const user = await this.authService.findUser(register.email)
        if (user) {
            throw new ConflictException("user already exist")
        }
        const createUser = await this.authService.createUser(register)

        return createUser
    }
}
