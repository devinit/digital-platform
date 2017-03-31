# `recipient_profile`

Here is a list of all the tables that were developed to support the recipient profiles. 
All of these tables are stored in the `recipient_profile` shema in the ddw DB on 213.168.251.124.

I will slowly try and clean up:

1) [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js)

2) [concepts.csv](https://github.com/devinit/digital-platform/blob/development/concepts.csv)

to make sure that the data import sends the data to the right file in the right subfolder.

```
                                List of relations
      Schema       |                    Name                    | Type  |  
-------------------+--------------------------------------------+-------+
 recipient_profile | oda_per_capita                             | table |
 recipient_profile | oda_per_capita_2015                        | table |
 recipient_profile | oda_per_capita_excl_non_transfer           | table |
 recipient_profile | oda_per_capita_excl_non_transfer_2015      | table |
 recipient_profile | oda_per_percent_gdp                        | table |
 recipient_profile | oda_per_percent_gdp_excl_non_transfer      | table |
 recipient_profile | oda_per_poor_person                        | table |
 recipient_profile | oda_per_poor_person_2015                   | table |
 recipient_profile | oda_per_poor_person_excl_non_transfer      | table |
 recipient_profile | oda_per_poor_person_excl_non_transfer_2015 | table |
(10 rows)
```

# Conventions

If a table ends in a year, e.g., 2015, this means that the table contain monetary values presented in constant prices from that year, so 2015 = 2015 constant prices.

# Issues

Each table needs to be mapped to the location on the DH where it is being used.

In other locations in this repository & other file names, `per_capita` is shortened to `pc`. Do we shorten here, or expand elsewhere?
