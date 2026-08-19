import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://wmbtzwjjkcyyugnttqio.supabase.co';
const supabaseKey = 'sb_publishable_wi5GBvABKi2d9ZuEcyWVCQ_ia87YgVv';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
