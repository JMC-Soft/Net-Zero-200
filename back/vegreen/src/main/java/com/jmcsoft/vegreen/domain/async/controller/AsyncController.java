package com.jmcsoft.vegreen.domain.async.controller;

import com.jmcsoft.vegreen.domain.async.service.AsyncService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/async")
public class AsyncController {

    private final AsyncService asyncService;

    @GetMapping
    public String async() {
        asyncService.asyncMethod();
        return "async";
    }
}
