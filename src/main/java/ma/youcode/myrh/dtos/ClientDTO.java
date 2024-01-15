package ma.youcode.myrh.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.youcode.myrh.models.UserStatus;

@Data
@AllArgsConstructor
public class ClientDTO {
    private int clientId;
    private UserStatus status;
}
