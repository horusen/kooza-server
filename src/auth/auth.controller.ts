import { CreateBusinessDto } from './../business/dto/create-business.dto';
import { JwtOauthGuard } from './guard/jwt-oauth/jwt-oauth.guard';
import { LinkedinOauthGuard } from './guard/linkedin-oauth/linkedin-oauth.guard';
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guard/google-oauth/google-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(public authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createBusinessDTO: CreateBusinessDto) {
    return await this.authService.signup(createBusinessDTO);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: Request) {
    return this.authService.login(req['user']);
  }

  @UseGuards(JwtOauthGuard)
  @Get()
  jwtRedirect(@Request() req: Request) {
    return req['user'];
  }

  /**
   * Initiate the linkedin authentication API call
   * @param req
   */
  @Get('linkedin-oauth')
  @UseGuards(LinkedinOauthGuard)
  linkedin(@Request() req: Request) {}

  /**
   * Linkedin authentication api call redirect to this route.
   * @param req
   * @returns jwt token
   */
  // @Get('linkedin-redirect')
  // @UseGuards(LinkedinOauthGuard)
  // async linkedinRedirect(@Request() req: Request) {
  //   return this.authService.login(req['user']);
  // }

  /**
   * Google authentication
   */

  /**
   * Initiate the google authentication API call
   * @param req
   */
  @Get('google-oauth')
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Request() req: Request) {}

  /**
   * Google authentication api call redirect to this route.
   * @param req
   * @returns jwt token
   */
  // @Get('google-redirect')
  // @UseGuards(GoogleOauthGuard)
  // async googleRedirect(@Request() req: Request) {
  //   return this.authService.login(req['user']);
  // }
}
