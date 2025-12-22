package software.yoxo.client;

import okhttp3.OkHttpClient;
import software.yoxo.client.api.ApiJavaApi;
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.auth.ClientCredentialsInterceptor;

public class YoxoClient {
    private final ApiClient apiClient;
    private final ApiJavaApi javaApi;

    public YoxoClient(String clientId, String clientSecret) {
        this.apiClient = new ApiClient();
        
        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addInterceptor(new ClientCredentialsInterceptor(clientId, clientSecret));
        
        this.apiClient.setHttpClient(builder.build());
        this.apiClient.setBasePath("https://api.yoxo.software");
        
        this.javaApi = new ApiJavaApi(this.apiClient);
    }

    public ApiJavaApi java() {
        return javaApi;
    }
}
