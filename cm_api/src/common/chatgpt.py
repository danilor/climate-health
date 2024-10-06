from openai import OpenAI
from flask import json
import json
import os


def crops_recommendations_by_forecast(forecast_data: list):

    client = OpenAI(api_key=os.getenv("OPENAI_KEY"))

    prompt = f"""
    Generate a detailed JSON response using the following structure, including the weather conditions, a summary of precipitation, and exact planting recommendations for vegetables and greens. The recommendations should include characteristics like moisture tolerance, optimal temperature, soil pH, planting depth, and plant spacing. The JSON should follow this structure:

    {{
    "climate_summary": {{        
        "general_description": "Description of the general weather conditions",
        "highlighted_periods": {{
        "heavy_rain": [
            {{ "date": "Date", "value_mm": "Rain value in mm" }}
        ],
        "dry_days": [
            {{ "date": "Date", "value_mm": "Rain value in mm (should be 0)" }}
        ]
        }}
    }},
    "planting_recommendations": [
        {{
        "name": "Vegetable name",
        "type": "Type (leafy vegetable, tuber, legume, etc.)",
        "characteristics": {{
            "moisture_tolerance": "Moisture tolerance level",
            "optimal_temperature": "Optimal temperature range",
            "soil_ph": "Soil pH range",
            "planting_depth": "Planting depth",
            "plant_spacing": "Spacing between plants",
            "planting_season": "Recommended planting season based on weather",
            "additional_recommendation": "Additional recommendations or tips"
        }}
        }}
    ]
    }}
    Make sure to fill in the fields with accurate data based on the temperature and precipitation provided and that is a string that I can use python json.loads to convert it to a dict.
    

    {json.dumps({"data": forecast_data})}    
    """
    try:
        breakpoint()
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful assistant specialized in climate and agriculture.",
                },
                {"role": "user", "content": prompt},
            ],
        )
    except Exception as e:
        print(str(e))

    # Imprimir la respuesta de OpenAI
    cleaned_response = (
        response.choices[0]
        .message.content.strip()
        .replace("```json", "")
        .replace("```", "")
    )
    data = json.loads(cleaned_response)
    return data
