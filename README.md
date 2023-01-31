# project_3-anjuli-jasmine-john-danielle

## Project-3 proposal

The objective of this project is to develop data visualization web application that will have user driven interactions. The project focused on Hydraulic fracturing, or fracing.

The fracking related open databases will be accessed from hydraulic fracturing chemical disclosure registry. 

[Frac Data](https://www.fracfocus.org/index.php?p=data-download)

The database from the above source will be extracted, transformed, and then uploaded as relational database using PostgreSQL and pgAdmin. The SQL database will be used to build dashboards. These dashboards will show locations of wells that have been  stimulated by hydraulic fracturing.  The dashboards will include leaflet visualizations
* show number of wells/year
* operational locations of various companies
* volume of water used for fracing
* Depth of wells

## Project-3 report

For the data visualization project-3, the database was extracted from [Frac Data](https://www.fracfocus.org/index.php?p=data-download) The data was then downloaded in CSV format. The data was then transformed and uploaded in SQL database. The data was filtered for the year 2012 and State Texas. Further data was transformed to JSON for visualizations. 
For data visualization dashboard was created. Leaflet was used to create steetmap with topogaphy layers of fracing wells in Texan in 2012. Another streetmap visualization represented top three operators through color coordinated markers. The plotly was used to create a barchart depicting top 13 operators that opened the most wells in 2012 in Texas.  
It was concluded that 
* There were total of 261 operators in 2012 in Texas. 
* In 2012, the total number of fracing wells was 3705 in Texas.
* The top 13 operators represented 50.2% of total wells in 2012 in Texas. 
* Pioneer was the top operator, with an opening of 314 wells.Devon Energy and EOG Resources were second and third with 206 and 169 wells, respectively.   


