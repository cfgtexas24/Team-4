import os
import requests
import logging
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class EmergencyService:
    def __init__(self):
        self.api_key = os.environ.get('INFOBIP_API_KEY')
        self.base_url = os.environ.get('INFOBIP_BASE_URL')
        self.admin_phone_number = os.environ.get('ADMIN_PHONE_NUMBER')
        
        logger.debug(f"API Key: {self.api_key[:5]}...{self.api_key[-5:] if self.api_key else 'Not set'}")
        logger.debug(f"Base URL: {self.base_url}")
        logger.debug(f"Admin Phone: {self.admin_phone_number}")

    def send_emergency_alert(self, message):
        endpoint = '/sms/2/text/advanced'
        url = f"{self.base_url}{endpoint}"

        data = {
            "messages": [
                {
                    "destinations": [{"to": self.admin_phone_number}],
                    "from": "EmergencyApp",
                    "text": message
                }
            ]
        }

        headers = {
            'Authorization': f"App {self.api_key}",
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        try:
            logger.debug(f"Sending request to Infobip: {url}")
            logger.debug(f"Request data: {data}")
            response = requests.post(url, json=data, headers=headers)
            response.raise_for_status()
            response_json = response.json()
            logger.debug(f"Infobip response status code: {response.status_code}")
            logger.debug(f"Infobip full response: {response_json}")
            
            # Check the status of the message
            if 'messages' in response_json and response_json['messages']:
                status = response_json['messages'][0].get('status', {})
                if status.get('groupId') == 1:
                    logger.info("Message sent successfully")
                else:
                    logger.warning(f"Message might not have been sent. Status: {status}")
            else:
                logger.warning("Unexpected response format from Infobip")
            
            return response_json
        except requests.RequestException as e:
            logger.error(f"Error sending SMS: {str(e)}")
            if e.response is not None:
                logger.error(f"Response content: {e.response.content}")
            raise Exception("Failed to send emergency alert")

emergency_service = EmergencyService()