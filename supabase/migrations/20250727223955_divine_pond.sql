/*
  # Create Website Quote Form Responses table

  1. New Tables
    - `website_quote_form_responses`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `property_type` (text)
      - `service_needed` (text)
      - `property_size` (text)
      - `preferred_contact_method` (text)
      - `additional_details` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `website_quote_form_responses` table
    - Add policy for authenticated users to insert their own data
*/

CREATE TABLE IF NOT EXISTS website_quote_form_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_type text NOT NULL,
  service_needed text NOT NULL,
  property_size text,
  preferred_contact_method text NOT NULL DEFAULT 'email',
  additional_details text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE website_quote_form_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert quote requests"
  ON website_quote_form_responses
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all quote requests"
  ON website_quote_form_responses
  FOR SELECT
  TO authenticated
  USING (true);