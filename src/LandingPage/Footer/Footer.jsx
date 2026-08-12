import footer from "./Footer.module.css";

function Footer() {
  return (
    <div className={footer.footerDad}>
      <div className={footer.bioms}>
        {/* the logo and description */}
        <div className={footer.logoAndDiscription}></div>
        {/* the Quick Links */}
        <div className={footer.quickLinks}></div>
        {/* the contact Us */}
        <div className={footer.contactUs}></div>
        {/* the follow us */}
        <div className={footer.followUs}></div>
      </div>
      {/* the border that will separate */}
      <div className={footer.borderFooter}></div>
      {/* the content underneth it */}
      <div className={footer.content}></div>
    </div>
  );
}

export default Footer;
