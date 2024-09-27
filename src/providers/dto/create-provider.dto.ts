import { Provider } from "../entities/provider.entity";
import { IsOptional,IsString,IsEmail, MaxLength } from "class-validator";
export class CreateProviderDto extends Provider {
   @IsString()
   @MaxLength(100)
    providerName: string;
    @IsEmail()
    @IsString()
   providerEmail: string;
   @IsString()
   @MaxLength(15)
   @IsOptional() 
   providerPhoneNumber: string;
}