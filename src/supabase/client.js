import { createClient } from '@supabase/supabase-js';

//datos log SPB
export const client = createClient(
	import.meta.env.VITE_REACT_APP_SUPABASE_URL,
	import.meta.env.VITE_REACT_APP_SUPABASE_KEY
);
