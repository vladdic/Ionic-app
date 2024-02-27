import axios from "axios";

// Константы для авторизации Google
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = import.meta.env
  .VITE_APP_GOOGLE_CLIENT_SECRET;
export const GOOGLE_REDIRECT_URI = "http://localhost:5173/auth";

// URL для запросов авторизации и получения информации о пользователе
export const GOOGLE_AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
export const GOOGLE_TOKEN_URI = "https://accounts.google.com/o/oauth2/token";
export const GOOGLE_USER_INFO_URI =
  "https://www.googleapis.com/oauth2/v1/userinfo";

// Функция для получения токена доступа
export async function getAccessToken(code: string): Promise<string | null> {
  const parameters = {
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
    code: code,
  };

  try {
    const response = await axios.post(GOOGLE_TOKEN_URI, parameters);
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
}
