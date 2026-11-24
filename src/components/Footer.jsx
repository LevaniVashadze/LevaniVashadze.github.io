function Footer() {
  return (
    <footer className="site-footer shell">
      <p>© {new Date().getFullYear()} Levani Vashadze</p>
      <div>
        <a href="https://github.com/LevaniVashadze" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/levanivashadze/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
