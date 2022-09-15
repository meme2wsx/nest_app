import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  @Render('index')
  root() {
    return {
      title: '.',
      header: '.',
      message: '登録してください'
    }
  }

  @Post('/')
  send(@Body() form: any) {
    return form
  }
}
