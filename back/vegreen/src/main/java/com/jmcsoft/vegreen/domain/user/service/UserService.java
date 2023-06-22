package com.jmcsoft.vegreen.domain.user.service;

import com.jmcsoft.vegreen.domain.user.domain.User;
import com.jmcsoft.vegreen.domain.user.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.net.InetAddress;
import java.net.UnknownHostException;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @PostConstruct
    public void addDummyData() throws UnknownHostException {
        userRepository.save(User.builder()
                .userId("kingjunkyung")
                .email("ljk200@gmail.com")
                .nickname("귀여운 준경이")
                .password("200")
                .profileImageUrl(InetAddress.getLocalHost().getHostAddress() + ":8080/image/defaultProfileImage.jpg")
                .build());
    }

    public User findByUserId(String userId) {
        return userRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected userId"));
    }
}
