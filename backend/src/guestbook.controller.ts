import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly svc: GuestbookService) {}

  // Fetch guestbook messages
  @Get()
  async list() {
    return this.svc.getMessages();
  }

  // Create a new guestbook message
  @Post()
  async create(@Body() body: { name: string; phone?: string; message: string }) {
    return this.svc.addMessage(body);
  }
}