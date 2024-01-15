package ma.youcode.myrh.dtos;

import lombok.*;
import ma.youcode.myrh.models.UserStatus;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class ClientDTO implements Serializable{
    private int clientId;
}
