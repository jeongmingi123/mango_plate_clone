import axios from "axios";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  status: number;
  data: {
    user: {
      email: string;
      password: string;
      id: string;
    };
    accessToken: string;
  };
}

class AuthService {
  private baseUrl;
  constructor() {
    this.baseUrl = "http://localhost:3003";
  }

  async signUp(user: IUser): Promise<IUserResponse> {
    const config = {
      method: "post",
      url: "http://localhost:3003/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(user),
    };

    return await axios(config);
  }

  async login(user: IUser): Promise<IUserResponse> {
    const config = {
      method: "post",
      url: "http://localhost:3003/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(user),
    };

    return axios(config);
  }

  async getLoggedInUser() {
    const id = localStorage.getItem("id");
    if (!id) {
      return;
    }
    return fetch(`${this.baseUrl}/users/${id}`)
      .then((response) => response.json())
      .catch(console.log);
  }
}

export default AuthService;
