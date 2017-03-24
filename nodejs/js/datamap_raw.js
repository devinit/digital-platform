exports.csv=
{

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Start with the data in the tables in the `fact` schema
 // They are automated & maintained (updated 4 times a year) & used in several locations on the DH site
 // Where relevant, fetch the data from the constant price tables as the current price versions are not being used
 // The full list of all the table in the `fact` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/fact/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/warehouse/fact/gdp_usd_current.csv": "fact.\"gdp_usd_current\"", // WB
 "country-year/warehouse/fact/gdp_usd_2015.csv": "fact.\"gdp_usd_2015\"", // WB
 "country-year/warehouse/fact/gdp_pc_usd_current.csv": "fact.\"gdp_pc_usd_current\"", // WB
 "country-year/warehouse/fact/gdp_pc_usd_2015.csv": "fact.\"gdp_pc_usd_2015\"", // WB
 "country-year/warehouse/fact/gni_usd_current.csv": "fact.\"gni_usd_current\"", // WB
 "country-year/warehouse/fact/gni_usd_2015.csv": "fact.\"gni_usd_2015\"", // WB
 "country-year/warehouse/fact/gni_pc_usd_current.csv": "fact.\"gni_pc_usd_current\"", // WB
 "country-year/warehouse/fact/gni_pc_usd_2015.csv": "fact.\"gni_pc_usd_2015\"", // WB
 "country-year/warehouse/fact/gni.csv": "fact.\"gni\"", // OECD
 "country-year/warehouse/fact/gni_2015.csv": "fact.\"gni_2015\"", // OECD
 "country-year/warehouse/fact/in_oda_gross_2015.csv": "fact.\"in_oda_gross_2015\"",
 "country-year/warehouse/fact/in_oda_net_2015.csv": "fact.\"in_oda_net_2015\"",
 "country-year/warehouse/fact/income_share_bottom_20pc.csv": "fact.\"income_share_bottom_20pc\"",
 "country-year/warehouse/fact/income_share_by_quintile.csv": "fact.\"income_share_by_quintile\"",
 "country-year/warehouse/fact/income_share_by_quintile_2nd.csv": "fact.\"income_share_by_quintile_2nd\"",
 "country-year/warehouse/fact/income_share_by_quintile_3rd.csv": "fact.\"income_share_by_quintile_3rd\"",
 "country-year/warehouse/fact/income_share_by_quintile_4th.csv": "fact.\"income_share_by_quintile_4th\"",
 "country-year/warehouse/fact/income_share_by_quintile_5th.csv": "fact.\"income_share_by_quintile_5th\"",
 "country-year/warehouse/fact/life_expectancy_at_birth.csv": "fact.\"life_expectancy_at_birth\"",
 "country-year/warehouse/fact/maternal_mortality.csv": "fact.\"maternal_mortality\"",
 "country-year/warehouse/fact/oda_percent_gni.csv": "fact.\"oda_percent_gni\"",
 "country-year/warehouse/fact/oda_to_ldcs_percent_gni.csv": "fact.\"oda_to_ldcs_percent_gni\"",
 "country-year/warehouse/fact/out_debt_relief_2015.csv": "fact.\"out_debt_relief_2015\"",
 "country-year/warehouse/fact/out_oda_gross_2015.csv": "fact.\"out_oda_gross_2015\"",
 "country-year/warehouse/fact/out_oda_net_2015.csv": "fact.\"out_oda_net_2015\"",
 "country-year/warehouse/fact/population_by_age.csv": "fact.\"population_by_age\"",
 "country-year/warehouse/fact/population_by_age_0_14.csv": "fact.\"population_by_age_0_14\"",
 "country-year/warehouse/fact/population_by_age_15_64.csv": "fact.\"population_by_age_15_64\"",
 "country-year/warehouse/fact/population_by_age_65_and_above.csv": "fact.\"population_by_age_65_and_above\"",
 "country-year/warehouse/fact/population_rural.csv": "fact.\"population_rural\"",
 "country-year/warehouse/fact/population_rural_urban.csv": "fact.\"population_rural_urban\"",
 "country-year/warehouse/fact/population_total.csv": "fact.\"population_total\"",
 "country-year/warehouse/fact/population_urban.csv": "fact.\"population_urban\"",
 // Break the data from the `fact.oda_2015` table up into several files as the table contains 3,000,000+ rows
 //"country-year/warehouse/fact/oda_2015.csv": "fact.\"oda_2015\"", // This will dump all 3,000,000+ rows in one file!
 "country-year/warehouse/fact/oda.2015.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2015) sq",
 "country-year/warehouse/fact/oda.2014.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2014) sq",
 "country-year/warehouse/fact/oda.2013.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2013) sq",
 "country-year/warehouse/fact/oda.2012.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2012) sq",
 "country-year/warehouse/fact/oda.2011.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2011) sq",
 "country-year/warehouse/fact/oda.2010.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2010) sq",
 "country-year/warehouse/fact/oda.2009.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2009) sq",
 "country-year/warehouse/fact/oda.2008.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2008) sq",
 "country-year/warehouse/fact/oda.2007.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2007) sq",
 "country-year/warehouse/fact/oda.2006.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2006) sq",
 "country-year/warehouse/fact/oda.2005.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2005) sq",
 "country-year/warehouse/fact/oda.2004.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2004) sq",
 "country-year/warehouse/fact/oda.2003.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2003) sq",
 "country-year/warehouse/fact/oda.2002.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2002) sq",
 "country-year/warehouse/fact/oda.2001.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2001) sq",
 "country-year/warehouse/fact/oda.2000.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2000) sq",
 "country-year/warehouse/fact/oda.1999_1973.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year<=1999) sq",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // The get the data from the tables in the `dimension` schema
 // These reference tables are automated & maintained (updated 4 times a year)
 // The full list of all the table in the `dimension` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/fact/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/warehouse/dimension/iso_3166_1.csv": "dimension.\"iso_3166_1\"",
 // This table trips the import up. Can't see an obvious reason why.
 // Anything to do with the fact that it is called "di_id"?
 "country-year/warehouse/dimension/di_id.csv": "(SELECT * FROM dimension.\"di_id\") sq",
 "country-year/warehouse/dimension/di_id_to_iso_3166_1_map.csv": "(SELECT * FROM dimension.\"di_id_to_iso_3166_1_map\") sq",
 "country-year/warehouse/dimension/oecd_donor.csv": "dimension.\"oecd_donor\"",
 "country-year/warehouse/dimension/oecd_loc_donor.csv": "dimension.\"oecd_loc_donor\"",
 "country-year/warehouse/dimension/oecd_crs_donor.csv": "dimension.\"oecd_crs_donor\"",
 "country-year/warehouse/dimension/oecd_dac_1_donor.csv": "dimension.\"oecd_dac_1_donor\"",
 "country-year/warehouse/dimension/oecd_dac_2a_donor.csv": "dimension.\"oecd_dac_2a_donor\"",
 "country-year/warehouse/dimension/oecd_dac_2b_donor.csv": "dimension.\"oecd_dac_2b_donor\"",
 "country-year/warehouse/dimension/oecd_donor_to_di_id_map.csv": "dimension.\"oecd_donor_to_di_id_map\"",
 "country-year/warehouse/dimension/oecd_donor_to_iso_3166_1_map.csv": "dimension.\"oecd_donor_to_iso_3166_1_map\"",
 "country-year/warehouse/dimension/oecd_donor_type.csv": "dimension.\"oecd_donor_type\"",
 "country-year/warehouse/dimension/oecd_recipient.csv": "dimension.\"recipient\"",
 "country-year/warehouse/dimension/oecd_loc_recipient.csv": "dimension.\"oecd_loc_recipient\"",
 "country-year/warehouse/dimension/oecd_crs_recipient.csv": "dimension.\"oecd_crs_recipient\"",
 "country-year/warehouse/dimension/oecd_dac_2a_recipient.csv": "dimension.\"oecd_dac_2a_recipient\"",
 "country-year/warehouse/dimension/oecd_dac_2b_recipient.csv": "dimension.\"oecd_dac_2b_recipient\"",
 "country-year/warehouse/dimension/oecd_recipient_to_di_id_map.csv": "dimension.\"oecd_recipient_to_di_id_map\"",
 "country-year/warehouse/dimension/oecd_recipient_to_iso_3166_1_map.csv": "dimension.\"oecd_recipient_to_iso_3166_1_map\"",
 "country-year/warehouse/dimension/oecd_recipient_income_group.csv": "dimension.\"oecd_recipient_income_group\"",
 "country-year/warehouse/dimension/imf_weo_country.csv": "dimension.\"imf_weo_country\"",
 "country-year/warehouse/dimension/imf_weo_country_to_di_id_map.csv": "dimension.\"imf_weo_country_to_di_id_map\"",
 "country-year/warehouse/dimension/wb_wdi_country.csv": "dimension.\"wb_wdi_country\"",
 "country-year/warehouse/dimension/wb_wdi_country_to_di_id_map.csv": "dimension.\"wb_wdi_country_to_di_id_map\"",
 "country-year/warehouse/dimension/wb_wdi_country_to_imf_weo_country_map.csv": "dimension.\"wb_wdi_country_to_imf_weo_country_map\""
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `recipient_profile` schema
 // They are automated & maintained (updated 4 times a year) & used mostly for the country profiles on the DH site where a country is a recipient
 // Where relevant, fetch the data from the constant price tables as the current price versions are not being used
 // That's a total of 6 at the moment
 // The full list of all the table in the `recipient_profile` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/recipient_profile/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/warehouse/recipient_profile/oda_per_capita_2015.csv": "recipient_profile.\"oda_per_capita_2015\"",
 "country-year/warehouse/recipient_profile/oda_per_capita_excl_non_transfer_2015.csv": "recipient_profile.\"oda_per_capita_excl_non_transfer_2015\"",
 "country-year/warehouse/recipient_profile/oda_per_percent_gdp.csv": "recipient_profile.\"oda_per_percent_gdp\"",
 "country-year/warehouse/recipient_profile/oda_per_percent_gdp_excl_non_transfer.csv": "recipient_profile.\"oda_per_percent_gdp_excl_non_transfer\"",
 "country-year/warehouse/recipient_profile/oda_per_poor_person_2015.csv": "recipient_profile.\"oda_per_poor_person_2015\"",
 "country-year/warehouse/recipient_profile/oda_per_poor_person_excl_non_transfer_2015.csv": "recipient_profile.\"oda_per_poor_person_excl_non_transfer_2015\"",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `donor_profile` schema
 // They are automated & maintained (updated 4 times a year) & used mostly for the country profiles on the DH site where a country is a donor
 // Where relevant, fetch the data from the constant price tables as the current price versions are not being used
 // The full list of all the table in the `donor_profile` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/donor_profile/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 // Automated
 /*
 "country-year/warehouse/donor_profile/disbursement_by_region_2015.csv": "donor_profile.\"disbursement_by_region_2015\"",
 "country-year/warehouse/donor_profile/donor_bundle_2015.csv": "donor_profile.\"donor_bundle_2015\"",
 "country-year/warehouse/donor_profile/gni_per_capita_2015.csv": "donor_profile.\"gni_per_capita_2015\"",
 "country-year/warehouse/donor_profile/loans_grants_2015.csv": "donor_profile.\"loans_grants_2015\"",
 "country-year/warehouse/donor_profile/oda_per_capita_2015.csv": "donor_profile.\"oda_per_capita_2015\"",
 "country-year/warehouse/donor_profile/recipient_bundle_2015.csv": "donor_profile.\"recipient_bundle_2015\"",
 "country-year/warehouse/donor_profile/sectors_over_time_2015.csv": "donor_profile.\"sectors_over_time_2015\"",
 */

 // Manual
 /*
 "country-year/warehouse/donor_profile/oda_revenue_poverty.csv": "donor_profile.\"oda_revenue_poverty\"", // Formerly `bubble_chart_201x`
 "country-year/warehouse/donor_profile/intl_resource_mix_by_region.csv": "donor_profile.\"intl_resource_mix_by_region\"", // Formerly `d14_region`
 "country-year/warehouse/donor_profile/intl_resource_flows_targeting.csv": "donor_profile.\"intl_resource_flows_targeting\"", // Formerly `d15_flow`
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `multilateral_profile` schema
 // They are automated & maintained (updated 4 times a year) & used for the multilateral profiles that are under development for the DH site
 // Where relevant, fetch the data from the constant price tables as the current price versions are not being used
 // The full list of all the table in the `donor_profile` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/multilateral_profile/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 // Reference table
 /*
 "country-year/warehouse/multilateral_profile/master_multilateral_donor.csv": "multilateral_profile.\"master_multilateral_donor\"",
 "country-year/warehouse/multilateral_profile/mums_multilateral_donor.csv": "multilateral_profile.\"mums_multilateral_donor\"",
 */

 // Currently in use with the .pdf profile
 /*
 "country-year/warehouse/multilateral_profile/oda_oof_trend_2015.csv": "multilateral_profile.\"oda_oof_trend_2015\"",
 "country-year/warehouse/multilateral_profile/oda_oof_flow_type_2015.csv": "multilateral_profile.\"oda_oof_flow_type_2015\"",
 "country-year/warehouse/multilateral_profile/bundle_2015.csv": "multilateral_profile.\"bundle_2015\"",
 "country-year/warehouse/multilateral_profile/oda_regional_2015.csv": "multilateral_profile.\"oda_regional_2015\"",
 "country-year/warehouse/multilateral_profile/core_oda_by_donor_2015.csv": "multilateral_profile.\"core_oda_by_donor_2015\"",
 "country-year/warehouse/multilateral_profile/earmarked_oda_by_donor_2015.csv": "multilateral_profile.\"earmarked_oda_by_donor_2015\"",
 "country-year/warehouse/multilateral_profile/core_earmarked_oda_received_2015.csv": "multilateral_profile.\"core_earmarked_oda_received_2015\"",
 "country-year/warehouse/multilateral_profile/sector_trend_2015.csv": "multilateral_profile.\"sector_trend_2015\"",
 "country-year/warehouse/multilateral_profile/sector_by_purpose_by_parent_2015.csv": "multilateral_profile.\"sector_by_purpose_by_parent_2015\"",
 "country-year/warehouse/multilateral_profile/recipient_by_sector_by_parent_2015.csv": "multilateral_profile.\"recipient_by_sector_by_parent_2015\"",
 */

 // The .pdf profile charts that will use these are under development
 /*
 "country-year/warehouse/multilateral_profile/channel_2015.csv": "multilateral_profile.\"channel_2015\"", // Automated
 "country-year/warehouse/multilateral_profile/oda_revenue_poverty.csv": "multilateral_profile.\"oda_revenue_poverty\"", // Manual
 */

 // The .pdf profile charts that will use these are under development
 /*
 "country-year/warehouse/multilateral_profile/purpose_trend_2015.csv": "multilateral_profile.\"purpose_trend_2015\"",
 "country-year/warehouse/multilateral_profile/purpose_by_bundle_2015.csv": "multilateral_profile.\"purpose_by_bundle_2015\"",
 "country-year/warehouse/multilateral_profile/recipient_by_purpose_by_parent_2015.csv": "multilateral_profile.\"recipient_by_purpose_by_parent_2015\"",
 "country-year/warehouse/multilateral_profile/recipient_by_purpose_by_di_id_2015.csv": "multilateral_profile.\"recipient_by_purpose_by_di_id_2015\"",
 "country-year/warehouse/multilateral_profile/recipient_by_sector_by_di_id_2015.csv": "multilateral_profile.\"recipient_by_sector_by_di_id_2015\"",
 "country-year/warehouse/multilateral_profile/sector_by_purpose_by_di_id_2015.csv": "multilateral_profile.\"sector_by_purpose_by_di_id_2015\"",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `south_south_cooperation` schema
 // They are automated & maintained (updated 4 times a year) & used mostly for the country profiles on the DH where a country is classified as a SSC country
 // Please contact @Duncan-Knox for a list of the SSC countries
 // Where relevant, fetch the data from the constant price tables as the current price versions are not being used
 // The full list of all the table in the `donor_profile` schema is here:
 // https://github.com/devinit/digital-platform/blob/development/country-year/warehouse/south_south_cooperation/README.md
 //
 ///////////////////////////////////////////////////////////////////////////////

 //[Coming soon...]

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `data_series` schema
 // Most of these have not been updated in over 2 years & are not maintained
 // They are manually put together by the analysts to support the various visualisation displayed by the DH
 //
 ///////////////////////////////////////////////////////////////////////////////
 
 /*
 "country-year/agricultural-census.csv": "data_series.\"agricultural_census\"",
 "country-year/avg-income-of-extreme-poor.csv": "data_series.\"avg_income_of_extreme_poor\"",
 "country-year/civil-reg-births.csv": "data_series.\"civil_reg_births\"",
 "country-year/civil-reg-deaths.csv": "data_series.\"civil_reg_deaths\"",
 "country-year/climate-vulnerability.csv": "data_series.\"climate_vulnerability\"",
 "country-year/dac-oda-percent-gni.csv": "data_series.\"dac_oda_percent_gni\"",
 // Automated version: "country-year/fact/oda-percent-gni.csv": "fact.\"oda_percent_gni\"",
 "country-year/dac-oda-to-ldcs-pc-gni.csv": "data_series.\"dac_oda_to_ldcs_pc_gni\"",
 // Automated version: "country-year/fact/oda-to-ldcs-percent-gni.csv": "fact.\"oda_to_ldcs_percent_gni\"",
 "country-year/depth-of-extreme-poverty.csv": "data_series.\"depth_of_extreme_poverty\"",
 "country-year/depth-of-extreme-poverty-190.csv": "data_series.\"depth_of_extreme_poverty_190\"",
 "country-year/dev-coop-in-detail.csv": "data_series.\"dev_coop_in_detail\"",
 "country-year/dfis-out.csv": "data_series.\"dfis_out\"",
 "country-year/dfis-out-dev.csv": "data_series.\"dfis_out_dev\"",
 "country-year/disbursement_by_region.csv": "data_series.\"disbursement_by_region\"",
 "country-year/disbursement_by_region_2012.csv": "data_series.\"disbursement_by_region_2012\"",
 "country-year/displacement.csv": "data_series.\"displacement\"",
 */
 "country-year/domestic.csv": "data_series.\"domestic\"",
 /*
 "country-year/domestic-sectors.csv": "data_series.\"domestic_sectors\"",
 "country-year/educ-mis.csv": "data_series.\"educ_mis\"",
 "country-year/evi.csv": "data_series.\"evi\"",
 "country-year/fdi-out.csv": "data_series.\"fdi_out\"",
 "country-year/fdi-percent-gdp.csv": "data_series.\"fdi_percent_gdp\"",
 "country-year/fdi-pp.csv": "data_series.\"fdi_pp\"",
 "country-year/forgotten-crisis.csv": "data_series.\"forgotten_crisis\"",
 "country-year/fragile-states.csv": "data_series.\"fragile_states\"",
 "country-year/general-gov-health-exp.csv": "data_series.\"general_gov_health_exp\"",
 //Ranamed: "country-year/gov-revenue-pc-gdp.csv": "data_series.\"gov_revenue_pc_gdp\"",
 "country-year/govt-revenue-pc-gdp.csv": "data_series.\"govt_revenue_pc_gdp\"",
 //Renamed: "country-year/govtspend-pc.csv": "data_series.\"govtspend_pc\"",
 "country-year/govt-spend-pc.csv": "data_series.\"govt_spend_pc\"",
 //Ranamed: "country-year/grants-pct-totalrevenue.csv": "data_series.\"grants_pct_totalrevenue\"",
 "country-year/grants-percent-total-revenue.csv": "data_series.\"grants_percent_total_revenue\"",
 "country-year/health-mis.csv": "data_series.\"health_mis\"",
 "country-year/human-hazard.csv": "data_series.\"human_hazard\"",
 "country-year/in-ha.csv": "data_series.\"in_ha\"",
 "country-year/in-oda-gross.csv": "data_series.\"in_oda_gross\"",
 // Automated version: "country-year/fact/in-oda-gross.csv": "fact.\"in_oda_gross_2015\"",
 "country-year/in-oda-net.csv": "data_series.\"in_oda_net\"",
 // Automated version: "country-year/fact/in-oda-net.csv": "fact.\"in_oda_net_2015\"",
 "country-year/in-oof-gross.csv": "data_series.\"in_oof_gross\"",
 "country-year/intl-flows-donors.csv": "data_series.\"intl_flows_donors\"",
 "country-year/intl-flows-recipients.csv": "data_series.\"intl_flows_recipients\"",
 "country-year/intl-outflows-donors.csv": "data_series.\"intl_outflows_donors\"",
 "country-year/intl-resources-total-percent-gdp.csv": "data_series.\"intl_resources_total_percent_gdp\"",
 "country-year/intlresources-total.csv": "data_series.\"intlresources_total\"",
 "country-year/largest-intl-flow.csv": "data_series.\"largest_intl_flow\"",
 "country-year/latest-census.csv": "data_series.\"latest_census\"",
 "country-year/latest-hh-survey.csv": "data_series.\"latest_hh_survey\"",
 "country-year/long-debt-disbursement-in.csv": "data_series.\"long_debt_disbursement_in\"",
 "country-year/long-debt-net-official-in.csv": "data_series.\"long_debt_net_official_in\"",
 "country-year/natural-hazard.csv": "data_series.\"natural_hazard\"",
 //Renamed: "country-year/non-grant-revenue-ppp-capita.csv": "data_series.\"non_grant_revenue_ppp_capita\"",
 "country-year/non-grant-revenue-ppp-pc.csv": "data_series.\"non_grant_revenue_ppp_pc\"",
 "country-year/number-of-surveys.csv": "data_series.\"number_of_surveys\"",
 "country-year/number-of-un-appeals.csv": "data_series.\"number_of_un_appeals\"",
 "country-year/oda-capital-repayments.csv": "data_series.\"oda_capital_repayments\"",
 "country-year/oda-interest-payments.csv": "data_series.\"oda_interest_payments\"",
 "country-year/oda-per-poor-person.csv": "data_series.\"oda_per_poor_person\"",
 // Automated version: "country-year/fact/oda_per_poor_person_2015.csv": "fact.\"oda_per_poor_person_2015\"",
 "country-year/oda-percent-intl-resources.csv": "data_series.\"oda_percent_intl_resources\"",
 "country-year/oof.csv": "data_series.\"oof\"",
 "country-year/out-dac-oda-net.csv": "data_series.\"out_dac_oda_net\"",
 // Automated version: "country-year/fact/out_oda_net_2015.csv": "fact.\"out_oda_net_2015\"",
 "country-year/out-debt-relief.csv": "data_series.\"out_debt_relief\"",
 // Automated version: "country-year/fact/out_debt_relief_2015.csv": "fact.\"out_debt_relief_2015\"",
 "country-year/out-oof-net.csv": "data_series.\"out_oof_net\"",
 "country-year/out-ssc-net.csv": "data_series.\"out_ssc_net\"",
 "country-year/poor-people.csv": "data_series.\"poor_people\"",
 "country-year/poor-people-190.csv": "data_series.\"poor_people_190\"",
 // Renamed: "country-year/poorest20pct.csv": "data_series.\"2013_p20_population\"",
 "country-year/poorest-20-percent.csv": "data_series.\"poorest_20_percent\"",
 // "country-year/poverty-125.csv": "data_series.\"poverty_125\"",
 */
 "country-year/poverty-190.csv": "data_series.\"poverty_190\"",
 /*
 "country-year/poverty-200.csv": "data_series.\"poverty_200\"",
 "country-year/poverty-310.csv": "data_series.\"poverty_310\"",
 // We are no longer to use profits-pct-fdi.csv, contact @cecilia-caio/@timstrawson for details
 //"country-year/profits-pct-fdi.csv": "data_series.\"profits_pct_fdi\"",
 "country-year/remittances.csv": "data_series.\"remittances\"",
 // Renamed: "country-year/rems-pp.csv": "data_series.\"rems_pp\"",
 "country-year/remittances-pp.csv": "data_series.\"remittances_pp\"",
 "country-year/ssc-out.csv": "data_series.\"ssc_out\"",
 "country-year/ssc-percent-gni.csv": "data_series.\"ssc_percent_gni\"",
 "country-year/stat-capacity.csv": "data_series.\"stat_capacity\"",
 //Ranamed: "country-year/total-revenue-pct-gdp.csv": "data_series.\"total_revenue_pct_gdp\"",
 "country-year/total-revenue-percent-gdp.csv": "data_series.\"total_revenue_percent_gdp\"",
 //Ranamed: "country-year/total-revenue-ppp-capita.csv": "data_series.\"total_revenue_ppp_capita\"",
 "country-year/total-revenue-ppp-pc.csv": "data_series.\"total_revenue_ppp_pc\"",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Then get the data from the tables in the `reference` schema
 // Most of these have not been updated in over 2 years & are not maintained
 // They are manually put together by the analysts to support the various visualisation displayed by the DH
 //
 ///////////////////////////////////////////////////////////////////////////////

 "reference/domestic-budget-level.csv": "reference.\"di_domestic_budget_level\"",
 
 ///////////////////////////////////////////////////////////////////////////////
 //
 // ODA by donor files
 // These are needed for the "Different providers, different priorities" visualisation
 // http://data.devinit.org:8888/#!/post/oda-donor
 // Each file contains the total ODA flow from each individual donor to all the recipients it provides ODA to
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/oda-donor/oda-adaptation-fund.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'adaptation-fund' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-AE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'AE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-afdb.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'afdb' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-afdf.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'afdf' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-arab-fund-afesd.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'arab-fund-afesd' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-asdb.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'asdb' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-asdb-special-funds.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'asdb-special-funds' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-AT.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'AT' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-AU.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'AU' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-badea.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'badea' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-BE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'BE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-BG.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'BG' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-CA.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'CA' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-cardb.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'cardb' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ceb.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ceb' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-CH.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'CH' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-cif.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'cif' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-CY.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'CY' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-CZ.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'CZ' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-DE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'DE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-DK.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'DK' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-EE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'EE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ES.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ES' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-EU.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'EU' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-fao.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'fao' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-FI.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'FI' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-FR.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'FR' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-gavi.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'gavi' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-GB.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'GB' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-gef.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'gef' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-gggi.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'gggi' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-global-fund.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'global-fund' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-GR.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'GR' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-HR.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'HR' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-HU.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'HU' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-iaea.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'iaea' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ibrd.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ibrd' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ida.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ida' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-idb.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'idb' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-idb-special-fund.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'idb-special-fund' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-IE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'IE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ifad.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ifad' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-IL.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'IL' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-imf-concessional-trust-funds.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'imf-concessional-trust-funds' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-international-labour-organisation.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'international-labour-organisation' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-IS.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'IS' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-islamic-dev-bank.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'islamic-dev-bank' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-IT.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'IT' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-JP.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'JP' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-KR.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'KR' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-KW.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'KW' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-KZ.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'KZ' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-LI.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'LI' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-LT.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'LT' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-LU.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'LU' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-LV.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'LV' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-montreal-protocol.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'montreal-protocol' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-MT.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'MT' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-NL.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'NL' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-NO.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'NO' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-nordic-dev-fund.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'nordic-dev-fund' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-NZ.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'NZ' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-ofid.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'ofid' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-osce.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'osce' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-PL.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'PL' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-PT.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'PT' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-RO.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'RO' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-RU.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'RU' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-SA.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'SA' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-SE.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'SE' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-SI.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'SI' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-SK.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'SK' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-TH.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'TH' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-TL.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'TL' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-TR.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'TR' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-TW.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'TW' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unaids.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unaids' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-undp.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'undp' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unece.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unece' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unep.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unep' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unfpa.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unfpa' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unhcr.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unhcr' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unicef.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unicef' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unpbf.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unpbf' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-unrwa.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'unrwa' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-US.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'US' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-wfp.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'wfp' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 "country-year/oda-donor/oda-who.csv": "(SELECT to_di_id, year, ROUND\(SUM\(value\), 2\) FROM fact.\"oda_2015\" WHERE from_di_id = 'who' GROUP BY to_di_id, year ORDER BY year DESC, to_di_id) sq",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Spotlight on Uganda (http://data.devinit.org/#!/spotlight-on-uganda)
 // These have not been updated for quite a while & are not maintained at the moment
 // In terms of updates, they are low priority as of January 2017 so have moved them to the end
 // Until they are updated, there really is no need to reimport this data as it has not changed
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/spotlight-on-uganda/uganda-agri-percent.csv": "data_series.\"uganda_agri_percent\"",
 "country-year/spotlight-on-uganda/uganda-anc4-coverage.csv": "data_series.\"uganda_anc4_coverage\"",
 "country-year/spotlight-on-uganda/uganda-avg-house-size.csv": "data_series.\"uganda_avg_house_size\"",
 "country-year/spotlight-on-uganda/uganda-central-resources.csv": "data_series.\"uganda_central_resources\"",
 "country-year/spotlight-on-uganda/uganda-dependency-ratio.csv": "data_series.\"uganda_dependency_ratio\"",
 "country-year/spotlight-on-uganda/uganda-deprivation-living.csv": "data_series.\"uganda_deprivation_living\"",
 "country-year/spotlight-on-uganda/uganda-donor-educ-spend.csv": "data_series.\"uganda_donor_educ_spend\"",
 "country-year/spotlight-on-uganda/uganda-donor-percent.csv": "data_series.\"uganda_donor_percent\"",
 "country-year/spotlight-on-uganda/uganda-donor-resources.csv": "data_series.\"uganda_donor_resources\"",
 "country-year/spotlight-on-uganda/uganda-dpt3-coverage.csv": "data_series.\"uganda_dpt3_coverage\"",
 "country-year/spotlight-on-uganda/uganda-educ-percent.csv": "data_series.\"uganda_educ_percent\"",
 "country-year/spotlight-on-uganda/uganda-finance.csv": "data_series.\"uganda_finance\"",
 "country-year/spotlight-on-uganda/uganda-gov-spend-pp.csv": "data_series.\"uganda_gov_spend_pp\"",
 "country-year/spotlight-on-uganda/uganda-health-funding.csv": "data_series.\"uganda_health_funding\"",
 "country-year/spotlight-on-uganda/uganda-health-percent.csv": "data_series.\"uganda_health_percent\"",
 "country-year/spotlight-on-uganda/uganda-health-posts.csv": "data_series.\"uganda_health_posts\"",
 "country-year/spotlight-on-uganda/uganda-hmis.csv": "data_series.\"uganda_hmis\"",
 "country-year/spotlight-on-uganda/uganda-household-san-cov.csv": "data_series.\"uganda_household_san_cov\"",
 "country-year/spotlight-on-uganda/uganda-igf-resources.csv": "data_series.\"uganda_igf_resources\"",
 "country-year/spotlight-on-uganda/uganda-ipt2-coverage.csv": "data_series.\"uganda_ipt2_coverage\"",
 "country-year/spotlight-on-uganda/uganda-leaving-exam-perf-rate.csv": "data_series.\"uganda_leaving_exam_perf_rate\"",
 "country-year/spotlight-on-uganda/uganda-life-expectancy.csv": "data_series.\"uganda_life_expectancy\"",
 "country-year/spotlight-on-uganda/uganda-local-percent.csv": "data_series.\"uganda_local_percent\"",
 "country-year/spotlight-on-uganda/uganda-overall-health.csv": "data_series.\"uganda_overall_health\"",
 "country-year/spotlight-on-uganda/uganda-pop-dens.csv": "data_series.\"uganda_pop_dens\"",
 "country-year/spotlight-on-uganda/uganda-poverty-headcount.csv": "data_series.\"uganda_poverty_headcount\"",
 "country-year/spotlight-on-uganda/uganda-primary-educ-funding.csv": "data_series.\"uganda_primary_educ_funding\"",
 "country-year/spotlight-on-uganda/uganda-primary-enrol.csv": "data_series.\"uganda_primary_enrol\"",
 "country-year/spotlight-on-uganda/uganda-primary-sit-write.csv": "data_series.\"uganda_primary_sit_write\"",
 "country-year/spotlight-on-uganda/uganda-primary-sit-write-gov.csv": "data_series.\"uganda_primary_sit_write_gov\"",
 "country-year/spotlight-on-uganda/uganda-primary-stu-teach-ratio.csv": "data_series.\"uganda_primary_stu_teach_ratio\"",
 "country-year/spotlight-on-uganda/uganda-primary-stu-teach-ratio-gov.csv": "data_series.\"uganda_primary_stu_teach_ratio_gov\"",
 "country-year/spotlight-on-uganda/uganda-rural-safe-water.csv": "data_series.\"uganda_rural_safe_water\"",
 "country-year/spotlight-on-uganda/uganda-rural-water-func.csv": "data_series.\"uganda_rural_water_func\"",
 "country-year/spotlight-on-uganda/uganda-secondary-enrol.csv": "data_series.\"uganda_secondary_enrol\"",
 "country-year/spotlight-on-uganda/uganda-secondary-sit-write.csv": "data_series.\"uganda_secondary_sit_write\"",
 "country-year/spotlight-on-uganda/uganda-secondary-sit-write-gov.csv": "data_series.\"uganda_secondary_sit_write_gov\"",
 "country-year/spotlight-on-uganda/uganda-secondary-stu-teach-ratio.csv": "data_series.\"uganda_secondary_stu_teach_ratio\"",
 "country-year/spotlight-on-uganda/uganda-secondary-stu-teach-ratio-gov.csv": "data_series.\"uganda_secondary_stu_teach_ratio_gov\"",
 "country-year/spotlight-on-uganda/uganda-tb-success.csv": "data_series.\"uganda_tb_success\"",
 "country-year/spotlight-on-uganda/uganda-total-pop.csv": "data_series.\"uganda_total_pop\"",
 "country-year/spotlight-on-uganda/uganda-urban-pop.csv": "data_series.\"uganda_urban_pop\"",
 "country-year/spotlight-on-uganda/uganda-urban-rural-pop.csv": "data_series.\"uganda_urban_rural_pop\"",
 "country-year/spotlight-on-uganda/uganda-wash-perf-score.csv": "data_series.\"uganda_wash_perf_score\"",
 "country-year/spotlight-on-uganda/uganda-water-source-comm-func.csv": "data_series.\"uganda_water_source_comm_func\"",
 */

 ///////////////////////////////////////////////////////////////////////////////
 //
 // Spotlight on Kenya
 // As far as I know, these are not even being used (???)
 // These have not been updated for quite a while & are not maintained at the moment
 // In terms of updates, they are low priority as of January 2017 so have moved them to the end
 // Until they are updated, there really is no need to reimport this data as it has not changed
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 "country-year/spotlight-on-kenya/kenya-births-pc-skilled.csv": "data_series.\"kenya_births_pc_skilled\"",
 "country-year/spotlight-on-kenya/kenya-electricity.csv": "data_series.\"kenya_electricity\"",
 "country-year/spotlight-on-kenya/kenya-fertility-rate.csv": "data_series.\"kenya_fertility_rate\"",
 "country-year/spotlight-on-kenya/kenya-improved-sani.csv": "data_series.\"kenya_improved_sani\"",
 "country-year/spotlight-on-kenya/kenya-improved-water.csv": "data_series.\"kenya_improved_water\"",
 "country-year/spotlight-on-kenya/kenya-paved-roads.csv": "data_series.\"kenya_paved_roads\"",
 "country-year/spotlight-on-kenya/kenya-pc-female-know-hiv.csv": "data_series.\"kenya_pc_female_know_hiv\"",
 "country-year/spotlight-on-kenya/kenya-pc-female-tested-hiv.csv": "data_series.\"kenya_pc_female_tested_hiv\"",
 "country-year/spotlight-on-kenya/kenya-pc-house-malaria-nets.csv": "data_series.\"kenya_pc_house_malaria_nets\"",
 "country-year/spotlight-on-kenya/kenya-pc-male-know-hiv.csv": "data_series.\"kenya_pc_male_know_hiv\"",
 "country-year/spotlight-on-kenya/kenya-pc-male-tested-hiv.csv": "data_series.\"kenya_pc_male_tested_hiv\"",
 "country-year/spotlight-on-kenya/kenya-pc-modern-contra.csv": "data_series.\"kenya_pc_modern_contra\"",
 "country-year/spotlight-on-kenya/kenya-pc-no-contra.csv": "data_series.\"kenya_pc_no_contra\"",
 "country-year/spotlight-on-kenya/kenya-pc-trad-contra.csv": "data_series.\"kenya_pc_trad_contra\"",
 "country-year/spotlight-on-kenya/kenya-pop-female.csv": "data_series.\"kenya_pop_female\"",
 "country-year/spotlight-on-kenya/kenya-pop-male.csv": "data_series.\"kenya_pop_male\"",
 "country-year/spotlight-on-kenya/kenya-pop-pc-female.csv": "data_series.\"kenya_pop_pc_female\"",
 "country-year/spotlight-on-kenya/kenya-pop-pc-male.csv": "data_series.\"kenya_pop_pc_male\"",
 "country-year/spotlight-on-kenya/kenya-pop-total.csv": "data_series.\"kenya_pop_total\"",
 "country-year/spotlight-on-kenya/kenya-pov-gap.csv": "data_series.\"kenya_pov_gap\"",
 "country-year/spotlight-on-kenya/kenya-rural-pop.csv": "data_series.\"kenya_rural_pop\"",
 "country-year/spotlight-on-kenya/kenya-treat-child-diarr.csv": "data_series.\"kenya_treat_child_diarr\"",
 "country-year/spotlight-on-kenya/kenya-treat-child-respir.csv": "data_series.\"kenya_treat_child_respir\"",
 "country-year/spotlight-on-kenya/kenya-urban-pop.csv": "data_series.\"kenya_urban_pop\"",
 "country-year/spotlight-on-kenya/kenya-weight-below-3sd.csv": "data_series.\"kenya_weight_below_3sd\"",
 */

};
