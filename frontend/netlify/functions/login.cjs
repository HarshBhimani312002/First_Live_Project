exports.handler = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);

    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "nest123";

    if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          token: "admin-authenticated",
        }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({
        success: false,
        message: "Invalid Credentials",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};