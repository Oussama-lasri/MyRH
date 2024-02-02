//package ma.youcode.myrh.Proxy;
//
//import java.net.*;
//
//public class ProxyConfiguration {
//    public static void main(String[] args) {
//        // Proxy settings
//        String proxyHost = "your_proxy_host";
//        int proxyPort = 8080; // Replace with your proxy port
//        String proxyUsername = "your_proxy_username"; // Replace with your proxy username or leave as null
//        String proxyPassword = "your_proxy_password"; // Replace with your proxy password or leave as null
//
//        // Create a Proxy object with the specified proxy type, host, and port
//        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(proxyHost, proxyPort));
//
//        try {
//            // Create a URL object for the resource you want to access
//            URL url = new URL("https://example.com");
//
//            // Open a connection to the URL using the proxy
//            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
//
//            // If your proxy requires authentication, set the authentication credentials
//            if (proxyUsername != null && proxyPassword != null) {
//                String authString = proxyUsername + ":" + proxyPassword;
//                String authHeaderValue = "Basic " + java.util.Base64.getEncoder().encodeToString(authString.getBytes());
//                connection.setRequestProperty("Proxy-Authorization", authHeaderValue);
//            }
//
//            // Set up connection properties, request methods, headers, etc.
//            connection.setRequestMethod("GET");
//            connection.setConnectTimeout(5000);
//            connection.setReadTimeout(5000);
//
//            // Get the response code
//            int responseCode = connection.getResponseCode();
//            System.out.println("Response Code: " + responseCode);
//
//            // Read data from the connection, write data to the connection, handle response, etc.
//            // For example, you can read response data using connection.getInputStream()
//
//            // Close the connection
//            connection.disconnect();
//        } catch (Exception e) {
//            System.err.println("Error: " + e.getMessage());
//        }
//    }
//}
//
