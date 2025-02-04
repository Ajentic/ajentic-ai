package ai.ajentic.agents.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()  // Disable CSRF protection if using stateless authentication
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-resources/**", "/webjars/**", "/v1/users/create", "/v1/users/check", "/api/logs/**").permitAll()  // Allow Swagger paths without authentication
                                .anyRequest().authenticated()  // Require authentication for other endpoints
                )
                .httpBasic().disable()
                .formLogin().disable()  // Disable the default form login mechanism
                .logout().disable();


        return http.build();
    }

}
