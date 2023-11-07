import '../CSS/mainpagecss/footer.css'

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>კომპანია</h4>
                    <ul>
                        <li><a href="#">ჩვენს შესახებ</a></li>
                        <li><a href="#">ჩვენი სერვისები</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>დახმარება</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="https://www.facebook.com/groups/1307912069858435" target='_blank'>დაგვიკავშირდით ფეისბუქზე</a></li>
                    </ul>
                </div>
                {/* <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div> */}
                <div className="footer-col">
                    <h4>მოგვყევით სოც ქსელებში</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/groups/1307912069858435" target='_blank'><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-discord"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <i className='sponsor'>Made By VIOR Community</i>
   </footer>
     );
}
 
export default Footer;