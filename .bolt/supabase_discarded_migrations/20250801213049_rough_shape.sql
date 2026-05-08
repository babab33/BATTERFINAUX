/*
  # Add driveway size field to quote form responses

  1. New Columns
    - `driveway_size` (text, nullable)
      - Stores the selected driveway size option
      - Only required when service includes snow removal

  2. Changes
    - Add new column to website_quote_form_responses table
    - Column is nullable since it's only required for snow removal services
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'website_quote_form_responses' AND column_name = 'driveway_size'
  ) THEN
    ALTER TABLE website_quote_form_responses ADD COLUMN driveway_size text;
  END IF;
END $$;