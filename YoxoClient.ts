import axios, { AxiosInstance } from 'axios';
import { Configuration } from './configuration';
import { APIJavaApi } from './api';

export class YoxoClient {
    private axiosInstance: AxiosInstance;
    private configuration: Configuration;
    
    // Public API accessors
    public java: APIJavaApi;

    constructor(private clientId: string, private clientSecret: string) {
        this.configuration = new Configuration({
            basePath: "https://api.yoxo.software",
        });

        this.axiosInstance = axios.create();

        // Token management
        let accessToken: string | null = null;
        let tokenExpiration: number = 0;
        let tokenPromise: Promise<string> | null = null;

        const fetchToken = async (): Promise<string> => {
            try {
                const params = new URLSearchParams();
                params.append('grant_type', 'client_credentials');
                params.append('client_id', this.clientId);
                params.append('client_secret', this.clientSecret);
                params.append('scope', 'api_access');

                const response = await axios.post('https://auth.yoxo.software/oauth2/token', params, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });

                accessToken = response.data.access_token;
                // Set expiration (minus buffer of 60s)
                tokenExpiration = Date.now() + (response.data.expires_in * 1000) - 60000;
                return accessToken!;
            } catch (error) {
                console.error("Failed to authenticate Yoxo Client", error);
                throw error;
            } finally {
                tokenPromise = null;
            }
        };

        // Request Interceptor
        this.axiosInstance.interceptors.request.use(async (config) => {
            if (!accessToken || Date.now() >= tokenExpiration) {
                if (!tokenPromise) {
                    tokenPromise = fetchToken();
                }
                await tokenPromise;
            }
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        // Initialize APIs
        this.java = new APIJavaApi(this.configuration, undefined, this.axiosInstance);
    }
}
