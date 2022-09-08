package oauth2.pkce.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests -> authorizeRequests.anyRequest().authenticated())
                .sessionManagement()
                .sessionCreationPolicy(STATELESS)
                .and()
                .cors()
                .and()
                .csrf().disable()
                .oauth2ResourceServer()
                .jwt();
        return http.build();
    }
}
