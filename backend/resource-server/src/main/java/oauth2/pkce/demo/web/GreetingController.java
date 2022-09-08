package oauth2.pkce.demo.web;

import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class GreetingController {

    @GetMapping("/greeting")
    public String sayHello(@CurrentSecurityContext(expression = "authentication.name") String name) {
//    public String sayHello(JwtAuthenticationToken jwtAuthentication) {
//        return "Hello, " + jwtAuthentication.getTokenAttributes();
        return "Hello, " + name;
    }
}
