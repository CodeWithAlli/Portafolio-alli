import { Github, Mail,MessageCircle, Heart } from "lucide-react";

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#inicio" className="text-lg font-bold gradient-text font-mono">
              &lt;CodeWithAlli /&gt;
            </a>
            <p className="text-muted-foreground text-xs mt-1">
              © {year} | Allison More | Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            Hecho con <Heart size={12} className="text-primary" /> y mucho café
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/CodeWithAlli" },
              { icon: Mail, href: "mailto:allisonmorerivas551@gmail.com" },
              { icon: MessageCircle, href: "https://wa.me/51903562285"},
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
