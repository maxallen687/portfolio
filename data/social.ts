export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/maxallen687",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/achyutkatiyar2103/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:maxallen03919@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+18575766733",
      icon: "phone"
    }
  ];
