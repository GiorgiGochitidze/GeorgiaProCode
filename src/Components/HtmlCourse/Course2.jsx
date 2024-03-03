import { Link } from 'react-router-dom';
import CodePlayGround from '../CodePlayGround';
import './css/entering.css'

const Course2 = () => {
    return ( 
        <div className="entering-container">
            <h1>პარაგრაფები და სათაურები</h1>

            <p>დავიწყოთ ყველაზე მარტივი ნაწილით: <b>პარაგრაფები</b> - პარაგრაფები წარმოისახება როგორც: <br />
            &lt;p&gt;&lt;/p&gt; მასში იწერება ნებისმიერი სახის ტექსტი მაგალითად &lt;p&gt;Hello World&lt;/p&gt; <br />
            ის არის ჩვეულებრივი სახის ტექსტი და მასში წერა შეუზღუდავია, ასევე გვაქვს <b>სათაურები</b> - <br />
            &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;, h1 არის ყველაზე დიდი და <br />
            რიცხვის მატებასთან ერთად იკლებს ზომა მაგალითი შეგიძლიათ იხილოთ ქვემოთ:</p>
            <CodePlayGround src="https://codesandbox.io/embed/jg7rny?view=Editor+%2B+Preview&module=%2Findex.html" />

            <h2>&lt;b&gt; და &lt;br&gt; ელემენტები/ტეგები</h2>
            <p>გარდა p და h1 ტეგებისა ასევე გვაქვს დამხმარე ტეგები b და br, b  გამოიყენება ტექსტის გასამუქებლად

            მაგალითად ასე: <b>ეს არის მუქი ტექსტი</b> კოდში დაიწერება როგორც: &lt;b&gt; ეს არის მუქი ტექსტი&lt;/b&gt;
            <br />
            იგივენაირია &lt;strong&gt;&lt;/strong&gt; ტეგიც მაგრამ strong-სა და b ტეგებს შორის განსხვავება ისაა რომ <br />
            strong-ი აღნიშნავს ისეთ ტექსტს რომელიც სხვისგან არის გამორჩეული და უფრო მეტი მნიშვნელობა აქვს ვიდრე სხვა ტექსტს
            &lt;br /&gt; ტეგი გამოიყენება ტექსტის ახალი ხაზიდან დასაწერად მაგალითები შეგიძლიათ იხილოთ ქვემოთ:
            </p>

            <CodePlayGround src="https://codesandbox.io/embed/9hsntp?view=Editor+%2B+Preview&module=%2Findex.html" />
            
            <Link to='/Course3'><button>გაკვეთილი N3</button></Link>
        </div>
     );
}
 
export default Course2;