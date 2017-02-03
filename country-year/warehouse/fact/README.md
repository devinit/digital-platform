# `fact`

Here is a list of all the tables that were developed to support the various visualisation displayed by the DH.
All of these tables are stored in the `fact` shema in the ddw DB on 213.168.251.124.

I will slowly try and clean up:

1) [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js)

2) [concepts.csv](https://github.com/devinit/digital-platform/blob/development/concepts.csv)

to make sure that the data import sends the data to the right file in the right subfolder.

```
                    List of relations
 Schema |              Name              | Type  |  
--------+--------------------------------+-------+
 fact   | gdp_pc_usd_current             | table |
 fact   | gdp_pc_usd_current_2015        | table |
 fact   | gdp_usd_current                | table |
 fact   | gdp_usd_current_2015           | table |
 fact   | gni                            | table |
 fact   | gni_2015                       | table |
 fact   | gni_pc_usd_current             | table |
 fact   | gni_pc_usd_current_2015        | table |
 fact   | gni_usd_current                | table |
 fact   | gni_usd_current_2015           | table |
 fact   | in_oda_gross                   | table |
 fact   | in_oda_gross_2015              | table |
 fact   | in_oda_net                     | table |
 fact   | in_oda_net_2015                | table |
 fact   | income_share_bottom_20pc       | table |
 fact   | income_share_by_quintile       | table |
 fact   | income_share_by_quintile_2nd   | table |
 fact   | income_share_by_quintile_3rd   | table |
 fact   | income_share_by_quintile_4th   | table |
 fact   | income_share_by_quintile_5th   | table |
 fact   | life_expectancy_at_birth       | table |
 fact   | maternal_mortality             | table |
 fact   | oda                            | table |
 fact   | oda_2015                       | table |
 fact   | oda_percent_gni                | table |
 fact   | oda_to_ldcs_percent_gni        | table |
 fact   | out_debt_relief                | table |
 fact   | out_debt_relief_2015           | table |
 fact   | out_oda_gross                  | table |
 fact   | out_oda_gross_2015             | table |
 fact   | out_oda_net                    | table |
 fact   | out_oda_net_2015               | table |
 fact   | population_by_age              | table |
 fact   | population_by_age_0_14         | table |
 fact   | population_by_age_15_64        | table |
 fact   | population_by_age_65_and_above | table |
 fact   | population_rural               | table |
 fact   | population_rural_urban         | table |
 fact   | population_total               | table |
 fact   | population_urban               | table |
(40 rows)
```

# Conventions

If a table ends in a year, e.g., 2015, this means that the table contain monetary values presented in constant prices from that year, so 2015 = 2015 constant prices.

# Issues

Each table needs to be mapped to the location on the DH where it is being used.

There are a few naming issues that need to be resolved here:

1) `gdp_pc_usd_current` → `gdp_pc`: 'usd' & 'current' superfluous, data in current prices & US$ is standard

2) `gdp_usd_current` → `gdp`: same as 1)

3) `gni_pc_usd_current` `gni_pc_wb`: same as 1) + clarify source

3) `gni_usd_current` `gni_wb`: same as 1) + clarify source

3) `gni` → `gni_oecd`: clarify source
