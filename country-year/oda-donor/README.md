# `oda-donor`

These are needed for the "Different providers, different priorities" visualisation.
The visualisation can be viewed here: http://data.devinit.org:8888/#!/post/oda-donor.
Each file in this folder contains the total ODA from each individual donor to all the recipients it provides ODA to for each year.

You can run the query below to get all the Java Script calls for all the files that are needed here.
All the files are populated from the table `fact.oda` if in current prices & `fact.oda_XXXX` if in constant prices.

The Java Script calls go in the [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js) file.

```
SELECT
    '"country-year/oda-donor/oda-' 
    || from_di_id 
    || '.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) AS \"value\" FROM fact.\"oda_2015\" WHERE from_di_id = '
    || '''' 
    || from_di_id 
    || '''' 
    || ' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",' 
AS "js_query" 
FROM (
    SELECT DISTINCT
        from_di_id
    FROM fact.oda_2015
    ORDER BY from_di_id
) AS "distinct_donor" 
ORDER BY from_di_id;
```

# Conventions

[Coming soon...]

# Issues

1) There are duplicate `di_id`s: https://github.com/devinit/digital-platform/issues/252
 - use [oda-arab-fund-afesd.csv](https://github.com/devinit/digital-platform/blob/development/country-year/oda-donor/oda-arab-fund-afesd.csv) instead of [oda-afesd.csv](https://github.com/devinit/digital-platform/blob/development/graveyard/oda-afesd.csv) (in [graveyard](https://github.com/devinit/digital-platform/blob/development/graveyard/README.md))
 - use [oda-idb-special-fund.csv](https://github.com/devinit/digital-platform/blob/development/country-year/oda-donor/oda-idb-special-fund.csv) instead of [oda-idb-specialfund.csv](https://github.com/devinit/digital-platform/blob/development/graveyard/oda-idb-specialfund.csv) (in [graveyard](https://github.com/devinit/digital-platform/blob/development/graveyard/README.md))
 - use [oda-imf-concessional-trust-funds.csv](https://github.com/devinit/digital-platform/blob/development/country-year/oda-donor/oda-imf-concessional-trust-funds.csv) instead of [oda-imf-concessional-trust-fund.csv](https://github.com/devinit/digital-platform/blob/development/graveyard/oda-imf-concessional-trust-fund.csv) (in [graveyard](https://github.com/devinit/digital-platform/blob/development/graveyard/README.md))
 - do not use [oda-ebrd.csv](https://github.com/devinit/digital-platform/blob/development/graveyard/oda-ebrd.csv) (in [graveyard](https://github.com/devinit/digital-platform/blob/development/graveyard/README.md))
 - do not use [oda-imf.csv](https://github.com/devinit/digital-platform/blob/development/graveyard/oda-imf.csv) (in [graveyard](https://github.com/devinit/digital-platform/blob/development/graveyard/README.md))
