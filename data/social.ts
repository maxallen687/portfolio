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
      id: "email",
      name: "Email",
      url: "mailto:maxallen03919@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "+19496855858",
      icon: "phone"
    }
  ];
