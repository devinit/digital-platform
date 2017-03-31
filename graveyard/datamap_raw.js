exports.csv=
{

 ///////////////////////////////////////////////////////////////////////////////
 //
 // And now all of these need sorting out...
 //
 ///////////////////////////////////////////////////////////////////////////////

 /*
 // Automated WB WDI data series
 "country-year/gdp-usd-current.csv": "fact.\"gdp_usd_current\"",
 "country-year/gni-pc-usd-current.csv": "fact.\"gni_pc_usd_current\"",
 // Changed the source of data, now presented in 2015 constant prices
 "country-year/gni-usd-current.csv": "fact.\"gni_usd_current_2015\"",
 "country-year/income-share-bottom-20pc.csv": "fact.\"income_share_bottom_20pc\"",
 "country-year/income-share-by-quintile.csv": "fact.\"income_share_by_quintile\"",
 "country-year/life-expectancy-at-birth.csv": "fact.\"life_expectancy_at_birth\"",
 "country-year/maternal-mortality.csv": "fact.\"maternal_mortality\"",
 "country-year/population-total.csv": "fact.\"population_total\"",
 "country-year/population-rural.csv": "fact.\"population_rural\"",
 "country-year/population-urban.csv": "fact.\"population_urban\"",
 "country-year/population-rural-urban.csv": "fact.\"population_rural_urban\"",
 "country-year/population-by-age.csv": "fact.\"population_by_age\"",
 */

 /*
 // This section is for all things ODA related i.e., `fact.oda`/the unbundling ODA visualisation data/oda*.csv
 // Added new file for the data where year = 2015
 "country-year/oda.2015.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2015) sq",
 // Changed the source of data prior to 2015 as should now be taken from `fact.oda_2015` (2015 constant prices)
 "country-year/oda.2014.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2014) sq",
 "country-year/oda.2013.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2013) sq",
 "country-year/oda.2012.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2012) sq",
 "country-year/oda.2011.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2011) sq",
 "country-year/oda.2010.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2010) sq",
 "country-year/oda.2009.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2009) sq",
 "country-year/oda.2008.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2008) sq",
 "country-year/oda.2007.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2007) sq",
 "country-year/oda.2006.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2006) sq",
 "country-year/oda.2005.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2005) sq",
 "country-year/oda.2004.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2004) sq",
 "country-year/oda.2003.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2003) sq",
 "country-year/oda.2002.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2002) sq",
 "country-year/oda.2001.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2001) sq",
 "country-year/oda.2000.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year=2000) sq",
 "country-year/oda.csv": "(SELECT from_di_id, to_di_id, year, sector, bundle, channel_web_id, value FROM fact.\"oda_2015\" WHERE year<=1999) sq",
 */

 // These tables are used with the recipient profiles & have been moved to the `recipient_profile` schema
 // Where needed, added new file for the updated data, in 2015 constant prices
 // This is new data coming from the warehouse, so lets keep the names the same
 /*
 "country-year/warehouse/oda_per_percent_gdp.csv": "recipient_profile.\"oda_per_percent_gdp\"",
 "country-year/warehouse/oda_per_percent_gdp_excl_non_transfer.csv": "recipient_profile.\"oda_per_percent_gdp_excl_non_transfer\"",
 "country-year/warehouse/oda_per_poor_person_2012.csv": "recipient_profile.\"oda_per_poor_person_2012\"",
 "country-year/warehouse/oda_per_poor_person_2015.csv": "recipient_profile.\"oda_per_poor_person_2015\"",
 "country-year/warehouse/oda_per_poor_person_excl_non_transfer_2012.csv": "recipient_profile.\"oda_per_poor_person_excl_non_transfer_2012\"",
 "country-year/warehouse/oda_per_poor_person_excl_non_transfer_2015.csv": "recipient_profile.\"oda_per_poor_person_excl_non_transfer_2015\"",
 "country-year/warehouse/oda_per_capita_2012.csv": "recipient_profile.\"oda_per_capita_2012\"",
 "country-year/warehouse/oda_per_capita_2015.csv": "recipient_profile.\"oda_per_capita_2015\"",
 "country-year/warehouse/oda_per_capita_excl_non_transfer_2012.csv": "recipient_profile.\"oda_per_capita_excl_non_transfer_2012\"",
 "country-year/warehouse/oda_per_capita_excl_non_transfer_2015.csv": "recipient_profile.\"oda_per_capita_excl_non_transfer_2015\"",
 */

 /*
 // New data print profile
 "country-year/warehouse/gdp_pc_usd_current_2012.csv": "fact.\"gdp_pc_usd_current_2012\"",
 "country-year/warehouse/gdp_pc_usd_current_2015.csv": "fact.\"gdp_pc_usd_current_2015\"",
 // New donor data
 "country-year/warehouse/intl_outflows_donors.csv": "data_series.intl_outflows_donors",
 "country-year/warehouse/disbursement_by_region_2012.csv": "donor_profile.disbursement_by_region_2012",
 "country-year/warehouse/disbursement_by_region_2015.csv": "donor_profile.disbursement_by_region_2015",
 // "country-year/warehouse/donor_bundle_2012.csv": "donor_profile.donor_bundle_2012",
 // "country-year/warehouse/donor_bundle_2015.csv": "donor_profile.donor_bundle_2015",
 // "country-year/warehouse/loans_grants_2012.csv": "donor_profile.loans_grants_2012",
 // "country-year/warehouse/loans_grants_2015.csv": "donor_profile.loans_grants_2015",
 // "country-year/warehouse/sectors_over_time_2012.csv": "donor_profile.sectors_over_time_2012",
 // "country-year/warehouse/sectors_over_time_2015.csv": "donor_profile.sectors_over_time_2015",
 */

 /*
 // Donor profiles

 // New donor data from https://github.com/devinit/ddw-data/issues/220#issuecomment-251401625
 // Not sure if fact.dac_oda_percent_gni and data_series.dac_oda_percent_gni are the same data
 // Yes, but the table has now been renamed to fact.oda_percent_gni & automated
 // Also bubble chart seems like a useless table name, so moving this all into sub dirs by schema
 // Will change name & update as necessary

 "country-year/warehouse/data_series/intl_flows_donors.csv": "data_series.intl_flows_donors",
 //"country-year/warehouse/fact/out_oda_net_2012.csv": "fact.out_oda_net_2012",
 // 2015 data now available
 //"country-year/warehouse/fact/out_oda_net_2015.csv": "fact.out_oda_net_2015",
 //"country-year/warehouse/fact/out_debt_relief_2012.csv": "fact.out_debt_relief_2012",
 "country-year/warehouse/donor_profile/oda_per_capita_per_day_2012.csv": "donor_profile.oda_per_capita_per_day_2012",
 "country-year/warehouse/donor_profile/gni_per_capita_per_day_2012.csv": "donor_profile.gni_per_capita_per_day_2012",
 "country-year/warehouse/donor_profile/oda_per_capita_2012.csv": "donor_profile.oda_per_capita_2012",
 "country-year/warehouse/donor_profile/gni_per_capita_2012.csv": "donor_profile.gni_per_capita_2012",
 // Renamed dac_oda_percent_gni.csv to oda_percent_gni.csv
 // dac_oda_percent_gni.csv can be removed
 //"country-year/warehouse/fact/dac_oda_percent_gni.csv": "fact.dac_oda_percent_gni",
 //"country-year/warehouse/fact/oda_percent_gni.csv": "fact.oda_percent_gni",
 // Added a new file, to be used in conjunction with oda_percent_gni.csv for the global picture visualisations
 //"country-year/warehouse/fact/gni.csv": "fact.gni_2015",
 "country-year/warehouse/donor_profile/recipient_bundle_2012.csv": "donor_profile.recipient_bundle_2012",
 "country-year/warehouse/donor_profile/disbursement_by_region_2012.csv": "donor_profile.disbursement_by_region_2012",
 "country-year/warehouse/donor_profile/bubble_chart.csv": "donor_profile.bubble_chart",
 "country-year/warehouse/donor_profile/donor_bundle_2012.csv": "donor_profile.donor_bundle_2012",
 "country-year/warehouse/donor_profile/loans_grants_2012.csv": "donor_profile.loans_grants_2012",
 "country-year/warehouse/donor_profile/sectors_over_time_2012.csv": "donor_profile.sectors_over_time_2012",
 "country-year/warehouse/donor_profile/d14_region.csv": "donor_profile.d14_region",
 "country-year/warehouse/donor_profile/d15_flow.csv": "donor_profile.d15_flow",
 "country-year/warehouse/donor_profile/d15_depth_of_poverty.csv": "donor_profile.d15_depth_of_poverty",
 */

 /*
 // Multilateral profiles
 "country-year/warehouse/multilateral_profile/oda_oof_trend.csv": "multilateral_profile.\"oda_oof_trend_2012\"",
 "country-year/warehouse/multilateral_profile/oda_oof_flow_type.csv": "multilateral_profile.\"oda_oof_flow_type_2012\"",
 "country-year/warehouse/multilateral_profile/bundle.csv": "multilateral_profile.\"bundle_2012\"",
 "country-year/warehouse/multilateral_profile/oda_regional.csv": "multilateral_profile.\"oda_regional\"",
 "country-year/warehouse/multilateral_profile/core_earmarked_oda_received.csv": "multilateral_profile.\"core_earmarked_oda_received_2012\"",
 "country-year/warehouse/multilateral_profile/core_oda_by_donor.csv": "multilateral_profile.\"core_oda_by_donor_2012\"",
 "country-year/warehouse/multilateral_profile/earmarked_oda_by_donor.csv": "multilateral_profile.\"earmarked_oda_by_donor_2012\"",
 "country-year/warehouse/multilateral_profile/master_multilateral_donor.csv": "multilateral_profile.\"master_multilateral_donor\"",
 "country-year/warehouse/multilateral_profile/mums_multilateral_donor.csv": "multilateral_profile.\"mums_multilateral_donor\"",
 "country-year/warehouse/multilateral_profile/channel.csv": "multilateral_profile.\"channel_2012\"",
 "country-year/warehouse/multilateral_profile/oda_revenue_poverty.csv": "multilateral_profile.\"oda_revenue_poverty_2012\"",
 "country-year/warehouse/multilateral_profile/purpose_by_bundle.csv": "multilateral_profile.\"purpose_by_bundle_2012\"",
 "country-year/warehouse/multilateral_profile/purpose_trend.csv": "multilateral_profile.\"purpose_trend_2012\"",
 "country-year/warehouse/multilateral_profile/recipient_by_purpose_by_di_id.csv": "multilateral_profile.\"recipient_by_purpose_by_di_id_2012\"",
 "country-year/warehouse/multilateral_profile/recipient_by_purpose_by_parent.csv": "multilateral_profile.\"recipient_by_purpose_by_parent_2012\"",
 "country-year/warehouse/multilateral_profile/recipient_by_sector_by_di_id.csv": "multilateral_profile.\"recipient_by_sector_by_di_id_2012\"",
 "country-year/warehouse/multilateral_profile/recipient_by_sector_by_parent.csv": "multilateral_profile.\"recipient_by_sector_by_parent_2012\"",
 "country-year/warehouse/multilateral_profile/sector_by_purpose_by_di_id.csv": "multilateral_profile.\"sector_by_purpose_by_di_id_2012\"",
 "country-year/warehouse/multilateral_profile/sector_by_purpose_by_parent.csv": "multilateral_profile.\"sector_by_purpose_by_parent_2012\"",
 "country-year/warehouse/multilateral_profile/sector_trend.csv": "multilateral_profile.\"sector_trend_2012\"",
 // "country-year/displacement.csv": "data_series.\"displacement\"",
 // "country-year/forgotten_crisis.csv": "data_series.\"forgotten_crisis\"",
 // "country-year/number_of_un_appeals.csv": "data_series.\"number_of_un_appeals\"",
 */

 /*
 // Temporary include old poverty data, parts of site still use it
 "country-year/poor-people.csv": "data_series.\"poor_people\"",
 "country-year/depth-of-extreme-poverty.csv": "data_series.\"depth_of_extreme_poverty\"",
 "country-year/poverty-125.csv": "data_series.\"poverty_125\"",
 "country-year/poverty-200.csv": "data_series.\"poverty_200\"",

 // Need access to these, using temp fake data for now
 // "country-year/warehouse/south_south_cooperation/recipient_and_region_2012.csv": "south_south_cooperation.\"recipient_and_region_2012\"",
 // "country-year/warehouse/south_south_cooperation/bundle_2012.csv": "south_south_cooperation.\"bundle_2012\"",
 */
};
