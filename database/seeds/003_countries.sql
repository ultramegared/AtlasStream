-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 003_countries.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default countries (ISO-3166)
-- ============================================================

BEGIN;

INSERT INTO country (
    iso2,
    iso3,
    name
)
VALUES

('AR','ARG','Argentina'),
('AU','AUS','Australia'),
('AT','AUT','Austria'),
('BE','BEL','Belgium'),
('BO','BOL','Bolivia'),
('BR','BRA','Brazil'),
('CA','CAN','Canada'),
('CL','CHL','Chile'),
('CN','CHN','China'),
('CO','COL','Colombia'),
('CR','CRI','Costa Rica'),
('CU','CUB','Cuba'),
('CZ','CZE','Czech Republic'),
('DK','DNK','Denmark'),
('DO','DOM','Dominican Republic'),
('EC','ECU','Ecuador'),
('EG','EGY','Egypt'),
('SV','SLV','El Salvador'),
('FI','FIN','Finland'),
('FR','FRA','France'),
('DE','DEU','Germany'),
('GR','GRC','Greece'),
('GT','GTM','Guatemala'),
('HN','HND','Honduras'),
('HK','HKG','Hong Kong'),
('HU','HUN','Hungary'),
('IS','ISL','Iceland'),
('IN','IND','India'),
('ID','IDN','Indonesia'),
('IE','IRL','Ireland'),
('IL','ISR','Israel'),
('IT','ITA','Italy'),
('JP','JPN','Japan'),
('KR','KOR','South Korea'),
('LU','LUX','Luxembourg'),
('MY','MYS','Malaysia'),
('MX','MEX','Mexico'),
('MA','MAR','Morocco'),
('NL','NLD','Netherlands'),
('NZ','NZL','New Zealand'),
('NI','NIC','Nicaragua'),
('NG','NGA','Nigeria'),
('NO','NOR','Norway'),
('PA','PAN','Panama'),
('PY','PRY','Paraguay'),
('PE','PER','Peru'),
('PH','PHL','Philippines'),
('PL','POL','Poland'),
('PT','PRT','Portugal'),
('PR','PRI','Puerto Rico'),
('RO','ROU','Romania'),
('RU','RUS','Russia'),
('SA','SAU','Saudi Arabia'),
('SG','SGP','Singapore'),
('ZA','ZAF','South Africa'),
('ES','ESP','Spain'),
('SE','SWE','Sweden'),
('CH','CHE','Switzerland'),
('TW','TWN','Taiwan'),
('TH','THA','Thailand'),
('TR','TUR','Turkey'),
('UA','UKR','Ukraine'),
('AE','ARE','United Arab Emirates'),
('GB','GBR','United Kingdom'),
('US','USA','United States'),
('UY','URY','Uruguay'),
('VE','VEN','Venezuela'),
('VN','VNM','Vietnam');

ON CONFLICT (iso2)
DO NOTHING;

COMMIT;