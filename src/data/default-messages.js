const defaultMessages = {
  register: {
    conflict: {
      title: 'User already exists',
      message:`Your registration was rejected due to the fact that "User already exists".
        \nPlease review all values submitted and try again later.`,
    },
    success: {
      title: 'Registration Success',
      message: `Your registration was submitted successfully, please login to your account
      to enter`,
    },
  },
  login: {
    unauthorized: {
      title: 'Login Failed',
      message: `Your has failed due to "Invalid password".\nMake sure you have the right
      credentials and try again.`,
    },
    notFound: {
      title: 'User Not Found',
      message: `Login has failed due to "User does not exist".\nMake sure you have the
      right credentials and try again.`,
    },
  },
};

export default defaultMessages;
