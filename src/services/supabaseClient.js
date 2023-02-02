import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mthjirpgrvnwjlaqrjdb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aGppcnBncnZud2psYXFyamRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MzkxNzYsImV4cCI6MTk5MDUxNTE3Nn0.EJk2O21FUlVbTBSUlJCAxDxBQWCNq3aIP2aj85ljQEU"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
