package com.Hardik.userSystem.service;

import com.Hardik.userSystem.model.User;

import java.util.List;

public interface UserService {



    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);
    Boolean deleteUser(Long id);

    User UpdateUser(Long id, User user);

}
