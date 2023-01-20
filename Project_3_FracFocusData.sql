--Create table
CREATE TABLE RegistryUpload(
	pKey Varchar(50) PRIMARY KEY,
	JobStart TIMESTAMP,
	JobEndDate TIMESTAMP,
	APINumber Varchar(30),
	StateNumber INT,
	CountyNumber INT,
	OperatorName Varchar(100),
	WellName Varchar(100),
	Latitude DECIMAL,
	Longitude DECIMAL,
	Projection Varchar(10),
	TVD DECIMAL,
	TotalBaseWaterVolume DECIMAL,
	TotalBaseNonWaterVolume DECIMAL,
	StateName Varchar(90),
	CountyName Varchar(90),
	FFVersion Varchar(90),
	FederalWell Varchar(90),
	IndianWell Varchar(90),
	Source Varchar(90),
	DTMOD Varchar(90)
);

SELECT *
FROM RegistryUpload;

DROP Table RegistryUpload;
