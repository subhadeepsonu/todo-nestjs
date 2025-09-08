import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class RegisterDto {
    @ApiProperty({
        description: "enter your email",
        example: "xyz@gmail.com"
    })
    @IsNotEmpty()
    @IsString()
    email: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string
}