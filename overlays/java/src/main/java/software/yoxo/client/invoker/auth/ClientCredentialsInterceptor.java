package software.yoxo.client.invoker.auth;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import okhttp3.*;
import java.io.IOException;

public class ClientCredentialsInterceptor implements Interceptor {
    private final String clientId;
    private final String clientSecret;
    private final OkHttpClient authClient;
    private String accessToken;
    private long expirationTime = 0;

    public ClientCredentialsInterceptor(String clientId, String clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authClient = new OkHttpClient();
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Request originalRequest = chain.request();
        
        synchronized (this) {
            if (accessToken == null || System.currentTimeMillis() >= expirationTime) {
                refreshToken();
            }
        }

        if (accessToken != null) {
            Request newRequest = originalRequest.newBuilder()
                    .header("Authorization", "Bearer " + accessToken)
                    .build();
            return chain.proceed(newRequest);
        }

        return chain.proceed(originalRequest);
    }

    private void refreshToken() throws IOException {
        RequestBody formBody = new FormBody.Builder()
                .add("grant_type", "client_credentials")
                .add("client_id", clientId)
                .add("client_secret", clientSecret)
                .add("scope", "api_access")
                .build();

        Request request = new Request.Builder()
                .url("https://auth.yoxo.software/oauth2/token")
                .post(formBody)
                .build();

        try (Response response = authClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Failed to obtain access token: " + response.code() + " " + response.message());
            }

            String responseBody = response.body().string();
            JsonObject json = new Gson().fromJson(responseBody, JsonObject.class);
            
            this.accessToken = json.get("access_token").getAsString();
            long expiresIn = json.get("expires_in").getAsLong();
            // Buffer of 60 seconds
            this.expirationTime = System.currentTimeMillis() + (expiresIn * 1000) - 60000;
        }
    }
}
