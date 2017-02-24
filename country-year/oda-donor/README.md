# `oda-donor`

These are needed for the "Different providers, different priorities" visualisation.
The visualisation can be viewed here: http://data.devinit.org:8888/#!/post/oda-donor.
Each file in this folder contains the total ODA from each individual donor to all the recipients it provides ODA to for each year.

You can run the query below to get all the Java Script calls for all the files that are needed here.
All the files are populated from the table `fact.oda` if in current prices & `fact.oda_XXXX` if in constant prices.

The Java Script calls go in the [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js) file.

```
SELECT
    '"country-year/oda-donor/oda-' ||
    from_di_id ||
    '.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = ' ||
    '''' ||
    from_di_id ||
    '''' ||
    ' GROUP BY to_di_id, year ODER BY year DESC, to_di_id) sq",' 
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
