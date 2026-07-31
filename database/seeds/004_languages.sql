-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 004_languages.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default languages (ISO 639-1)
-- ============================================================

BEGIN;

INSERT INTO language (
    code,
    name,
    native_name
)
VALUES

('ar', 'Arabic', 'العربية'),
('bg', 'Bulgarian', 'Български'),
('bn', 'Bengali', 'বাংলা'),
('cs', 'Czech', 'Čeština'),
('da', 'Danish', 'Dansk'),
('de', 'German', 'Deutsch'),
('el', 'Greek', 'Ελληνικά'),
('en', 'English', 'English'),
('es', 'Spanish', 'Español'),
('et', 'Estonian', 'Eesti'),
('fa', 'Persian', 'فارسی'),
('fi', 'Finnish', 'Suomi'),
('fr', 'French', 'Français'),
('he', 'Hebrew', 'עברית'),
('hi', 'Hindi', 'हिन्दी'),
('hr', 'Croatian', 'Hrvatski'),
('hu', 'Hungarian', 'Magyar'),
('id', 'Indonesian', 'Bahasa Indonesia'),
('it', 'Italian', 'Italiano'),
('ja', 'Japanese', '日本語'),
('ko', 'Korean', '한국어'),
('lt', 'Lithuanian', 'Lietuvių'),
('lv', 'Latvian', 'Latviešu'),
('ms', 'Malay', 'Bahasa Melayu'),
('nl', 'Dutch', 'Nederlands'),
('no', 'Norwegian', 'Norsk'),
('pl', 'Polish', 'Polski'),
('pt', 'Portuguese', 'Português'),
('ro', 'Romanian', 'Română'),
('ru', 'Russian', 'Русский'),
('sk', 'Slovak', 'Slovenčina'),
('sl', 'Slovenian', 'Slovenščina'),
('sr', 'Serbian', 'Српски'),
('sv', 'Swedish', 'Svenska'),
('ta', 'Tamil', 'தமிழ்'),
('te', 'Telugu', 'తెలుగు'),
('th', 'Thai', 'ไทย'),
('tr', 'Turkish', 'Türkçe'),
('uk', 'Ukrainian', 'Українська'),
('ur', 'Urdu', 'اردو'),
('vi', 'Vietnamese', 'Tiếng Việt'),
('zh', 'Chinese', '中文');

ON CONFLICT (code)
DO NOTHING;

COMMIT;