/*
  # Add Property Address field to quote form responses

  1. Changes
    - Add `address` column to `website_quote_form_responses` table
    - Column will be text type, not nullable
    - Add default empty string for existing records

  2. Security
    - No changes to existing RLS policies needed
    - New column inherits existing table permissions
*/

-- Add address column to the existing table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'website_quote_form_responses' AND column_name = 'address'
  ) THEN
    ALTER TABLE website_quote_form_responses ADD COLUMN address text NOT NULL DEFAULT '';
  END IF;
END $$;