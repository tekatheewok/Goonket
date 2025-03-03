#include <iostream>
#include <fstream>
#include <string>

struct User {
    std::string username;
    std::string password;
};

bool registerUser(const User& user) {
    std::ofstream file("users.txt", std::ios::app);
    if (!file.is_open()) {
        std::cerr << "Failed to open file for writing.\n";
        return false;
    }
    file << user.username << " " << user.password << "\n";
    file.close();
    return true;
}

bool loginUser(const User& user) {
    std::ifstream file("users.txt");
    if (!file.is_open()) {
        std::cerr << "Failed to open file for reading.\n";
        return false;
    }
    std::string username, password;
    while (file >> username >> password) {
        if (username == user.username && password == user.password) {
            file.close();
            return true;
        }
    }
    file.close();
    return false;
}

int main() {
    int choice;
    User user;

    std::cout << "1. Register\n2. Login\nEnter choice: ";
    std::cin >> choice;

    std::cout << "Enter username: ";
    std::cin >> user.username;
    std::cout << "Enter password: ";
    std::cin >> user.password;

    if (choice == 1) {
        if (registerUser(user)) {
            std::cout << "Registration successful.\n";
        } else {
            std::cout << "Registration failed.\n";
        }
    } else if (choice == 2) {
        if (loginUser(user)) {
            std::cout << "Login successful.\n";
        } else {
            std::cout << "Login failed.\n";
        }
    } else {
        std::cout << "Invalid choice.\n";
    }

    return 0;
}