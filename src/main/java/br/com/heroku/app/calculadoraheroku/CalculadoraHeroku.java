package br.com.heroku.app.calculadoraheroku;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class CalculadoraHeroku {
    

    @PostMapping(value="/index")
    public ModelAndView postMethodName(@RequestParam String tela) {
        //TODO: process POST request
        
        System.out.println(tela);


        ModelAndView model = new ModelAndView("index");

        return model;
    }
    

}