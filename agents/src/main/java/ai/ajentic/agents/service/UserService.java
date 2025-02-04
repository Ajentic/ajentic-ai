package ai.ajentic.agents.service;

import ai.ajentic.agents.DTO.UserCreateRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ai.ajentic.agents.model.User;
import ai.ajentic.agents.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User createUser(UserCreateRequestDTO userCreateRequestDTO) {
        Optional<User> existingUser = userRepository.findByUsername(userCreateRequestDTO.getUsername());

        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("User already exists");
        }

        User user = new User();
        user.setUsername(userCreateRequestDTO.getUsername());
        user.setPassword(userCreateRequestDTO.getPassword());  // Consider encrypting the password

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}