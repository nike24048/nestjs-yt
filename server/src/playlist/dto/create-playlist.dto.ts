import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePlaylistDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(15, {
        message: 'Name is too long. Maximal length is $constraint1 characters'})
    readonly name: string;
    
    @IsBoolean()
    readonly personal: boolean = false;
    
    // @IsString()
    // readonly added_by: string

    // @IsBoolean()
    // readonly favourite: boolean = false;
}