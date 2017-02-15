# `multilateral_profile`

Here is a list of all the tables that were developed to support the multilateral profiles. 
All of these tables are stored in the `multilateral_profile` shema in the ddw DB on 213.168.251.124.

I will slowly try and clean up:

1) [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js)

2) [concepts.csv](https://github.com/devinit/digital-platform/blob/development/concepts.csv)

to make sure that the data import sends the data to the right file in the right subfolder.

You can run this query to get all the Java Script calls for the all tables in the schema `multilateral_profile`:
```
SELECT
    '"country-year/warehouse/multilateral_profile/' ||
    table_name ||
    '.csv": "' ||
    table_schema ||
    '.\"' ||
    table_name ||
    '\"",'
    AS "js_query"
FROM (
    SELECT
        table_schema
        , table_name
    FROM information_schema.tables
    WHERE table_schema = 'multilateral_profile'
    AND table_name LIKE '%_2015'
) AS "multilateral_profile_files";
```

Used with the .pdfs:

```
                              List of relations
        Schema        |                Name                 | Type  | Owner  
----------------------+-------------------------------------+-------+--------
 multilateral_profile | oda_oof_trend_2015                  | table | donata
 multilateral_profile | oda_oof_flow_type_2015              | table | donata
 multilateral_profile | bundle_2015                         | table | donata
 multilateral_profile | oda_regional_2015                   | table | donata
 multilateral_profile | core_oda_by_donor_2015              | table | donata
 multilateral_profile | earmarked_oda_by_donor_2015         | table | donata
 multilateral_profile | core_earmarked_oda_received_2015    | table | donata
 multilateral_profile | sector_trend_2015                   | table | donata
 multilateral_profile | sector_by_purpose_by_parent_2015    | table | donata
 multilateral_profile | recipient_by_sector_by_parent_2015  | table | donata
(10 rows)
```
Chart under development in the .pdf:
```
                              List of relations
        Schema        |                Name                 | Type  | Owner  
----------------------+-------------------------------------+-------+--------
 multilateral_profile | channel_2015                        | table | donata
 multilateral_profile | oda_revenue_poverty_2015            | table | donata
(2 rows)
```
Not used with the .pdfs & not under development:
```
                              List of relations
        Schema        |                Name                 | Type  | Owner  
----------------------+-------------------------------------+-------+--------
 multilateral_profile | purpose_trend_2015                  | table | donata
 multilateral_profile | purpose_by_bundle_2015              | table | donata
 multilateral_profile | recipient_by_purpose_by_parent_2015 | table | donata
 multilateral_profile | recipient_by_purpose_by_di_id_2015  | table | donata
 multilateral_profile | recipient_by_sector_by_di_id_2015   | table | donata
 multilateral_profile | sector_by_purpose_by_di_id_2015     | table | donata
(6 rows)
 ```

# Conventions

If a table ends in a year, e.g., 2015, this means that the table contain monetary values presented in constant prices from that year, so 2015 = 2015 constant prices.

# Issues

Each table needs to be mapped to the location on the DH where it is being used.
