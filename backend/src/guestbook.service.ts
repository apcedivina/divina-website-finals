import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class GuestbookService {
  private supabase;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase environment variables are not defined');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Fetch messages from guestbook table
  async getMessages() {
    const { data, error } = await this.supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  // Insert new guestbook entry
  async addMessage(payload: { name: string; phone?: string; message: string }) {
    const { data, error } = await this.supabase
      .from('guestbook')
      .insert([{ ...payload }]);

    if (error) throw error;
    return data;
  }
}