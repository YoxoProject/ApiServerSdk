import time
import urllib3
import json
from yoxo_api_client.configuration import Configuration
from yoxo_api_client.api.api_java_api import APIJavaApi
from yoxo_api_client.api_client import ApiClient

class AutoRefreshingConfiguration(Configuration):
    def __init__(self, client_id, client_secret, **kwargs):
        super().__init__(**kwargs)
        self.client_id = client_id
        self.client_secret = client_secret
        self._token_expiration = 0
        self.host = "https://api.yoxo.software"

    def auth_settings(self):
        # Check expiration (with 60s buffer)
        if self.access_token is None or time.time() >= self._token_expiration:
            self._refresh_token()
            
        return super().auth_settings()

    def _refresh_token(self):
        http = urllib3.PoolManager()
        url = "https://auth.yoxo.software/oauth2/token"
        
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        body = f"grant_type=client_credentials&client_id={self.client_id}&client_secret={self.client_secret}&scope=api_access"
        
        try:
            resp = http.request(
                'POST',
                url,
                body=body,
                headers=headers
            )
            
            if resp.status != 200:
                raise Exception(f"Failed to refresh token: {resp.status} {resp.data.decode('utf-8')}")
                
            token_data = json.loads(resp.data.decode('utf-8'))
            self.access_token = token_data['access_token']
            self._token_expiration = time.time() + token_data['expires_in'] - 60
            
        except Exception as e:
            raise e

class YoxoClient:
    def __init__(self, client_id, client_secret):
        self.configuration = AutoRefreshingConfiguration(client_id, client_secret)
        self.api_client = ApiClient(self.configuration)
        self.java = APIJavaApi(self.api_client)
