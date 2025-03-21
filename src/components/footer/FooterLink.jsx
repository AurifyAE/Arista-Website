const FooterLink = ({ href, children }) => {
    return (
      <a
        href={href}
        className="text-sm leading-7 text-white hover:text-yellow-600 transition-colors"
      >
        {children}
      </a>
    );
  };
  
  export default FooterLink;
  