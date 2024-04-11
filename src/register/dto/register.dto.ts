import { IsNotEmpty, IsString } from "class-validator"

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    fio: string
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    phoneNumber: string

    @IsNotEmpty()
    @IsString()
    organization: string

    @IsNotEmpty()
    @IsString()
    post: string

    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsString()
    district: string
}

