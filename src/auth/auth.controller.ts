import { Body, Controller, Get, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);    
    }
 
    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
}