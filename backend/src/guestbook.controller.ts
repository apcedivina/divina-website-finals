import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly svc: GuestbookService) {}

  @Get()
  async list() {
    return this.svc.getMessages();
  }

  @Post()
  async create(@Body() body: { name: string; phone?: string; message: string }) {
    return this.svc.addMessage(body);
  }
}