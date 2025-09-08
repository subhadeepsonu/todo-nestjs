import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGaurdGuard } from 'src/auth-gaurd/auth-gaurd.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiSecurity } from '@nestjs/swagger';


@Controller('auth')
@ApiSecurity('bearer')
@UseGuards(AuthGaurdGuard)
export class AuthController {
    @Post("login")
    login(@Body() login: LoginDto) {
        console.log(login)
        return "login"
    }
    @Post("register")
    register(@Body() rigester: RegisterDto) {
        return "register"
    }
}
