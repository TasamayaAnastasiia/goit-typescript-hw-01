type Userr = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<Userr>) {
 // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
