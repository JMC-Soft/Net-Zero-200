package com.jmcsoft.vegreen.domain.user.dto;

import com.jmcsoft.vegreen.domain.user.domain.User;
import lombok.Getter;

@Getter
public class UserResponse {

    private final Long id;
    private final String userId;
    private final String email;
    private final String nickname;

    public UserResponse(User user) {
        this.id = user.getId();
        this.userId = user.getUserId();
        this.email = user.getEmail();
        this.nickname = user.getNickname();
    }
}
