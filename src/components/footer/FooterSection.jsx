const FooterSection = ({ title, children }) => {
    return (
      <section className="flex flex-col">
        <h2 className="mb-9 text-lg font-medium text-[#B39844] max-sm:mb-5">
          {title}
        </h2>
        {children}
      </section>
    );
  };
  
  export default FooterSection;
  