# `donor_profile`

Here is a list of all the tables that were developed to support the donor profiles. 
All of these tables are stored in the `donor_profile` shema in the ddw DB on 213.168.251.124.

I will slowly try and clean up:

1) [datamap_raw.js](https://github.com/devinit/digital-platform/blob/development/nodejs/js/datamap_raw.js)

2) [concepts.csv](https://github.com/devinit/digital-platform/blob/development/concepts.csv)

to make sure that the data import sends the data to the right file in the right subfolder.

Automated:

```
                      List of relations
    Schema     |            Name               | Type  | Notes  
---------------+-------------------------------+-------+--------
 donor_profile | disbursement_by_region        | table | 
 donor_profile | disbursement_by_region_2015   | table | 
 donor_profile | donor_bundle                  | table | 
 donor_profile | donor_bundle_2015             | table | 
 donor_profile | gni_per_capita                | table | 
 donor_profile | gni_per_capita_2015           | table | 
 donor_profile | loans_grants                  | table | 
 donor_profile | loans_grants_2015             | table | 
 donor_profile | oda_per_capita                | table | 
 donor_profile | oda_per_capita_2015           | table | 
 donor_profile | recipient_bundle              | table | 
 donor_profile | recipient_bundle_2015         | table | 
 donor_profile | sectors_over_time             | table | 
 donor_profile | sectors_over_time_2015        | table | 
 ```
 Manual:
 ```
                      List of relations
    Schema     |            Name                    | Type  | Notes  
---------------+------------------------------------+-------+--------
 donor_profile | oda_revenue_poverty                | table | formerly `bubble_chart`
 donor_profile | intl_resource_mix_by_region        | table | formerly `d14_region`
 donor_profile | intl_resource_flows_targeting      | table | formerly `d15_flow`
 ```
 Reference and/or obsolete:
 ```
                       List of relations
    Schema     |            Name               | Type  | Notes  
---------------+-------------------------------+-------+--------
 donor_profile | d15_depth_of_poverty          | table | DO NOT USE, USE `data_series.depth_of_extreme_poverty_190` INSTEAD
 donor_profile | dac2a_name_to_dac1_name_map   | table | DO NOT USE
 donor_profile | recipient_to_region_map       | table | DO NOT USE
```

# Conventions

If a table ends in a year, e.g., 2015, this means that the table contain monetary values presented in constant prices from that year, so 2015 = 2015 constant prices.

# Issues

Each table needs to be mapped to the location on the DH where it is being used.
