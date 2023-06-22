package com.jmcsoft.vegreen.domain.user.controller;

import com.jmcsoft.vegreen.domain.user.domain.User;
import com.jmcsoft.vegreen.domain.user.dto.UserResponse;
import com.jmcsoft.vegreen.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserResponse> getUserByNickname(@PathVariable String userId) {
        User user = userService.findByUserId(userId);
        return ResponseEntity.ok(new UserResponse(user));
    }
}
