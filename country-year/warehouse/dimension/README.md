# `dimension`

Here is a list of all the reference tables that were developed to support the fact tables in `fact`.
All of these tables are stored in the `dimension` shema in the ddw DB on 213.168.251.124.


```
                                      List of relations
  Schema   |                              Name                              | Type  | Notes
-----------+----------------------------------------------------------------+-------+--------
 dimension | deflator_metadata                                              | table | 
 dimension | di_id                                                          | table |
 dimension | di_id_to_iso_3166_1_map                                        | table |
 dimension | di_itep_channel                                                | table |
 dimension | di_itep_sector                                                 | table |
 dimension | di_oda_aid_bundle                                              | table |
 dimension | imf_weo_country                                                | table |
 dimension | imf_weo_country_to_di_id_map                                   | table |
 dimension | imf_weo_ncu_deflator_2014_2016_apr_pivoted                     | table |
 dimension | imf_weo_ncu_deflator_2014_2016_oct_pivoted                     | table |
 dimension | imf_weo_usd_deflator_2014_2016_apr_pivoted                     | table |
 dimension | imf_weo_usd_deflator_2014_2016_oct_pivoted                     | table |
 dimension | iso_3166_1                                                     | table |
 dimension | master_oecd_deflator                                           | table |
 dimension | master_oecd_deflator_pivoted                                   | table |
 dimension | oecd_crs_channel_code_5_digit                                  | table |
 dimension | oecd_crs_channel_code_5_digit_to_di_itep_channel_map           | table |
 dimension | oecd_crs_channel_code_5_digit_to_itep_channel_web_id_map       | table |
 dimension | oecd_crs_donor                                                 | table |
 dimension | oecd_crs_purpose_code_5_digit                                  | table |
 dimension | oecd_crs_purpose_code_5_digit_to_di_itep_sector_map            | table |
 dimension | oecd_crs_purpose_code_5_digit_to_itep_sector_web_id_map        | table |
 dimension | oecd_crs_recipient                                             | table |
 dimension | oecd_crs_sector_code_3_digit                                   | table |
 dimension | oecd_crs_sector_code_3_digit_to_di_itep_sector_map             | table |
 dimension | oecd_crs_sector_code_3_digit_to_itep_sector_web_id_map         | table |
 dimension | oecd_dac_1_donor                                               | table |
 dimension | oecd_dac_2a_donor                                              | table |
 dimension | oecd_dac_2a_recipient                                          | table |
 dimension | oecd_dac_2b_donor                                              | table |
 dimension | oecd_dac_2b_recipient                                          | table |
 dimension | oecd_deflator_lookup                                           | table |
 dimension | oecd_deflator_pivoted_dac_2016_01_20_non_dac_2016_01_20_dac_1  | table |
 dimension | oecd_deflator_pivoted_dac_2016_01_20_non_dac_2016_01_20_dac_2a | table |
 dimension | oecd_deflator_pivoted_dac_2016_04_20_non_dac_2016_04_20_dac_1  | table |
 dimension | oecd_deflator_pivoted_dac_2016_04_20_non_dac_2016_04_20_dac_2a | table |
 dimension | oecd_deflator_pivoted_dac_2016_07_20_non_dac_2016_07_20_dac_1  | table |
 dimension | oecd_deflator_pivoted_dac_2016_07_20_non_dac_2016_07_20_dac_2a | table |
 dimension | oecd_deflator_pivoted_dac_2016_10_20_non_dac_2016_10_20_crs    | table |
 dimension | oecd_deflator_pivoted_dac_2016_10_20_non_dac_2016_10_20_dac_1  | table |
 dimension | oecd_deflator_pivoted_dac_2016_10_20_non_dac_2016_10_20_dac_2a | table |
 dimension | oecd_deflator_pivoted_dac_2016_10_20_non_dac_2016_10_20_dac_2b | table |
 dimension | oecd_deflator_pivoted_dac_2016_10_20_non_dac_2016_11_21_dac_5  | table |
 dimension | oecd_deflator_pivoted_dac_2016_12_20_non_dac_2016_12_20_crs    | table |
 dimension | oecd_deflator_pivoted_dac_2016_12_20_non_dac_2016_12_20_dac_1  | table |
 dimension | oecd_deflator_pivoted_dac_2016_12_20_non_dac_2016_12_20_dac_2a | table |
 dimension | oecd_deflator_pivoted_dac_2016_12_20_non_dac_2016_12_20_dac_2b | table |
 dimension | oecd_deflator_pivoted_dac_2016_12_20_non_dac_2016_12_20_dac_5  | table |
 dimension | oecd_donor                                                     | table |
 dimension | oecd_donor_to_di_id_map                                        | table |
 dimension | oecd_donor_to_iso_3166_1_map                                   | table |
 dimension | oecd_donor_type                                                | table |
 dimension | oecd_loc_donor                                                 | table |
 dimension | oecd_loc_recipient                                             | table |
 dimension | oecd_recipient                                                 | table |
 dimension | oecd_recipient_income_group                                    | table |
 dimension | oecd_recipient_to_di_id_map                                    | table |
 dimension | oecd_recipient_to_iso_3166_1_map                               | table |
 dimension | time                                                           | table |
 dimension | wb_wdi_country                                                 | table |
 dimension | wb_wdi_country_to_di_id_map                                    | table |
 dimension | wb_wdi_country_to_imf_weo_country_map                          | table |
 dimension | wb_wdi_usd_deflator_2013_2016_01_20_pivoted                    | table |
 dimension | wb_wdi_usd_deflator_2014_2016_04_20_pivoted                    | table |
 dimension | wb_wdi_usd_deflator_2014_2016_07_20_pivoted                    | table |
 dimension | wb_wdi_usd_deflator_2014_2016_10_20_pivoted                    | table |
 dimension | wb_wdi_usd_deflator_2014_2016_12_20_pivoted                    | table |
(67 rows)
```

# Conventions

[Coming soon...]

# Issues

1) Import of these tables fails: https://github.com/devinit/digital-platform/issues/255.
