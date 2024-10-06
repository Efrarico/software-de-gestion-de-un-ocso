import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/auth/dto/create-user.dto";

export class updateUserDto extends PartialType(CreateUserDto) {}

