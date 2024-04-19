export interface ProductObject {
  id: number;
  name: string;
  description: string;
  price: number;
  images: [
    {
      id: number;
    }
  ];
}

export interface AdminMobileNavProps {
  profile: readonly { text: string; fun: () => void }[];
  navigation: { id: number; nav: string }[];
}
export interface ProfileDropdownProps {
    profile: { text: string; fun: () => void }[];
    }

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
