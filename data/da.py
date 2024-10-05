import climateserv
import json

x = 9.81
y = -84.00

modifier = 0.05

GeometryCoords = [[x-modifier,y+modifier],[x+modifier, y+modifier],
                  [x+modifier, y-modifier],[x-modifier,y-modifier],[x-modifier,y+modifier]]
                  
DatasetType = 26
OperationType = 'Average'
EarliestDate = '02/01/2024'
LatestDate = '10/20/2024'
SeasonalEnsemble = '' # Leave empty when using the new integer dataset IDs
SeasonalVariable = '' # Leave empty when using the new integer dataset IDs
Outfile = 'out.csv'
# Outfile = 'memory_object' 

resulting_set = climateserv.api.request_data(DatasetType, OperationType, 
             EarliestDate, LatestDate,GeometryCoords, 
             SeasonalEnsemble, SeasonalVariable,Outfile)


# print(resulting_set)