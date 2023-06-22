package com.jmcsoft.vegreen.domain.user.service;

import com.jmcsoft.vegreen.domain.user.domain.User;
import com.jmcsoft.vegreen.domain.user.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @PostConstruct
    public void addDummyData() {
        userRepository.save(User.builder()
                .userId("kingjunkyung")
                .email("ljk200@gmail.com")
                .nickname("귀여운 준경이")
                .password("200")
                .build());
    }

    public User findByNickname(String nickname) {
        return userRepository.findByNickname(nickname)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }
}
