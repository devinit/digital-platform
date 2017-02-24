# digital-platform

This repository feeds the MongoDB DB that feeds the Development Data Hub web app: http://data.devinit.org/#!/.

---

The Development Data Hub web app repository (staging branch) is here: https://github.com/devinit/datahub-angular/tree/staging

---

# Structure of the repository

- [country-year](https://github.com/devinit/digital-platform/tree/development/country-year): contains raw data .csv files for the visualisations & charts. **Only files that the Development Data Hub web app uses/needs should be stored here**. A raw data .csv files found in this folder is either created by an analyst ('manual'), or is 'automated' i.e., populated from a table in a DB. The DB is maintained and updated 4 times a year. Not all manual files are maintained and if they are, then only once a year.
- [reference](https://github.com/devinit/digital-platform/tree/development/reference): contains reference files. 
- [nodejs](https://github.com/devinit/digital-platform/tree/development/nodejs): contains a small node app to import data from a PostgreSQL DB to the local .csv files in country-year.
- [user-daya](https://github.com/devinit/digital-platform/tree/development/user-data): contains raw data .csv & .xlsx files that are linked to http://data.devinit.org:8888/#!/data/methodology/. This is where the users can download the data from. This folder is populated using @akmiller01's [user-data2.R](https://github.com/akmiller01/alexm-util/blob/master/DevInit/R/user-data2.R). **As of Janury 2017, this folder is out of date & requires maintenance**.
- [graveyard](https://github.com/devinit/digital-platform/tree/development/graveyard): is a temporary folder for unused & unwanted .csv files and other junk littering this repository. Once we have cleaned up the repository & tested the web app to make sure that we haven't removed anything that it relies on, **this folder will be permanently deleted**.

# Conventions

[Coming soon...]

# Issues

1) country-year → raw-data?

2) user-data needs updating, will likely require a rewrite of [user-data2.R](https://github.com/akmiller01/alexm-util/blob/master/DevInit/R/user-data2.R).

3) Development Data Hub site map that shows the location where each .csv from [country-year](https://github.com/devinit/digital-platform/tree/development/country-year) is used is missing. This document should also state who the analyst responsible for each manually created file is. All .csv files populated from the PostgreSQL DB are looked after by @dw8547.

# Staging

Staging data is currently auto deployed on a server at http://data.devinit.org:8888/#!/.
