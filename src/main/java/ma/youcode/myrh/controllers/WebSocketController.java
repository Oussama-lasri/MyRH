package ma.youcode.myrh.controllers;

import lombok.RequiredArgsConstructor;
import ma.youcode.myrh.dtos.ClientDTO;
import ma.youcode.myrh.models.User;
import ma.youcode.myrh.models.UserStatus;
import ma.youcode.myrh.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@CrossOrigin("*")
@RequiredArgsConstructor
public class WebSocketController {
    private final UserRepository repository;

    @MessageMapping("/user.addUser")
    @SendTo("/user/public")
    public void addUser(
            @RequestBody ClientDTO clientDTO
    ) {
        User user = repository.findById(clientDTO.getClientId()).get();
        user.setStatus(UserStatus.ONLINE);
        repository.save(user);
//        return user;
    }

    @MessageMapping("/user.disconnectUser")
    @SendTo("/user/public")
    public void disconnectUser(
                @RequestBody ClientDTO clientDTO
    ) {
         System.out.println(clientDTO);
        var storedUser = repository.findById(clientDTO.getClientId()).orElse(null);
        if (storedUser != null) {
            storedUser.setStatus(UserStatus.OFFLINE);
            repository.save(storedUser);
        }
//        return storedUser;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> findConnectedUsers() {
        return ResponseEntity.ok(repository.findAllByStatus(UserStatus.ONLINE));
    }
}
