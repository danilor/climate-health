# Climate Health

## Participants

 - José Andrés Porras Solano
 - Ismaray Rosales
 - Valery Schroeder Perez
 - Jhayr Solano Brenes
 - Marco Daniel Vargas Bermúdez
 - Danilo Josué Ramírez Mattey

## Technology

This solution was developed using Python and Node.js as the primary technologies. It is structured into two main layers: Backend and Frontend. Both layers are required to run the application in local environments.

NODEJS [React][FrontEnd] -> /climate-health
PYTHON [Flask][Backend] -> /cm_api

## Requirements

	- NodeJS 20+
	- Python 3+

## Instructions to run the Frontend (React)

 1. Go into the /climate-health folder
 2. Execute npm install to install all required libraries
 3. Modify the file at: /climate-health/src/services/API.service.ts and change the value of BASE_URL to the right backend server URL.
 4. Create an .env file on /climate-health/.env and add the Google Maps API KEY with the following information: "REACT_APP_GMAPS_APIKEY=[APIKEY_HERE]"
 5. Execute npm start to open the application

## Instructions to run the Backend (Flask)

