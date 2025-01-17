declare module "next-auth" {
    interface Sesssion {
        id: string;
    }

    interface JWT {
        id: string;
    }
}