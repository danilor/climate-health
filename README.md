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

**Important Notes:**
If you intend to execute this code locally, you need to create an account on https://www.meteomatics.com/ and get a password and user in order to generate the api token for the forecast information. Also you need to create an OpenAI key. For the OpenAI key it will require a minimum payment of $5.


1. Go to /cm_api folder
2. Execute `pip install -r requirements.txt` on the command line
3. Ereate a .env file with the following information:
	FLASK_APP=app.py	
	API_SECRET=[any_text]
	USER1=[meteomatics_user]
	USER1_PASSWORD=[meteomatics_password]	
	OPENAI_KEY=[open_api_key]
4. Execute `flask run` on the command line
5. Open in the browser 127.0.0.1:5000/api/docs in orde to review the api documentation




