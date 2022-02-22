const Footer = () => {
  return (
    <footer className="flex h-8 w-full items-center justify-center border-t">
      {`${new Date().getFullYear()} © Arun George`}
    </footer>
  );
}

export default Footer;