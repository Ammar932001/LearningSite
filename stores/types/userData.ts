export interface UserData {
    name: string;
    phone: number | null; // Assuming phone number is a string
    email: string;
    password: string;
    userState?: string;
}