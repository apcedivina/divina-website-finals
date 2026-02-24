// src/supabase.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vliuygifwhebwkdtclsf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaXV5Z2lmd2hlYndrZHRjbHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2Nzg0OTksImV4cCI6MjA4NzI1NDQ5OX0.Hr3mQBkznthMvefrPORDEPMczMjtSAgf_1z8yKl5wes'

export const supabase = createClient(supabaseUrl, supabaseKey)



