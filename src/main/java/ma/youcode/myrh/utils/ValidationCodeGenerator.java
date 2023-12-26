package ma.youcode.myrh.utils;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Random;

@Service
public class ValidationCodeGenerator {
    private static final String VALID_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int CODE_LENGTH = 6;

    public static String generateValidationCode() {
        Random random = new SecureRandom();
        StringBuilder code = new StringBuilder();

        for (int i = 0; i < CODE_LENGTH; i++) {
            int randomIndex = random.nextInt(VALID_CHARACTERS.length());
            code.append(VALID_CHARACTERS.charAt(randomIndex));
        }

        return code.toString();
    }

    public static void main(String[] args) {
        // Example usage
        String validationCode = generateValidationCode();
        System.out.println("Generated Validation Code: " + validationCode);
    }
}