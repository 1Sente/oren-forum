import { IsNotEmpty, IsString } from "class-validator"

export class GenerateCodeDto {
    @IsNotEmpty()
    @IsString()
    url: string

    @IsNotEmpty()
    @IsString()
    id: string
}