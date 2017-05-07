package com.mgs.jhipsterapp.cucumber.stepdefs;

import com.mgs.jhipsterapp.JhipsterappApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhipsterappApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
